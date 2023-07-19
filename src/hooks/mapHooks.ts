import { useRef, useEffect, useState } from "react";
import { theme } from "../../config";
import { MarkerClusterer } from "@googlemaps/markerclusterer";
import { loader } from "../services/g-maps-loader";
import { AppDispatch, RootState } from "../store/index";
import { GetData } from "../services/get-data";
import { useSelector } from "react-redux";


export type  typeReduxMapHook = {
   
    dispatch:<AppDispatch>(action: AppDispatch) => void,
        
 
}

export const useGoogleMaps = (state:typeReduxMapHook) => {

    const mapElem = useRef<HTMLDivElement | null>(null);

    const [location, setLocation] = useState<GeolocationPosition | null>(null);
    const [map, setMap] = useState<google.maps.Map | null>(null);
    const [marker, setMarker] = useState<google.maps.Marker | null>(null);
    const [markers, setMarkers] = useState<google.maps.Marker[]>([]);
    const [cluster, setCluster] = useState<MarkerClusterer | null>(null);

    const [zone , setZone] = useState<string>('');

    const stateGmaps = useSelector((state:RootState) => state.permission_gmaps.state);                   


    let newMap: google.maps.Map;
    let newMarker: google.maps.Marker;
    let newCluster: MarkerClusterer;

    const UseEffectMap = useEffect(() => {

        const initialOptions = {

            center: {
                lat: 4.648444872577107, 
                lng: -74.11874117495658
            },
            zoom: 6,
            disableDefaultUI: true,
            mapTypeControl: false,
            fullscreenControl: false,
            panControl: false,
            streetViewControl:false,
            zoomControl:false,
            rotateControl:false,
            scaleControl:false,

        }

        document.getElementById('modal-permission-location')?.addEventListener('click',()=>{
            // check  if the browser support geolocation api 
            navigator.geolocation
            &&
            navigator.geolocation.getCurrentPosition((location: GeolocationPosition) => {

                setLocation(location);
                RenderMap(initialOptions);
                console.log('render map');


            },

            (error: GeolocationPositionError) => {
            
                console.info('error', error);
            
            });

        });        

        stateGmaps && document.getElementById('map')?.addEventListener('click',()=>{
            // check  if the browser support geolocation api 
            navigator.geolocation
            &&
            navigator.geolocation.getCurrentPosition((location: GeolocationPosition) => {

                setLocation(location);
                RenderMap(initialOptions);
                console.log('render map');


            },

            (error: GeolocationPositionError) => {
            
                console.info('error', error);
            
            })
        },{once:true});
    


        return () => {
                
         
            markers.map((marker: google.maps.Marker) => {
                marker.setMap(null);
            });

            markers.splice(0, markers.length);
            setMarkers(markers);
            setMap(null);
            setMarker(null);
            setLocation(null);

        }

    }, []);



    const elementDivWindow =(props:any,type:string):string =>{

       //console.log('props', props);

       if(type ==='route'){
        return`<div>${props.name}</div>`;

       }else if( type ==='place'){

        return`<div>Place</div>`;

       }else if( type ==='point'){
            const img = theme.data_domain + props.media.data[0].attributes.url;
            return`

                <style>
                    .label-marker-maphook{
                    
                    }

                    .label-marker-maphook >  .window-title{

                        display:flex;
                        justify-content:center;
                        align-items:center;
                        width:100%;
                        height: 40px;
                        font-weight:900;
                        font-size:17px;
                    }

                    .label-marker-maphook >  .window-img > img{

                        width:100%;
                        min-height: 200px;
                        max-height:0px;
                        object-fit:cover;
                        border-radius:6px;
                    }

                    .label-marker-maphook >  .window-description{

                        font-size:16px;
                        font-weight:500;
                        color:${theme.colors.grayA};
                    }
                
                </style>
                <br/>
                <div  class="label-marker-maphook">

                    <div class="window-img">
                        <img loading="lazy" src="${img}" alt="${props.name}" />
                    </div>
                    <div class="window-title">
                        <div>${props.name}</div>
                    </div>   
                    <div class="window-description">
                        <p>${props.location.descripcion}</p>
                    </div>
            
                
                </div>
            `;

       }else{
              return`<div>Default</div>`;
       }
       

    }

    const AddZoneGeoJSON = (url:string,map:google.maps.Map, lat:number,lng:number,zoom:number,name:string):void =>{

        GetData([url ],theme.token_cms as string).then((data:any)=>{
            
            map.data.forEach((feature) => {
                map.data.remove(feature);
            });

            for(let i = 0; i < data.length; i++) {

                map.data.addGeoJson(data[i]);
            }
            map.data.setStyle({
                fillColor: '#025809',
                strokeWeight: 3,
                fillOpacity: 0.3,
                strokeColor: '#025809',
                strokeOpacity: 0.2
            });

            map.panTo({lat:lat,lng:lng});
            map.setZoom(zoom);
            
        });
    }

    const RenderMap = (options: any): void => {

        loader
            .load()
            .then((google) => {
                mapElem.current !== null && (newMap = new google.maps.Map(mapElem.current, options));
                setMap(newMap);
            
            })
            .catch((error) => {

                console.info(error);
            });


    }

    const AddMarker = (map:google.maps.Map,position: { lat: number, lng: number }, label: string, icon: string, data_point: any,type_point:string,indexElem:number): void => {


        loader
            .load()
            .then((google) => {
      
                newMarker = new google.maps.Marker({
                    position: position,
                    map: map === null ? newMap : map,
                    icon: {
                        url: `${icon}`,
                        
                        scaledSize: new google.maps.Size(50, 50)
                    },
                    label:{
                        text:label,
                        className:'label-marker-method-addmarker label-addmarker-'+indexElem,
                    }
                });
  
                newMarker?.setMap(map);
                newMarker !== null && markers.push(newMarker);
                setMarker(newMarker);
                setMarkers(markers);
                InfoWindow(newMarker, elementDivWindow(data_point,type_point));
               
                newMarker.addListener("mousedown", () => {
                    
                    const labelMarker = document.querySelector(`.label-addmarker-${indexElem}`) as HTMLDivElement;
                    labelMarker.style.width = "280px";
                    labelMarker.style.height = "35px";
                    labelMarker.style.display = "flex";
                    labelMarker.style.justifyContent = "center";
                    labelMarker.style.alignItems = "center";
  
                });

                newMarker.addListener("mouseover", () => {

                    const labelMarker = document.querySelector(`.label-addmarker-${indexElem}`) as HTMLDivElement;
                    labelMarker.style.width = "280px";
                    labelMarker.style.height = "35px";
                    labelMarker.style.display = "flex";
                    labelMarker.style.justifyContent = "center";
                    labelMarker.style.alignItems = "center";

                });


  

                newMarker.addListener("mouseup", () => {

                    const labelMarker = document.querySelector(`.label-addmarker-${indexElem}`) as HTMLDivElement;
                    labelMarker.style.width = "75px";
                    labelMarker.style.height = "16px";
                    labelMarker.style.display = "block";


                });

                newMarker.addListener("mouseout", () => {

                    const labelMarker = document.querySelector(`.label-addmarker-${indexElem}`) as HTMLDivElement;
                    labelMarker.style.width = "75px";
                    labelMarker.style.height = "16px";
                    labelMarker.style.display = "block";

                });



            })
            .catch((error) => {
                console.info(error);
            });



    };


    const ServicePlaces = (type:string, image:string, center:google.maps.LatLng | undefined): void => {

        const services = new google.maps.places.PlacesService(newMap);
        const request:google.maps.places.PlaceSearchRequest = {
            location: (center !== undefined)  ? center : newMap.getCenter(),
            radius: 5000,
            type: type

        }

        services.nearbySearch(request, (results, status) => {
              
            if(status === google.maps.places.PlacesServiceStatus.OK){

                results?.map((place:any)=>{

                    const position = {
                        lat: place.geometry?.location.lat() as number,
                        lng: place.geometry?.location.lng() as number
                    }

                    newMarker = new google.maps.Marker({
                        position: position,
                        map: map === null ? newMap : map,
                        icon: {
                            url: theme.data_domain + image ,
                            scaledSize: new google.maps.Size(50, 50)
                        }
                    });

                    newMarker?.setMap(newMap);
                    newMarker !== null && markers.push(newMarker);
                    setMarker(newMarker);
                    setMarkers(markers);

                });

                ClusterMarker(markers,map === null ? newMap : map);
            }
        });

    }

    const InfoWindow = (marker:google.maps.Marker,element:string):void => {

        loader
            .load()
            .then((google) => {

                const infowindowMap = new google.maps.InfoWindow({
                    content: element,
                    maxWidth: 320

                });

                marker.addListener("click", () => {
                    infowindowMap.open({
                        anchor: marker,
                        map: map,
                    });

                    infowindowMap.focus();
                });

                map !== null && map.addListener("click", () => {
                    infowindowMap.close();
                });
        

                

            })
            .catch((error) => {
                console.info(error);
            });
    }

    const ClusterMarker = (markers: google.maps.Marker[], map:google.maps.Map) => {

        newCluster = new MarkerClusterer({
            map: map === null ? newMap : map,
            markers: markers,
            /*renderer: {
                render: ({ count, position }) =>
                    new google.maps.Marker({
                        label: { text: String(count) + ' ', color: "white", fontSize: "18px", fontWeight: "700", },
                        position,
                        // adjust zIndex to be above other markers
                        zIndex: Number(google.maps.Marker.MAX_ZINDEX) + count,
                        icon: {
                            url: theme.data_domain + '/uploads/place_icon_c0c5c92329.webp?updated_at=2023-03-29T23:06:48.319Z',
                            scaledSize: new google.maps.Size(74, 78)
                        },
                    

                    })
            },*/
            
        });

        newCluster.setMap(map);
        setCluster(newCluster);

    }

    const CreateRoute = (points:any[]) => {

        loader
            .load()
            .then((google) => {

                let options_render ={
                    markerOptions:{visible:false},
                    polylineOptions:{strokeColor:theme.colors.secondaryA,zIndex:99999,strokeWeight:4}
                }

                const directionsService = new google.maps.DirectionsService();
                const directionsRenderer = new google.maps.DirectionsRenderer(options_render);

                directionsRenderer.setMap(newMap);

                const waypts:any[] = [];

                points.map((point:any)=>{
                    waypts.push({
                        location: point,
                        stopover: true
                    });
                }

                );

                directionsService.route(
                    {
                        origin: points[0],
                        destination: points[points.length - 1],
                        waypoints: waypts,
                        optimizeWaypoints: true,
                        travelMode: google.maps.TravelMode.DRIVING,
                    },
                    (response, status) => {
                        if (status === "OK") {
                            directionsRenderer.setDirections(response);
                        } else {
                            window.alert("Directions request failed due to " + status);
                        }
                    }
                );

                


            })
            .catch((error) => {
                console.info(error);
            });
    };

    return {
        location,
        map,
        setMap,
        marker,
        markers,
        mapElem,
        RenderMap,
        UseEffectMap,
        AddMarker,
        ClusterMarker,
        ServicePlaces,
        CreateRoute,
        AddZoneGeoJSON,
        setMarkers,
        cluster,
        setCluster,
    }
}

/*


*/