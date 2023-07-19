import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { typeReduxMapHook, useGoogleMaps } from "../../hooks/mapHooks";
import { theme } from "../../../config";
import CardButtonMap from "./card-button";
import CardFilter from "./card-filter";
import { GetData } from "../../services/get-data";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../store";
import Filters from "./filters";
import { setPermissionGmaps } from "../../store/permission-gmaps";



const StyleMap = styled.section`

    top:-10px;
    grid-area:map;
    width:100vw;
    height:calc(100vh - 25px);
    overflow:hidden;
    position:relative;

    & > #map{

        width:100%;
        height:100%;
        position:relative;
        z-index:1;
        background-image: url(${`${theme.data_domain}/uploads/location_permision_c825a9db60.webp`});
        background-repeat: no-repeat;
        background-size:contain;
        background-position: center;
        
      
    }
    & > .menu{

        position:absolute;
        width:43%;
        height:78%;
        z-index:999;
        top:10%;
        left:5px;
        overflow-y:scroll;
        overflow-x:hidden;
       
        @media(min-width:800px){
            width:20%;
            height:100%;
            top:5px;
        }
        @media(min-width:1000px){
            width:15%;
        }

        
    }



    & > .open-close-menu{

        display:flex;
        justify-content:space-around;
        align-items:center;
        width:41%;
        left:1%;
        box-shadow:0px 0px 6px rgba(0,0,0,0.5);
        height:50px;
        border-radius:10px;
        background:${theme.colors.white};
        color:${theme.colors.balck};
        font-size:16px;
        font-weight:800;
        position:absolute;
        top:86%;
        z-index:9999;

        @media(min-width:800px){
            display:none;
        }

        & > img{
            height:30px;
        }
    }

    & > .hidde-menu{
        display:none;
        @media(min-width:800px){
            display:block;
        }
 
    }
    & > .show-menu{
        display:block;
    }


`;


export type Filter ={
    name:string,
    img:string,
    value:string,
    geoJSON?:string,
    lat?:number | string,
    lng?:number | string

}

