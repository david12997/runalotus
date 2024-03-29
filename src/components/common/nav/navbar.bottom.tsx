import React from "react";
import styled from "styled-components";

import { theme } from "../../../../config";
import Image from "next/image";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import { RootState } from "../../../store";

const StyleNavbarBottom = styled.div`

     & > .nav__container2{

        width:100%;
        height:46px;
        box-shadow:0px 1px 1px rgba(0,0,0,0.2);

    }

    & > .nav__container2{

        width:100%;
        display:flex;
        justify-content:space-between;
        background:${theme.colors.white};
        
        .carrito{
            display:none;
        }

        .logo{

            display:flex;
            justify-content:start;
            align-items:center;
            width:50%;
            height:100%;
            cursor:pointer;

            p{
                display:flex;
                justify-content:center;
                align-items:center;
                color:${theme.colors.primaryA};
                font-weight:800;
                font-size:18px;
            }

            img{

                width:43px;
                height:40px;
                margin-top:1%;
                
            }
        }
        .search{

            width:50%;
            height:100%;
            display:flex;
            justify-content:end;
            align-items:center;
            margin-right:6px;
        }

    }

    & > .nav__container2 > .logo > .options-desktop{

        display:none;        
    }
    

    @media(min-width:800px){



        & > .nav__container2 {
            
            justify-content:flex-start
        }

        & > .nav__container2 > .logo{

            width:590px;
            display:flex;
            position:relative;
            margin-right:5%;

            @media(min-width:1000px){
                margin-right:14%;
            }

            @media(min-width:1300px){
                width:650px;
                margin-right:20%;
            }
            @media(min-width:1500px){
                width:700px;
                margin-right:30%;
            }

            
        }

        & > .nav__container2 > .search{
            
            width:22%;
            margin-left:50px;
            @media(min-width:1300px){
                width:18%;
                margin-left:100px;

            }
            @media(min-width:1500px){
                width:14%;
                margin-left:270px;

            }
            

        }

        & > .nav__container2 > .carrito{
            
            width:5%;
            cursor:pointer;
            height:22px;
            margin-top:8px;
            display:flex;
            justify-content:center;
            padding:5px;
            align-items:center;
            background:${theme.colors.successB};
            border-radius:5px;
            font-weight:bold;
            color:${theme.colors.white};

            svg{
                margin-right:3px;
            }

        }

        & > .nav__container2 > .logo > .options-desktop{

            display:flex;
            justify-content:start;
            margin-left:25px;
            width:70%;
            height:100%;

        
            .desktop__location, .desktop__options{
                border-left:1px solid ${ theme.colors.grayD};
                width: 40%;
                margin-left:3%;
                display: flex;
                align-items:center;

                @media(min-width:1300px){
                    width: 28%;

                }
         
            }

            .desktop__options{
                justify-content:space-around;
                p{
                    font-size:16px;
                    color:${theme.colors.grayB};
                    svg > path{
                        
                        fill:${theme.colors.grayB};
                    }
                }
            }

            .desktop__location{

                position:relative;
                display:flex;
                justify-content:center;
                align-items:center;

                .desktop__enviar{

                    position:absolute;
                    top:1%;
                    font-size:14px;
                    font-weight:800;
                    left:36%;
                    color:${theme.colors.secondaryA};

                }
                
                p{
                   
                    font-size:16px;
                    font-weight:900;
                    color:${theme.colors.grayB};
                    margin-top: 26px;
                    & > span{
                        max-width: 96px;
                        white-space: nowrap;
                        overflow: hidden;
                        text-overflow: ellipsis;
                    }
                   

                   


                }
            }

            .desktop__location > p > svg{

                width:20px;
                height:20px;
            }

            .desktop__location > p > svg > path{
                fill:${theme.colors.grayB};

            }

        }

        & > .nav__container2 > .logo > img{

            margin-top:1px;
        }

        & > .nav__container2 > .logo > p{

            font-size:23px;
        }



    }

`;

type PropsNavbarBottom = {

    logo:string,
    name:string,
    search:JSX.Element,
    icons:{
        location:JSX.Element,
        language:JSX.Element,
        dollar:JSX.Element,
        cart:JSX.Element
    },
    elementToggle:(reference:React.RefObject<HTMLDivElement>,display:string)=>void,
    referenceCart:React.RefObject<HTMLDivElement>
    referenceLanguage:React.RefObject<HTMLDivElement>
    referenceLocation:React.RefObject<HTMLDivElement>,
    locale:string,
    location:{
        label:string,
        address:string,
    }
}

export default function NavbarBottom(props:PropsNavbarBottom):JSX.Element{

    const router = useRouter();
   
    const locationUser = useSelector((state:RootState)=>state.location);
    const currencyUser = useSelector((state:RootState)=>state.lang_currency.currency);
    const stateCart = useSelector((state:RootState)=>state.cart);



    return<StyleNavbarBottom data-testid="navbar-bottom-component-test">
        <div className="nav__container2">

            <div className="logo">
                <Image loading="lazy" width={50} height={60} alt="Logo runalotus" onClick={()=>router.push('/')} src={props.logo}/>
                <p onClick={()=>router.push('/')}>{props.name}</p>
                
                <div className="options-desktop">
                    <div id="location-desktop-map" className="desktop__location" onClick={()=>props.elementToggle(props.referenceLocation,'flex')}>

                        <p>
                            {props.icons.location } 
                            <span>
                                {(locationUser.location.value === "") ? props.location.label :locationUser.location.value }
                            </span>
                        </p>
                        
                        <div className="desktop__enviar" >
                            {props.location.address}
                        </div>

                    </div>
                    <div className="desktop__options" onClick={()=>props.elementToggle(props.referenceLanguage,'flex')}>
                        <p>{props.icons.language}  {props.locale === 'en' ? 'EN' : 'ES'}</p>
                        <p>{props.icons.dollar} {currencyUser}</p>   
                    </div>
                </div>
            
            </div>

            <div className="search">
                {props.search}

            </div>

            <div onClick={()=>props.elementToggle(props.referenceCart,'block')} className="carrito">
                {props.icons.cart}
                <div className="number">({stateCart.quantity})</div>

            </div>

        </div>        
    </StyleNavbarBottom>
}