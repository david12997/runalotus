import React from "react";
import styled from "styled-components";

import { theme } from "../../../../config";
import Image from "next/image";
import { useRouter } from "next/router";

const StyleNavbarBottom = styled.div`

     & > .nav__container2{

        width:100%;
        height:51px;
        box-shadow:0px 2px 2px rgba(0,0,0,0.2);

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

                height:90%;
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
            height:25px;
            margin-top:10px;
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
                    left:46%;
                    color:${theme.colors.secondaryA};

                }
                
                p{

                    font-size:16px;
                    font-weight:900;
                    color:${theme.colors.grayB};

                   


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

            margin-top:3px;
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
    referenceLocation:React.RefObject<HTMLDivElement>
}

export default function NavbarBottom(props:PropsNavbarBottom):JSX.Element{

    const router = useRouter();

    return<StyleNavbarBottom>
        <div className="nav__container2">

            <div className="logo">
                <Image width={56} height={60} alt="Logo runalotus" onClick={()=>router.push('/')} src={props.logo}/>
                <p onClick={()=>router.push('/')}>{props.name}</p>
                
                <div className="options-desktop">
                    <div className="desktop__location" onClick={()=>props.elementToggle(props.referenceLocation,'flex')}>

                        <p>{props.icons.location } Ubicación</p>
                        <div className="desktop__enviar">
                            Enviar a
                        </div>

                    </div>
                    <div className="desktop__options" onClick={()=>props.elementToggle(props.referenceLanguage,'flex')}>
                        <p>{props.icons.language}  ES</p>
                        <p>{props.icons.dollar} COP</p>   
                    </div>
                </div>
            
            </div>

            <div className="search">
                {props.search}

            </div>

            <div onClick={()=>props.elementToggle(props.referenceCart,'block')} className="carrito">
                {props.icons.cart}
                <div className="number">+9</div>

            </div>

        </div>        
    </StyleNavbarBottom>
}