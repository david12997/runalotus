import {  useRef, useEffect, useState } from "react";
import { loader } from "../services/g-maps-loader";
import { theme } from "../../config";

import { setLocationGlobalState } from "../store/location";



export const useLocation = (dispatch:any, locationGlobalState:any) =>{

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
    const buttonSaveLocation = useRef<HTMLDivElement>(null);
    
    let newMap:google.maps.Map;
    let newMarker:google.maps.Marker;
    let autocomplete:google.maps.places.Autocomplete;

    const RenderMap = (options:google.maps.MapOptions)=>{

        loader
        .load()
        .then((google)=>{

            newMap = new google.maps.Map(mapElem.current as HTMLDivElement,options);
            setMap(newMap);//set map in state

            //if location exist add marker
            if(locationGlobalState.location.geolocation.lat !== undefined && locationGlobalState.location.geolocation.lng !== undefined){

                AddMarker(locationGlobalState.location.geolocation);

                //set input value location in input autocomplete 
                inputAutoComplete.current?.setAttribute('value',locationGlobalState.location.value);

            }

        })
        .catch((error)=>{

            console.info(error);
        });



    }

    const AddMarker = ( position:any )=>{

        loader
        .load()
        .then((google)=>{

            newMarker = new google.maps.Marker({
                position:position,
                map:newMap,
                animation:google.maps.Animation.DROP
            });
    
            setMarker(newMarker);
        })
        .catch((error)=>{

            console.info(error);
        })

       
    }

    
    const PlaceAutoComplete = (input:HTMLInputElement)=>{

        const options = {
            
            fields:['address_components','geometry','icon','name'],
            origin:newMap,
            strictBounds:false,

        }

        loader
        .load()
        .then((google)=>{

            
            //current html element button save
            const btnSave =buttonSaveLocation.current as HTMLDivElement;
            
            //autocomplete instance google maps
            autocomplete = new google.maps.places.Autocomplete(input,options);
            autocomplete.bindTo('bounds',newMap);
    
            //autocomplete event place_changed 
            autocomplete.addListener('place_changed',()=>{
              
                const place = autocomplete.getPlace();

                if(place.geometry !== undefined ){
                    
                    // if marker exist remove marker
                    newMarker !== undefined && newMarker.setMap(null);
                    //add marker
                    AddMarker(place.geometry.location);
                    
                    // if location exist set center map
                    place.geometry.location !== undefined && newMap.setCenter(place.geometry.location);
                    newMap.setZoom(17);

                   //enable button save
                    btnSave.style.background = theme.colors.secondaryA;
                    btnSave.style.color = theme.colors.white;

                    //save location in localstorage using redux dispatch this method just execute once
                    btnSave.addEventListener('click',()=>{
                        
                        //redux dispatch action setLocationGlobalState 
                        place.geometry !== undefined && dispatch(setLocationGlobalState({
                            address_components:place.address_components,
                            geolocation:{
                                lat:place.geometry.location?.lat(),
                                lng:place.geometry.location?.lng()
                                
                            },
                            value:input.value
                        }));

                        //disable button save
                        btnSave.style.background = theme.colors.grayC;
                        btnSave.style.color = theme.colors.grayA;

                        
                        
                    },{once:true})
                
                }else console.info('no se encontro el lugar'); 
    
    
            });

        })
        .catch((error)=>{

            console.info(error);
        })



    }


    const SuccessGeoPosition = (location:GeolocationPosition)=>{

        let options:google.maps.MapOptions;

        //if location exist set options map with location in state else set options map with location in navigator
        if(locationGlobalState.location.geolocation.lat !== undefined && locationGlobalState.location.geolocation.lng !== undefined){

            options = {
                center:{
                    lat:locationGlobalState.location.geolocation.lat,
                    lng:locationGlobalState.location.geolocation.lng
                },
                zoom:11,
                mapTypeControl:false,
                fullscreenControl:false,
                panControl:false
            }

        }else{

            options = {
                center:{
                    lat:location.coords.latitude,
                    lng:location.coords.longitude
                },
                zoom:11,
                mapTypeControl:false,
                fullscreenControl:false,
                panControl:false
            }
        }

       
        RenderMap(options);
        PlaceAutoComplete(inputAutoComplete.current as HTMLInputElement);
        




        
    };

    const ErrorGeoPosition = (error:GeolocationPositionError)=>console.info('error',error);


    const useEffectLocation = useEffect(()=>{


        if("geolocation" in navigator){

            console.info('soporta geolocation')
            navigator.geolocation.getCurrentPosition(SuccessGeoPosition,ErrorGeoPosition);


        }else{
            console.info('no soporta geolocation');
        }

    },[]);

    return{
        mapElem,
        modalUnsupportGeolocation,
        useEffectLocation,
        map,
        marker,
        inputAutoComplete,
        geoLocation,
        buttonSaveLocation


    }
}