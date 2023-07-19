import React, { useEffect } from "react";
import styled from "styled-components";
import CardFilter from "./card-filter";
import { theme } from "../../../config";
import Select from "react-select";
import { Filter } from "./map";
import { GetData } from "../../services/get-data";

const StyleFilters = styled.div`

    & > .filter{

        position:absolute;
        width:99.5%;
        height:65px;
        top:0;
        z-index:999;
        display:flex;
        overflow-y:hidden;
        overflow-x:scroll;
       padding-top: 5px;

        & > .tourism-points-filter{
            position:relative;
            width:186px;

        }


        @media(min-width:800px){
            width:79%;
            left:20%;
        }
    }

`;

type PropsFilters={
    mapHook:any,
    filtersTourismPoint:Filter[],
    filtersZones:Filter[],
    filtersAlojamientos:Filter[],
    filtersRestaurantes:Filter[],
    filtersTrasportes:Filter[],
    filtersCompras:Filter[],

}
export default function Filters(props:PropsFilters):JSX.Element{ 

    const customStylesTourismFilters = {

        control: (base:any) => ({
          ...base,
          height: 48,
          minHeight: 48,
          fontSize:16,
          fontWeight:700,
          width:184,
          marginLeft:5,
          borderRadius:30,
          
         
        })
    };
    
    const [airports,setAirports] = React.useState<any[]>([]);
    const [montañas,setMontañas] = React.useState<any[]>([]);
    
    const Hideclusters = () =>{

        if(props.mapHook.cluster !== null){
            
            props.mapHook.cluster.removeMarkers(props.mapHook.markers);
            props.mapHook.cluster.clearMarkers();
            props.mapHook.cluster.reset();
            //rops.mapHook.cluster.setMap(null);
           // props.mapHook.setCluster(null);

        }
        props.mapHook.markers.map((marker:any,index:number)=>{

            marker.setMap(null);
        });
        
        props.mapHook.setMarkers([]);
        console.log(props.mapHook.cluster,'hidecluster');

    };

    return<StyleFilters>

        <div className="filter">

            <div className="tourism-points-filter">

                <Select
                    placeholder="Lugares"
                    id="zones-filters"
                    instanceId={"tourism-filters"}
                    menuShouldScrollIntoView={false}//this property is for fix scroll all page and allow to scroll only select
                    menuPosition="fixed" //this property is for fix scroll all page and allow to scroll only select
                    options={props.filtersZones}
                    formatOptionLabel={(e)=>(
                        <div style={{display:'flex',alignItems:'center'}}>
                            <img  loading="lazy" style={{width:"30px", marginRight:'10px',marginLeft:'5px'}} src={theme.data_domain+e.img}/> {e.name}
                        </div>
                    )}
                    styles={customStylesTourismFilters}
                    onChange={(e)=>{
                        
                        let zoom:number;
                        if(e !== null && e.geoJSON !== undefined ){
                            
                            (e.name === "Bogotá" || e.name === "Medellín") ? zoom = 11
                            :
                            (e.name === "Colombia") ? zoom = 6
                            :
                            zoom = 8;

                            props.mapHook.AddZoneGeoJSON(e.geoJSON,props.mapHook.map,e.lat as number,e.lng as number,zoom,e.name);
                        } 
                        
                       
                    }}
                
                />
            </div>   
           
            <div className="tourism-points-filter">

                <Select
                    placeholder="Puntos Turisticos"
                    id="points-tourism-filters"
                    instanceId={"tourism-filters"}
                    menuShouldScrollIntoView={false}//this property is for fix scroll all page and allow to scroll only select
                    menuPosition="fixed" //this property is for fix scroll all page and allow to scroll only select
                    options={props.filtersTourismPoint}
                    formatOptionLabel={(e)=>(
                        <div style={{display:'flex',alignItems:'center'}}>
                            <img loading="lazy" style={{width:"30px", marginRight:'10px',marginLeft:'5px'}} src={theme.data_domain+e.img}/> {e.name}
                        </div>
                    )}
                    styles={customStylesTourismFilters}
                    onChange={(e)=>{


                    


                        let subcategory:number;
                        e?.value === "Montañas" ? subcategory = 31
                        : e?.value === "Lugares turisticos" ? subcategory = 8
                        : subcategory = 8;
                    
                        GetData(
                            [`https://cms.aipus.co/api/subcategories/${subcategory}?populate[0]=points.media`],
                            theme.token_cms as string
                        
                        ).then(res =>{
                            
                        
                            
                            Hideclusters();
                            
                            setMontañas(res[0].data.attributes.points);
                            res[0].data.attributes.points.data.map((point:any,index:number)=>{

                                let position:{lat:number, lng:number} ={
                                    lat:point.attributes.location.latitud,
                                    lng:point.attributes.location.longitud
                                }
                                
                                //let img = theme.data_domain+point.attributes.media.data[0].attributes.url
                                let img = theme.data_domain+point.attributes.location.icon
                                
                                props.mapHook.AddMarker(props.mapHook.map,position,point.attributes.name,img,point.attributes,"point",index);
                                
                            });

                            props.mapHook.map.setZoom(6);


                            setTimeout(() => { 
                                console.log(props.mapHook.cluster,'puntos turisticos');
                                if(props.mapHook.cluster !== null){

                                    Hideclusters();
                                    props.mapHook.cluster.clearMarkers();
                                    props.mapHook.markers.map((marker:any,index:number)=>{
                                        marker.setMap(null)    
                                    });
                                    props.mapHook.cluster.addMarkers(props.mapHook.markers);
                                    props.mapHook.cluster.render();
                                }else{
                                        
                                    props.mapHook.ClusterMarker(props.mapHook.markers,props.mapHook.map);
                                }
                                
                               
                            },1000);
                        })
                        .catch(err => console.log(err))
                    

                    }}
                
                />
            </div>

            <div className="tourism-points-filter">

                <Select
                    placeholder="Trasportes"
                    id="trasportes-filters"
                    instanceId={"tourism-filters"}
                    menuShouldScrollIntoView={false}//this property is for fix scroll all page and allow to scroll only select
                    menuPosition="fixed" //this property is for fix scroll all page and allow to scroll only select
                    options={props.filtersTrasportes}
                    formatOptionLabel={(e)=>(
                        <div style={{display:'flex',alignItems:'center'}}>
                            <img loading="lazy" style={{width:"30px", marginRight:'10px',marginLeft:'5px'}} src={theme.data_domain+e.img}/> {e.name}
                        </div>
                    )}
                    styles={customStylesTourismFilters}
                    onChange={(e)=>{

                       
                        if(e !== null && e.value === "Aeropuertos"){

                            fetch(theme.develop_domain+"/api/airports")
                            .then((res)=>res.json())
                            .then((res)=>{
                                Hideclusters();
                                
                                setAirports(res.data.rows);
                                res.data.rows.map((e:any,index:number)=>{
                                    props.mapHook.AddMarker(props.mapHook.map,{lat:parseFloat(e.latitude_deg),lng:parseFloat(e.longitude_deg)},e.name,theme.data_domain+"/uploads/aeropuertos_2118088c1f.png",e,"airport",index)
                                });

                                props.mapHook.map.setZoom(6);
                                setTimeout(() => {
                                    
                                     console.log(props.mapHook.cluster,'transporte');
                                    if(props.mapHook.cluster !== null){

                                        Hideclusters();
                                        props.mapHook.cluster.clearMarkers();
                                        props.mapHook.markers.map((marker:any,index:number)=>{
                                            marker.setMap(null)    
                                        });
                                        props.mapHook.cluster.addMarkers(props.mapHook.markers) 
                                        props.mapHook.cluster.render();
                                    }else{

                                        props.mapHook.ClusterMarker(props.mapHook.markers,props.mapHook.map);
                                    }
                               
                                },1000);
                                
                              
                            })
                            .catch((err)=>{console.log(err)})
    
                        }else{
                            Hideclusters();
                        }
                    }}

                
                />
            </div> 

            <div className="tourism-points-filter">

                <Select
                    placeholder="Alojamientos"
                    id="alojamientos-filters"
                    instanceId={"tourism-filters-1"}
                    menuShouldScrollIntoView={false}//this property is for fix scroll all page and allow to scroll only select
                    menuPosition="fixed" //this property is for fix scroll all page and allow to scroll only select
                    options={props.filtersAlojamientos}
                    formatOptionLabel={(e)=>(
                        <div style={{display:'flex',alignItems:'center'}}>
                            <img loading="lazy" style={{width:"30px", marginRight:'10px',marginLeft:'5px'}} src={theme.data_domain+e.img}/> {e.name}
                        </div>
                    )}
                    styles={customStylesTourismFilters}
                
                />
            </div>
            <div className="tourism-points-filter">

                <Select
                    placeholder="Restaurantes"
                    id="restaurantes-filters-2"
                    instanceId={"tourism-filters"}
                    menuShouldScrollIntoView={false}//this property is for fix scroll all page and allow to scroll only select
                    menuPosition="fixed" //this property is for fix scroll all page and allow to scroll only select
                    options={props.filtersRestaurantes}
                    formatOptionLabel={(e)=>(
                        <div style={{display:'flex',alignItems:'center'}}>
                            <img loading="lazy" style={{width:"30px", marginRight:'10px',marginLeft:'5px'}} src={theme.data_domain+e.img}/> {e.name}
                        </div>
                    )}
                    styles={customStylesTourismFilters}
                
                />
            </div>
            <div className="tourism-points-filter">

                <Select
                    placeholder="Compras"
                    id="tourism-filters-3"
                    instanceId={"tourism-filters"}
                    menuShouldScrollIntoView={false}//this property is for fix scroll all page and allow to scroll only select
                    menuPosition="fixed" //this property is for fix scroll all page and allow to scroll only select
                    options={props.filtersCompras}
                    formatOptionLabel={(e)=>(
                        <div style={{display:'flex',alignItems:'center'}}>
                            <img loading="lazy" style={{width:"30px", marginRight:'10px',marginLeft:'5px'}} src={theme.data_domain+e.img}/> {e.name}
                        </div>
                    )}
                    styles={customStylesTourismFilters}
                
                />
            </div>
            <div className="tourism-points-filter">

                <Select
                    placeholder="Cultura" 
                    id="tourism-filters-6"
                    instanceId={"tourism-filters"}
                    menuShouldScrollIntoView={false}//this property is for fix scroll all page and allow to scroll only select
                    menuPosition="fixed" //this property is for fix scroll all page and allow to scroll only select
                    options={props.filtersZones}
                    formatOptionLabel={(e)=>(
                        <div style={{display:'flex',alignItems:'center'}}>
                            <img loading="lazy" style={{width:"30px", marginRight:'10px',marginLeft:'5px'}} src={theme.data_domain+e.img}/> {e.name}
                        </div>
                    )}
                    styles={customStylesTourismFilters}
                
                />
            </div>

        </div>

    </StyleFilters>
}
