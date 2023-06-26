import React, { useEffect, useRef } from "react";  
import styled from "styled-components";
import { useLocation } from "../../../hooks/location";
import { theme } from "../../../../config";
import { IconTimesClose } from "../../../icons/icons";
import Input1 from "../input-1";
import Button1 from "../button-1";

import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../../store";


const StyleLocationNav = styled.div`
    width: 100%;
    height: 100%;
    background-color:rgba(0,0,0,0.5);
    z-index: 99999;
    position:fixed;
    display:none;
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
        z-index: 99999;
    }

    & > .containerMap > .btn-select-map{

        position: absolute;
        z-index:99999;
        width:100%;
        display: flex;
        justify-content: center;
        align-items: center;
        margin-top:300px;

    }

`;

type PropsLocationNav = {
    reference:React.RefObject<HTMLDivElement>,
    locationToggle:(reference:React.RefObject<HTMLDivElement>,displayShow:string)=>void,
    title:string,
    placeholder:string,
    textButton:string
}

export default function LocationNav(props:PropsLocationNav):JSX.Element{

    const dispatch:AppDispatch = useDispatch();
    const locationUser = useSelector((state:RootState)=>state.location);

    const LocationHook = useLocation(dispatch, locationUser);

    useEffect(()=>{
      
        LocationHook.useEffectLocation;

    },[]);

    return<StyleLocationNav data-testid="location-component-test" ref={props.reference}>

        <div className="containerMap">
            <div className="closeContainer" onClick={()=>props.locationToggle(props.reference,'none')}>
                <IconTimesClose width="24" height="24" fill={theme.colors.primaryA} />
            </div>
            <div className="container-input">
                <Input1
                    label={props.title}
                    placeholder={props.placeholder}
                    id="input-autocomplete"
                    reference={LocationHook.inputAutoComplete}
                />
            </div>

            <div className="btn-select-map">
                <Button1
                    reference={LocationHook.buttonSaveLocation}
                    text={props.textButton}
                    minHeight="45px"
                    minWidth="200px"
                    bgColor={theme.colors.grayC}
                    textColor={theme.colors.grayA}
                />
            </div>

            <div ref={LocationHook.mapElem} id="map"></div>
            <div ref={LocationHook.modalUnsupportGeolocation} id="errorMap"></div>

        </div>
        
    </StyleLocationNav> 
}