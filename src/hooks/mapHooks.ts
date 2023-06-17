import { useRef, useEffect, useState } from "react";
import { theme } from "../../config";
import { MarkerClusterer } from "@googlemaps/markerclusterer";
import { loader } from "../services/g-maps-loader";
import { AppDispatch, RootState } from "../store/index";


export type  typeReduxMapHook = {
   
    dispatch:<AppDispatch>(action: AppDispatch) => void,
        
 
}

export const useGoogleMaps = (state:typeReduxMapHook) => {

    const mapElem = useRef<HTMLDivElement | null>(null);

    const [location, setLocation] = useState<GeolocationPosition | null>(null);
    const [map, setMap] = useState<google.maps.Map | null>(null);
    const [marker, setMarker] = useState<google.maps.Marker | null>(null);
    const [markers, setMarkers] = useState<google.maps.Marker[]>([]);


    let newMap: google.maps.Map;
    let newMarker: google.maps.Marker;
    let cluster: MarkerClusterer;

    const UseEffectMap = useEffect(() => {


        // check  if the browser support geolocation api 
        navigator.geolocation
        &&
        navigator.geolocation.getCurrentPosition((location: GeolocationPosition) => {

            setLocation(location);

            const options = {

                center: {
                    lat: 4.648444872577107, 
                    lng: -74.11874117495658
                },
                zoom: 7,
                mapTypeControl: false,
                fullscreenControl: false,
                panControl: false

            }

            RenderMap(options);


        },

        (error: GeolocationPositionError) => {
        
            console.info('error', error);
        
        });

        return () => {
                
            
            setMap(null);
            setMarker(null);
            setMarkers([]);

        }

    }, []);



    const elementDivWindow =(props:any):string =>{

        console.log(props);
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
                font-weight:900;
            }

            .label-marker-maphook >  .window-img > img{

                width:100%;
                height: 280px;
                object-fit:cover;
                border-radius:6px;
            }

            .label-marker-maphook >  .window-description{

                font-size:16px;
                font-weight:400;
                color:${theme.colors.grayA};
            }
        
        </style>
        <br/>
        <div  class="label-marker-maphook">
            
            <div class="window-title">
                <h2>${props.name}</h2>
            </div>   

            <div class="window-img">
                <img src="${img}" alt="${props.name}" />
            </div>

            <div class="window-description">
                <p>${props.location.descripcion}</p>
            </div>
    
           
        </div>
        `;
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

    const AddMarker = (position: { lat: number, lng: number }, label: string, icon: string, data_point: any): void => {

        loader
            .load()
            .then((google) => {

                newMarker = new google.maps.Marker({
                    position: position,
                    map: newMap,
                    icon: {
                        url: `${icon}`,
                        scaledSize: new google.maps.Size(65, 65)
                    }
                });

                newMarker?.setMap(newMap);
                newMarker !== null && markers.push(newMarker);
                setMarker(newMarker);

                InfoWindow(newMarker, elementDivWindow(data_point));



            })
            .catch((error) => {
                console.info(error);
            });



    };

    const ServicePlaces = (): void => {

        const services = new google.maps.places.PlacesService(newMap);
        const request = {
            location: newMap.getCenter(),
            radius: 500,
            types: ['restaurant', 'cafe', 'food', 'bar', 'bakery', 'meal_delivery', 'meal_takeaway', 'night_club', 'lodging', 'spa', 'gym', 'park', 'museum', 'art_gallery', 'aquarium', 'zoo', 'shopping_mall', 'movie_theater', 'amusement_park', 'casino', 'church', 'mosque', 'synagogue', 'hindu_temple', 'university', 'school', 'library', 'stadium', 'city_hall', 'embassy', 'courthouse', 'post_office', 'police', 'fire_station', 'hospital', 'pharmacy', 'doctor', 'dentist', 'veterinary_care', 'atm', 'bank', 'gas_station', 'car_repair', 'car_wash', 'parking', 'bus_station', 'train_station', 'subway_station', 'taxi_stand', 'airport', 'travel_agency', 'campground', 'rv_park', 'natural_feature', 'point_of_interest', 'establishment']

        }

        services.nearbySearch(request, (results, status) => {
              console.log(results);
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
                        map: newMap,
                    });
                });

        

                infowindowMap.focus();

            })
            .catch((error) => {
                console.info(error);
            });
    }

    const ClusterMarker = (markers: google.maps.Marker[]) => {

        cluster = new MarkerClusterer({
            map: newMap,
            markers: markers,
            renderer: {
                render: ({ count, position }) =>
                    new google.maps.Marker({
                        label: { text: String(count) + ' ', color: "white", fontSize: "26px", fontWeight: "900" },
                        position,
                        // adjust zIndex to be above other markers
                        zIndex: Number(google.maps.Marker.MAX_ZINDEX) + count,
                        icon: {
                            url: theme.data_domain + '/uploads/place_icon_c0c5c92329.webp?updated_at=2023-03-29T23:06:48.319Z',
                            scaledSize: new google.maps.Size(116, 116)
                        },

                    })
            }
        });



    }


    return {
        location,
        map,
        marker,
        markers,
        mapElem,
        RenderMap,
        UseEffectMap,
        AddMarker,
        ClusterMarker,
        ServicePlaces
    }
}

/*


*/