export default function Map():JSX.Element{

    const state:typeReduxMapHook = {
        dispatch:useDispatch<AppDispatch>()    
    } 


    const mapHook =  useGoogleMaps(state);
    const [filters, setFilters] = useState<Filter[][]>();     
    const dispatch = useDispatch<AppDispatch>();  
    const stateGmaps = useSelector((state:RootState)=>state.permission_gmaps.state);


    const [menu, setMenu] = useState<boolean>(false);

   

    useEffect(()=>{

        stateGmaps && GetData([
            
            //'https://cms.aipus.co/api/points?populate=*', //get all points
            'https://cms.aipus.co/api/subcategories?populate=*&filters[category][id][$eq]=4',//filters tourism point
           // 'https://cms.aipus.co/api/routes?populate=*',//get all routes
            'https://cms.aipus.co/api/subcategories/45?populate[0]=places.media',// departments cololmbia filter
            'https://cms.aipus.co/api/categories/8?populate[0]=subcategories.media', //filters alojamientos
            'https://cms.aipus.co/api/categories/7?populate[0]=subcategories.media', //filters restaurantes y comida
            'https://cms.aipus.co/api/categories/11?populate[0]=subcategories.media', //filters trasportes y tipos de transporte
            'https://cms.aipus.co/api/categories/12?populate[0]=subcategories.media',
            'https://cms.aipus.co/api/subcategories/61?populate[0]=places.media' // cities colombia
        ],theme.token_cms as string).then(data=>{

            //all filters
            const parseAllFilters:Filter[][] | any[][] = [];

            /* 
            //points map
            data[0].data.forEach((point:any, index:number)=>{
                    
                let position:{lat:number, lng:number} ={
                    lat:point.attributes.location.latitud,
                    lng:point.attributes.location.longitud
                }
               
                let img = theme.data_domain+point.attributes.media.data[0].attributes.url
              //  console.log(mapHook.mapElem.current);
                mapHook.AddMarker(mapHook.map, position,point.attributes.location.nombre,img, point.attributes,'point',index);
               
            });
            */


            //filters tourism
           parseAllFilters[0] = data[0].data.map((currfilter:any, index:number)=>{
                return{
                    name:currfilter.attributes.name,
                    value:currfilter.attributes.name,
                    img:currfilter.attributes.media.data[0].attributes.url
                }
            });
            parseAllFilters[0].unshift({
                name:'Ver todo',
                value:'Ver todo',
                img:'/uploads/ver_todo_dbd9bbcc6d.webp'
            });

            //filters departments 
            parseAllFilters[1] = data[1].data.attributes.places.data.map((currfilter:any, index:number)=>{
                return{
                    name:currfilter.attributes.name,
                    value:currfilter.attributes.name,
                    img:currfilter.attributes.media.data[0].attributes.url,
                    geoJSON:theme.data_domain+currfilter.attributes.data.geoJSON,
                    lat:parseFloat(currfilter.attributes.location.latitud),
                    lng:parseFloat(currfilter.attributes.location.longitud)
                }
            });


            //filters cities
            parseAllFilters[6] = data[6].data.attributes.places.data.map((currfilter:any, index:number)=>{
                return{
                    name:currfilter.attributes.name,
                    value:currfilter.attributes.name,
                    img:currfilter.attributes.media.data[0].attributes.url,
                    geoJSON:theme.data_domain+currfilter.attributes.data.geoJSON,
                    lat:parseFloat(currfilter.attributes.location.latitud),
                    lng:parseFloat(currfilter.attributes.location.longitud)
                }
            });


            //everything else  filters 
            data.forEach((currData:any, index:number)=>{

                if(index > 1 && index < 6){ 

                    parseAllFilters[index] = currData.data.attributes.subcategories.data.map((currfilter:any, index:number)=>{
                        return{
                            name:currfilter.attributes.name,
                            value:currfilter.attributes.name,
                            img:currfilter.attributes.media.data[0].attributes.url
                        }
                    });
                }
                
            });
            

            setFilters(parseAllFilters as [Filter[]]);

            /*
            //points routes map
             const pointsRoute:any[] = [];
            data[2].data[0].attributes.points.data.forEach((point:any, index:number)=>{

                let position:{lat:number, lng:number} ={
                    lat:point.attributes.location.latitud,
                    lng:point.attributes.location.longitud
                    
                }

                pointsRoute.push(new google.maps.LatLng(position.lat, position.lng));
               // mapHook.AddMarker(position,point.attributes.location.nombre,theme.data_domain +point.attributes.location.icon, point.attributes,'route');
               
            
            });
            */

            //const pointsNS:any[] = pointsRoute.sort((a,b)=>b.lat()-a.lat());
            //const pointsWE:any[] = pointsRoute.sort((a,b)=>b.lng()-a.lng());
            //const pointsNSWE:any[] = pointsRoute.sort((a,b)=>b.lng()-a.lng()).sort((a,b)=>b.lat()-a.lat());
            //const pointsWENS:any[] = pointsRoute.sort((a,b)=>b.lat()-a.lat()).sort((a,b)=>b.lng()-a.lng());
           // mapHook.CreateRoute(pointsNSWE);

            //mapHook.ServicePlaces('restaurant','/uploads/restaurantes_9f899ec002.webp',undefined);
            //mapHook.ServicePlaces('tourist_attraction','/uploads/maravillas_c3545982d8.webp');
            //mapHook.ServicePlaces('shopping_mall','/uploads/supermercados_8558f1091a.webp');
            //mapHook.ServicePlaces('lodging','/uploads/hoteles_9345fb456d.webp');



           //setTimeout(()=>mapHook.ClusterMarker(mapHook.markers),1000);

            

        })
        .catch(err=>console.log(err));

        return ()=>{ }
        
    },[stateGmaps, mapHook.map]);


  
    return<StyleMap>
        
        <div ref={mapHook.mapElem} id="map"></div>
        {
            filters !== undefined &&
            <Filters 
                mapHook={mapHook}
                filtersTourismPoint={filters[0]}
                filtersZones={[...filters[6] ,...filters[1].reverse()]} 
                filtersAlojamientos={filters[2]}    
                filtersRestaurantes={filters[3]}
                filtersTrasportes={filters[4]}
                filtersCompras={filters[5]}

                
            />
        }


        <div onClick={()=>setMenu(!menu)} className="open-close-menu">
                Menu 
                <img loading="lazy" src={theme.data_domain+'/uploads/menu_29bc2346df.webp?updated_at=2023-03-30T14:54:12.876Z'} />
        </div>


        <div className={menu ? "menu show-menu" : "menu hidde-menu"}>
            <CardButtonMap selected click={()=>console.log('click')} text="Mapa" img="/uploads/map_4ebcdadc2c.webp"/>
            <CardButtonMap selected={false} click={()=>console.log('click')} text="Rutas turisticas" img="/uploads/route_4078736476.webp?updated_at=2023-03-28T21:36:16.207Z"/>
            <CardButtonMap selected={false} click={()=>console.log('click')} text="Paquetes  turisticos" img="/uploads/tourism_6d2e7647ac.webp?updated_at=2023-03-28T21:36:16.192Z"/>

            <CardButtonMap selected={false} click={()=>console.log('click')} text="Cultura" img="/uploads/CULTURA_d93911fe4a.png"/>
            
        </div>

    </StyleMap>
}