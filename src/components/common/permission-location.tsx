import React from "react";
import styled from "styled-components";
import { theme } from "../../../config";
import Image from "next/image";
import Button1 from "./button-1";

import {  useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../store";
import { setPermissionGmaps } from "../../store/permission-gmaps";

interface propsStylePermissionLocation{
    display:string
}
const StylePermissionLocation = styled.div<propsStylePermissionLocation>`

    position: fixed;
    width:100vw;
    height:100vh;
    background: rgba(0,0,0,.5);
    z-index: 9999999;
    top:0;
    display: ${(props)=>props.display};
    justify-content: center;
    align-items: center;

    & > .container-card{
        width:90%;
        height:80%;
        background: ${theme.colors.white};
        border-radius: 10px;
        @media(min-width:800px){
            width:60%;
            height:70%;
        }

        & > .container-img{
            width:70%;
            height:50%;
            margin-left: 15%;
            display: flex;
            justify-content: center;
            align-items: center;

            @media(min-width:800px){
                width:50%;
                height:56%;
                margin-left: 25%;
            }

            & > .img-permission-location{

                @media(min-width:800px){
                    width:250px;
                    height:250px;
                }
                @media(min-width:1500px){
                    width:300px;
                    height:300px;
                }
            }

        }

        & > .container-parrafo{
            color: ${theme.colors.grayA};
            font-weight: 400;
            font-size: 17px;
            width:90%;
            height:18%;
            margin-left: 5%;

            @media(min-width:310px){
                font-size: 19px;
            }

            @media(min-width:800px){
                font-size: 22px;
                height:15%;
            }
        }

        & > .container-button{
            margin-top:30px;
            width:100%;
            height:15%;
            @media(min-width:800px){
                width:90%;
                margin-left: 5%;
                margin-top: 15px;
            }
        }

    }

`;

type propsPermissionLocation = {
    locale:string
}

export default function PermissionLocation(props:propsPermissionLocation):JSX.Element{

   
    const stateGmaps = useSelector((state:RootState)=>state.permission_gmaps.state);
    const dispatch = useDispatch<AppDispatch>();

    return<StylePermissionLocation display={stateGmaps ? 'none' : 'flex'} id="modal-permission-location">

        <div className="container-card">
            <div className="container-img">
                <Image
                    className="img-permission-location"
                    src={`${ theme.data_domain}/uploads/permission_location_a63fedb30a.webp`}
                    alt="permission location user / permisios ubicacion usuario"
                    width={200}
                    height={200}
                />
            </div>
            <div className="container-parrafo">
                <p>
                    {
                        props.locale === 'es'
                        ?
                        'Para brindarte una mejor experiencia, necesitamos acceder a tu ubicación.' 
                        :
                        'To give you a better experience, we need to access your location.'
                    }
                    
                </p>
            </div>
            <div className="container-button" id="button-modal-permission-location">
                <Button1
                    text={props.locale === 'es' ? 'Cerrar' : 'Close'}
                    minWidth="90%"
                    minHeight="60px"
                    bgColor={theme.colors.successA}
                    click={()=>{
                        dispatch(setPermissionGmaps({state:true}));
                        document.getElementById('modal-permission-location')?.style.setProperty('display','none');
                    }}
                />
            </div>
        </div>

    </StylePermissionLocation>
}