import React from "react";
import styled from "styled-components";

import { theme } from "../../../../config";
import Link from "next/link";

import { useSelector } from "react-redux";
import { RootState } from "../../../store";

const StyleNavbarTop = styled.div`

    & > .nav__container1{

        width:100%;
        height:34px;

    }

    & > .nav__container1{

        background:${theme.colors.primaryA};

        .mobile{

            display:flex;
            width:100%;
            height:100%;
        }

    }


    & > .nav__container1 > .mobile > .mobile__location{

        width:35%;
        height:100%;
        margin:0px;
        padding:0px;
        border-right:1px solid white;
        font-size:13px;
        font-weight:700;
        color:${theme.colors.white};
        position:relative;
        cursor:pointer;

        p{
            display:flex;
            justify-content:center;
            align-items:center;
            top:15px;
            position:relative;
            margin:0px;
            padding:0px;
            & > span{
                max-width: 69px;
                white-space: nowrap;
                overflow: hidden;
                text-overflow: ellipsis;
            }

        }

        .mobile__enviar{

            background:${theme.colors.secondaryA};
            position:absolute;
            top:0%;
            left:28%;
            font-size:12px;
            font-weight:600;
            padding:3px;
            height:10px;
            display: flex;
            justify-content: center;
            align-items: center;
        }
    }

    & > .nav__container1 > .mobile > .mobile__options, .mobile__buttons{

        height:100%;
        position:relative;
        margin:0px;
        padding:0px;
    }

    & > .nav__container1 > .mobile > .mobile__options{

        display:flex;
        justify-content:center;
        align-items:center;
        width:42%;
        border-right:1px solid white;
        
        p{
            width:48%;
            height:100%;
            display:flex;
            justify-content:center;
            align-items:center;
            margin:0px;
            padding:0px;
            color:${theme.colors.white};
            font-weight:600;
        }
    }



    & > .nav__container1 > .mobile > .mobile__buttons{
        width:29%;
        height: 90%;
        margin-top: 1.5%;
        display:flex;
        justify-content:space-around;
        align-items:center;

        .carrito{

            position:relative;

            .number{
                position:absolute;
                top: -6%;
                left: 66%;
                background:${theme.colors.secondaryA};
                font-size:13px;
                font-weight:700;
                color:${theme.colors.white};
                padding-left:2px;
                padding-right:3px;
                border-radius:2px;
            }
        }
    }

    & > .nav__container1 > .desktop{

        display:none;
    }

    @media(min-width:800px){

        & > .nav__container1 > .mobile{

            display:none;
        }

        & > .nav__container1 > .desktop{

            display:flex;
            justify-content:end;
            width:90%;
            margin-left:10%;
            height:100%;

            .container-links{

                width:75%;
                height:100%;
                color:white;
                display:flex;
                justify-content:space-around;
                align-items:center;

                @media(min-width:1200px){

                    width:65%;
                }


                .link{

                    width:160px;
                    display:flex;
                    justify-content:center;
                    align-items:center;
                    
                    :hover{
                        background:${theme.colors.white};

                        a{
                          color:${theme.colors.primaryA};

                          p > svg > path{

                            fill:${theme.colors.primaryA};
                          }
                        }
                    }

                    a{

                        color:${theme.colors.white};
                        text-decoration:none;
                        font-weight:600;
                        font-size:18px;
                        display:flex;
                        justify-content:center;
                        align-items:center;
                    
                        p{
                            display:flex;
                            justify-content:center;
                            align-items:center;

                            svg{
                                margin-left:5px;
                            }
                    
                        }
                    }
                }

                .link_selected{

                    width:160px;
                    display:flex;
                    justify-content:center;
                    align-items:center;
                    background:${theme.colors.white};



                    a{

                        color:${theme.colors.primaryA};
                        text-decoration:none;
                        font-weight:600;
                        font-size:18px;
                        display:flex;
                        justify-content:center;
                        align-items:center;

                        p > svg > path{
                          fill:${theme.colors.primaryA}; 
                        }

                        p{
                            display:flex;
                            justify-content:center;
                            align-items:center;

                            svg{
                                margin-left:5px;
                                
                            }
                    
                        }
                    }
                }
            }
        }
    }

`;

type PropsNavbarTop = {

    toggleNav:string,
    pages:string[],
    links:string[],
    icons:{
        location:JSX.Element,
        language:JSX.Element,
        dollar:JSX.Element,
        cart:JSX.Element,
        bars:JSX.Element
    },
    iconLinks:JSX.Element[],
    linkRefDesktop:React.MutableRefObject<(HTMLDivElement | null)[]>,
    FocusLinkDesktop:(element:HTMLDivElement)=>void,
    referenceCart:React.RefObject<HTMLDivElement>
    referenceMenu:React.RefObject<HTMLDivElement>
    referenceLanguage:React.RefObject<HTMLDivElement>
    referenceLocation:React.RefObject<HTMLDivElement>
    elementToggle:(reference:React.RefObject<HTMLDivElement>,displayShow:string)=>void,
    locale:string,
    location:{
        label:string,
        address:string,
    }

}

export default function NavbarTop(props:PropsNavbarTop):JSX.Element{

    const locationUser = useSelector((state:RootState)=>state.location);
    const currencyUser = useSelector((state:RootState)=>state.lang_currency.currency);
    const stateCart = useSelector((state:RootState)=>state.cart);


    return<StyleNavbarTop data-testid="navbar-top-component-test">
        <div style={{display:props.toggleNav}} className="nav__container1">

            <div className="mobile">
                <div className="mobile__location" onClick={()=>props.elementToggle(props.referenceLocation,'flex')}>

                    <p>{props.icons.location } 
                        <span>
                            {(locationUser.location.value === "") ? props.location.label :locationUser.location.value }
                        </span>
                    </p>
                    <div className="mobile__enviar">
                        {props.location.address}
                    </div>

                </div>
                <div className="mobile__options" onClick={()=>props.elementToggle(props.referenceLanguage,'flex')}>
                    <p>{props.icons.language}  { props.locale === 'en' ? 'EN' :'ES' }</p>
                    <p>{props.icons.dollar} {currencyUser}</p>   
                </div>
                <div className="mobile__buttons">
                <div onClick={()=>props.elementToggle(props.referenceCart,'block')} className="carrito">
                        {props.icons.cart}
                        <div className="number">({stateCart.quantity})</div>

                </div>
                <div className="bars" onClick={()=>props.elementToggle(props.referenceMenu,'block')}>
                        {props.icons.bars}
                </div>
                </div>

            </div>

            <div className="desktop">
                <div className="container-links">
                    {
                        props.pages.map((element:string,index:number)=>{

                            return<div ref={elem => props.linkRefDesktop.current[index] = elem} 
                                    className="link" key={index} 
                                    onClick={()=>{props.FocusLinkDesktop(props.linkRefDesktop.current[index] as HTMLDivElement)}}
                                >
                                
                                <Link href={props.links[index]}>
                                    <p>  {element} {props.iconLinks[index]}</p>
                                </Link>

                                
                            </div>
                        })
                    }
                </div>
            </div>
        </div>
    </StyleNavbarTop>
}