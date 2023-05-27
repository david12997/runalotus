import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { useGoogleMaps } from "../../hooks/mapHooks";
import { theme } from "../../../config";
import CardButtonMap from "./card-button";
import CardFilter from "./card-filter";
import { GetData } from "../../services/get-data";
import { useRouter } from "next/router";


const StyleMap = styled.section`


    grid-area:map;
    width:100vw;
    height:99.6vh;
    overflow:hidden;
    position:relative;

    & > #map{

       width:100%;
       height:100%;
       position:relative;
       z-index:1;
      
    }
    & > .menu{

        position:absolute;
        width:43%;
        height:78%;
        z-index:999;
        top:12%;
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

    & > .filter{

        position:absolute;
        width:99.5%;
        height:70px;
        top:0;
        z-index:999;
        display:flex;
        overflow-y:hidden;
        overflow-x:scroll;

        @media(min-width:800px){
            width:79%;
            left:20%;
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
        top:90%;
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



export default function Map():JSX.Element{

    const mapHook =  useGoogleMaps();
    const [filters, setFilters] = useState<any[]>([]);
    const [menu, setMenu] = useState<boolean>(false);
    const router = useRouter();

    //set up first render 
    mapHook.UseEffectMap;

    useEffect(()=>{

        GetData([
            
            'https://cms.aipus.co/api/points?populate=*',
            'https://cms.aipus.co/api/subcategories?populate=*&filters[category][id][$eq]=4'
        
        ],theme.token_cms).then(data=>{
            
            //filters map
            data[1].data.forEach((currfilter:any, index:number)=>{

                setFilters( currentFilters =>{
                    return [...currentFilters, {name:currfilter.attributes.name,img:currfilter.attributes.media.data[0].attributes.url} ]
                } );

            })
            
            //points map
            data[0].data.forEach((point:any, index:number)=>{
                    
                let position:{lat:number, lng:number} ={
                    lat:point.attributes.location.latitud,
                    lng:point.attributes.location.longitud
                }
               
             
                
                mapHook.AddMarker(position,point.attributes.location.nombre,point.attributes.location.icon);
                
              
                
               
            });

            setTimeout(()=>mapHook.ClusterMarker(mapHook.markers),1000);
            

        })
        .catch(err=>console.log(err));
        
        
    },[]);


  
    return<StyleMap>
        
        <div ref={mapHook.mapElem} id="map"></div>

        <div className="filter">
            {
                filters.length > 0
                && 
                filters.map((elem:any,index:number)=><CardFilter font_size="15px" key={index} text={elem.name} img={elem.img}/>)
            }

        </div>

        <div onClick={()=>setMenu(!menu)} className="open-close-menu">
                Menu 
                <img src={theme.data_domain+'/uploads/menu_29bc2346df.webp?updated_at=2023-03-30T14:54:12.876Z'} />
        </div>


        <div className={menu ? "menu show-menu" : "menu hidde-menu"}>

            <CardButtonMap click={()=>console.log('click')} text="Runalotus" img="/uploads/logos_runalotus_2_1c6be0aa11.png?updated_at=2023-03-15T15:03:29.668Z"/>
            <CardButtonMap click={()=>console.log('click')} text="Buscar destino" img="/uploads/search_ba2ffa87fa.webp?updated_at=2023-03-28T21:36:16.178Z"/>
            <CardButtonMap click={()=>console.log('click')} text="Categorias" img="/uploads/category_6e81060994.webp?updated_at=2023-03-28T21:36:16.084Z"/>
            <CardButtonMap click={()=>console.log('click')} text="Rutas turisticas" img="/uploads/route_4078736476.webp?updated_at=2023-03-28T21:36:16.207Z"/>
            <CardButtonMap click={()=>console.log('click')} text="Paquetes  turisticos" img="/uploads/tourism_6d2e7647ac.webp?updated_at=2023-03-28T21:36:16.192Z"/>
            <CardButtonMap click={()=>router.push('/')}  text="Salir" img="/uploads/log_out_4329905_3599716_a374517b4e.png?updated_at=2023-03-29T17:29:23.209Z"/>
            
        </div>

    </StyleMap>
}