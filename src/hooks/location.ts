import {  useRef, useEffect, useState } from "react";



export const useLocation = () =>{

    type geoLocationType ={
        address:string,
        coord:{
            lng:number,
            lat:number
        }
    }

    const [map,setMap] = useState<google.maps.Map>();
    const [marker,setMarker] = useState<google.maps.Marker>();
    const [geoLocation, setGeoLocation] = useState<geoLocationType>();

    const mapElem = useRef<HTMLDivElement | null>(null);
    const modalUnsupportGeolocation = useRef<HTMLDivElement | null>(null);
    const inputAutoComplete = useRef<HTMLInputElement>(null);
    
    let newMap:google.maps.Map;
    let newMarker:google.maps.Marker;
    let autocomplete:google.maps.places.Autocomplete;

    const RenderMap = (options:google.maps.MapOptions)=>{

        newMap = new google.maps.Map(mapElem.current as HTMLDivElement,options);
        setMap(newMap);


    }

    const AddMarker = ( position:any )=>{

       newMarker = new google.maps.Marker({
            position:position,
            map:newMap,
            animation:google.maps.Animation.DROP
        });

        setMarker(newMarker);
    }

    
    const PlaceAutoComplete = (input:HTMLInputElement)=>{

        const options = {
            
            fields:['address_components','geometry','icon','name'],
            origin:newMap,
            strictBounds:false,

        }

        autocomplete = new google.maps.places.Autocomplete(input,options);
        autocomplete.bindTo('bounds',newMap);

        autocomplete.addListener('place_changed',()=>{

            const place = autocomplete.getPlace();
            if(place.geometry !== undefined ){

                newMarker !== undefined && newMarker.setMap(null);
                

                AddMarker(place.geometry.location);
    
                place.geometry.location !== undefined && newMap.setCenter(place.geometry.location);
                newMap.setZoom(17);
            }


        });

    }


    const SuccessGeoPosition = (location:GeolocationPosition)=>{

        const options = {
            center:{
                lat:location.coords.latitude,
                lng:location.coords.longitude
            },
            zoom:11,
            mapTypeControl:false,
            fullscreenControl:false,
            panControl:false
        }


        RenderMap(options);
        PlaceAutoComplete(inputAutoComplete.current as HTMLInputElement);
        




        
    };

    const ErrorGeoPosition = (error:GeolocationPositionError)=>console.log('error',error);


    const useEffectLocation = useEffect(()=>{


        if("geolocation" in navigator){

            console.log('soporta geolocation')
            navigator.geolocation.getCurrentPosition(SuccessGeoPosition,ErrorGeoPosition);


        }else{
            console.log('no soporta geolocation');
        }

    },[]);

    return{
        mapElem,
        modalUnsupportGeolocation,
        useEffectLocation,
        map,
        marker,
        inputAutoComplete,
        geoLocation


    }
}