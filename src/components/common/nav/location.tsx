import React, { useEffect, useRef } from "react";  
import styled from "styled-components";
import { useLocation } from "../../../hooks/location";
import { theme } from "../../../../config";
import { IconTimesClose } from "../../../icons/icons";
import Input1 from "../input-1";

const StyleLocationNav = styled.div`
    width: 100%;
    height: 100%;
    background-color:rgba(0,0,0,0.5);
    z-index: 99999;
    position:fixed;
    display:one;
    justify-content: center;
    align-items: center;

    & > .containerMap{

        width: 90%;
        height: 90%;
        background-color: ${theme.colors.white};
        border-radius: 10px;
        display:block;
        position: relative;

        @media(min-width:800px){

            width: 60%;
            height: 450px;
            border-radius: 20px;
        }

    }

    & > .containerMap > .closeContainer{

        width: 95%;
        height: 45px;
        display: flex;
        justify-content: flex-end;
        align-items: center;
        cursor: pointer;
        @media(min-width: 800px){
            width: 98%;
            height: 50px;
        }
    }

    & > .containerMap > #map{

        width: 100%;
        height: calc(100% - 45px);
        border-bottom-left-radius: 10px;
        border-bottom-right-radius: 10px;
        
        @media(min-width: 800px){
            height: calc(100% - 50px);
            border-bottom-left-radius: 20px;
            border-bottom-right-radius: 20px;
        }
    }

     & > .containerMap > .container-input{

            position: absolute;
            z-index: 999999;
        }
`;

type PropsLocationNav = {
    reference:React.RefObject<HTMLDivElement>;
    locationToggle:(reference:React.RefObject<HTMLDivElement>,displayShow:string)=>void;
}

export default function LocationNav(props:PropsLocationNav):JSX.Element{

    const LocationHook = useLocation();

    useEffect(()=>{
      
        LocationHook.useEffectLocation;

    },[]);

    return<StyleLocationNav ref={props.reference}>

        <div className="containerMap">
            <div className="closeContainer" onClick={()=>props.locationToggle(props.reference,'none')}>
                <IconTimesClose width="24" height="24" fill={theme.colors.primaryA} />
            </div>
            <div className="container-input">
                <Input1
                    label="Enviar mis pedidos a"
                    placeholder=" Escribe tu dirección"
                    id="input-autocomplete"
                    reference={LocationHook.inputAutoComplete}
                />
            </div>
            <div ref={LocationHook.mapElem} id="map"></div>
            <div ref={LocationHook.modalUnsupportGeolocation} id="errorMap"></div>

        </div>
        
    </StyleLocationNav> 
}