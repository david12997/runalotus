import React from "react";
import styled from "styled-components";

import { theme } from "../../../../config";
import Link from "next/link";

const StyleNavbarTop = styled.div`

    & > .nav__container1{

        width:100%;
        height:44px;

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
        font-size:14px;
        font-weight:700;
        color:${theme.colors.white};
        position:relative;

        p{
            display:flex;
            justify-content:center;
            align-items:center;
            top:22px;
            position:relative;
            margin:0px;
            padding:0px;

        }

        .mobile__enviar{

            background:${theme.colors.secondaryA};
            position:absolute;
            top:0%;
            left:43%;
            font-size:12px;
            font-weight:600;
            padding:3px;
            height:15px;
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
        display:flex;
        justify-content:space-around;
        align-items:center;

        .carrito{

            position:relative;

            .number{
                position:absolute;
                top: -16%;
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
    icons:{
        location:JSX.Element,
        language:JSX.Element,
        dollar:JSX.Element,
        cart:JSX.Element,
        bars:JSX.Element
    },
    iconLinks:JSX.Element[],
    linkRefDesktop:React.MutableRefObject<(HTMLDivElement | null)[]>,
    cartToggle:(reference:React.RefObject<HTMLDivElement>,displayShow:string)=>void,
    menuToggle:(reference:React.RefObject<HTMLDivElement>,displayShow:string)=>void,
    FocusLinkDesktop:(element:HTMLDivElement)=>void,
    referenceCart:React.RefObject<HTMLDivElement>
    referenceMenu:React.RefObject<HTMLDivElement>
    referenceLanguage:React.RefObject<HTMLDivElement>
    languageToggle:(reference:React.RefObject<HTMLDivElement>,displayShow:string)=>void

}

export default function NavbarTop(props:PropsNavbarTop):JSX.Element{

    return<StyleNavbarTop>
        <div style={{display:props.toggleNav}} className="nav__container1">

            <div className="mobile">
                <div className="mobile__location">

                    <p>{props.icons.location } Ubicación</p>
                    <div className="mobile__enviar">
                        Enviar a
                    </div>

                </div>
                <div className="mobile__options" onClick={()=>props.languageToggle(props.referenceLanguage,'flex')}>
                    <p>{props.icons.language}  ES</p>
                    <p>{props.icons.dollar} COP</p>   
                </div>
                <div className="mobile__buttons">
                <div onClick={()=>props.cartToggle(props.referenceCart,'block')} className="carrito">
                        {props.icons.cart}
                        <div className="number">+9</div>

                </div>
                <div className="bars" onClick={()=>props.menuToggle(props.referenceMenu,'block')}>
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
                                
                                <Link href={ element === 'Inicio' ? '/' : '/'+element.toLocaleLowerCase()}>
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