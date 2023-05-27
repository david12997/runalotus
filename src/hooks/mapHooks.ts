import {  useRef, useEffect, useState } from "react";
import { theme } from "../../config";
import { MarkerClusterer } from "@googlemaps/markerclusterer";



export const useGoogleMaps = () =>{

    const mapElem = useRef<HTMLDivElement | null>(null);

    const [location,setLocation] = useState<GeolocationPosition | null>(null);
    const [map, setMap] = useState<google.maps.Map | null>(null);
    const [marker, setMarker] = useState<google.maps.Marker | null>(null);
    const [markers, setMarkers] = useState< google.maps.Marker[]>([]);


    let newMap:google.maps.Map;
    let newMarker:google.maps.Marker;
    let cluster :MarkerClusterer;

    const UseEffectMap = useEffect(()=>{

      
        // check  if the browser support geolocation api 
        navigator.geolocation
        &&
        navigator.geolocation.getCurrentPosition((location:GeolocationPosition)=>{

            setLocation(location);
            
            const options = {

                center:{
                    lat:location.coords.latitude,
                    lng:location.coords.longitude
                },
                zoom:7,
                mapTypeControl:false,
                fullscreenControl:false,
                panControl:false
        
            }

            const markerPosition:{lat:number, lng:number} = {

                lat:location.coords.latitude,
                lng:location.coords.longitude
            }


                RenderMap(options);
                AddMarker(markerPosition,'Invitado','/uploads/user_3e6cd965b6.webp?updated_at=2023-03-29T19:54:22.718Z');



            
        },
        (error:GeolocationPositionError)=>{
           console.info('error',error);
        })

    },[]);
    


    


    const RenderMap = (options:any):void =>{

        mapElem.current !== null && (newMap = new google.maps.Map(mapElem.current,options));
        setMap(newMap);

    }

    const AddMarker = (position:{lat:number,lng:number}, label:string, icon:string):void =>{

        newMarker = new google.maps.Marker({
            position:position,
            map:newMap,
            label:{
                text:" 1",
                fontSize:"20px",
                fontWeight:"900"
            } ,
            icon:{
                url:`${theme.data_domain+icon}`,
                scaledSize:new google.maps.Size(70,70)
            }
        });

        newMarker?.setMap(newMap);
        newMarker !== null && markers.push(newMarker);
        setMarker(newMarker);


    };


    const ClusterMarker = (markers:google.maps.Marker[])=>{

        cluster = new MarkerClusterer({
            map:newMap,
            markers:markers,
            renderer:{
                render:({ count, position }) =>
                    new google.maps.Marker({
                    label: { text: String(count)+' ', color: "white", fontSize: "26px", fontWeight:"900" },
                    position,
                    // adjust zIndex to be above other markers
                    zIndex: Number(google.maps.Marker.MAX_ZINDEX) + count,
                    icon:{
                        url:theme.data_domain+'/uploads/place_icon_c0c5c92329.webp?updated_at=2023-03-29T23:06:48.319Z',
                        scaledSize:new google.maps.Size(169,169)
                    },
                    
                })
            }
        });

      

    }


    return{
        location,
        map,
        marker,
        markers,
        mapElem,
        RenderMap,
        UseEffectMap,
        AddMarker,
        ClusterMarker
    }
}

/*


*/