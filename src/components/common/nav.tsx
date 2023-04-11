import Link from "next/link";
import { NextRouter, useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { theme } from "../../../config";
import Image from "next/image";

export interface PropsNavStyle{
    area:string
}
const NavStyle =  styled.nav<PropsNavStyle>`

    width:100%;
    height:95px;
    grid-area:${(props)=>props.area};
    z-index:9999;
    position:fixed;


    & > .nav__container1{

        width:100%;
        height:44px;

       

    }

     & > .nav__container2{

        width:100%;
        height:51px;
        box-shadow:0px 2px 2px rgba(0,0,0,0.2);

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

    /* */

    & > .nav__container1 > .desktop{

        display:none;
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

                        color:white;
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
            }
        }

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


export interface TypeIconsNav{
    bars:JSX.Element,
    cart:JSX.Element,
    dollar:JSX.Element,
    language:JSX.Element,
    location:JSX.Element,
    pay:JSX.Element,
    store:JSX.Element,
    tracker:JSX.Element,
    truck:JSX.Element,
    user:JSX.Element,
    world:JSX.Element,
    colombia:JSX.Element,
    rocket:JSX.Element
}
export  type PropsNav ={

    logo:string,
    pages:string[],
    icons:TypeIconsNav,
    search:JSX.Element,
    name:string,
    area:string

}

export default function Nav(props:PropsNav):JSX.Element{

    const router:NextRouter = useRouter();
    const [toggle, setToggle] = useState<string>('block');

    useEffect(()=>{
        
       
        let maxScroll:number = 0;

        window.addEventListener('scroll',()=>{
            let currentScroll:number = document.documentElement.scrollTop;
           
            if(maxScroll < currentScroll){

                setToggle('none');
                maxScroll = currentScroll;
                
            }else{
                setToggle('block');
                maxScroll = currentScroll;
                
            }
            
            console.log(maxScroll,currentScroll);
        });

    },[]);


    const iconLinks = [
        props.icons.colombia,
        props.icons.world,
        props.icons.store,
        props.icons.tracker,
        props.icons.rocket
    ]

    return<NavStyle area={props.area}>

    <div style={{display:toggle}} className="nav__container1">
        <div className="mobile">
            <div className="mobile__location">

                <p>{props.icons.location } Ubicación</p>
                <div className="mobile__enviar">
                    Enviar a
                </div>

            </div>
            <div className="mobile__options">
                   <p>{props.icons.language}  ES</p>
                   <p>{props.icons.dollar} COP</p>   
            </div>
            <div className="mobile__buttons">
               <div className="carrito">
                    {props.icons.cart}
                    <div className="number">+9</div>

               </div>
               <div className="bars">
                    {props.icons.bars}
               </div>
            </div>

        </div>

        <div className="desktop">
            <div className="container-links">
                {
                    props.pages.map((element:string,index:number)=>{

                        return<div className="link" key={index}>
                            <Link href={ element === 'Inicio' ? '/' : '/'+element.toLocaleLowerCase()}>
                                <p>  {element} {iconLinks[index]}</p>
                            </Link>

                            
                        </div>
                    })
                }
            </div>
        </div>
    </div>

    <div className="nav__container2">

        <div className="logo">
            <Image width={56} height={60} alt="Logo runalotus" onClick={()=>router.push('/')} src={props.logo}/>
            <p onClick={()=>router.push('/')}>{props.name}</p>
            
            <div className="options-desktop">
                <div className="desktop__location">

                    <p>{props.icons.location } Ubicación</p>
                    <div className="desktop__enviar">
                        Enviar a
                    </div>

                </div>
                <div className="desktop__options">
                    <p>{props.icons.language}  ES</p>
                    <p>{props.icons.dollar} COP</p>   
                </div>
            </div>
        
        </div>


        <div className="search">
            {props.search}

        </div>
        <div className="carrito">
                    {props.icons.cart}
                    <div className="number">+9</div>

        </div>

    </div>        
       
    </NavStyle>
}