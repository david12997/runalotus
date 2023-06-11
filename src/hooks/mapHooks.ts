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
                        lat: location.coords.latitude,
                        lng: location.coords.longitude
                    },
                    zoom: 11,
                    mapTypeControl: false,
                    fullscreenControl: false,
                    panControl: false

                }

                const markerPosition: { lat: number, lng: number } = {

                    lat: location.coords.latitude,
                    lng: location.coords.longitude
                }


                RenderMap(options);
                AddMarker(markerPosition, 'Invitado', theme.data_domain +'/uploads/user_3e6cd965b6.webp?updated_at=2023-03-29T19:54:22.718Z', "Your location :");




            },
                (error: GeolocationPositionError) => {
                    console.info('error', error);
                })

    }, []);



    const elementDivWindow =(props:string):string =>{

        return`

        <div  class="label-marker-maphook">
            <div class="window-title">
                <h3>Runalotus</h3>
                gtjdrfiiiiiig
                gjifdjgfdjgfdkgjkfdfgfgfdgfdg
                dfjgfdgjkfdjgkffdgfdgfdgfdgfdg
                fgkofdgkfdgldfdffgfdgf
                <div style="width:300px;height:300px;">fgdfhgdfsg</div>
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

    const AddMarker = (position: { lat: number, lng: number }, label: string, icon: string, text: string): void => {

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

                InfoWindow(newMarker, elementDivWindow(text));



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
                    maxWidth: 500,

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