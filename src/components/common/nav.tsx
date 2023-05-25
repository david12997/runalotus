import { NextRouter, useRouter } from "next/router";
import React, { useEffect, useState, useRef } from "react";
import styled from "styled-components";
import { theme } from "../../../config";

import Cart from "./nav/cart";
import NavigationMobile from "./nav/navigation-mobile";
import NavbarTop from "./nav/navbar-top";
import NavbarBottom from "./nav/navbar.bottom";
import LanguageCurrency from "./nav/lang-currency";


export interface PropsNavStyle{
    area:string
}
const NavStyle =  styled.nav<PropsNavStyle>`

    width:100%;
    height:95px;
    grid-area:${(props)=>props.area};
    z-index:9999;
    position:fixed;



`;


export  type PropsNav ={

    logo:string,
    pages:string[],
    icons:{
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
    },
    search:JSX.Element,
    name:string,
    area:string

}

export default function Nav(props:PropsNav):JSX.Element{

    const router:NextRouter = useRouter();
    const [toggleNav, setToggleNav] = useState<string>('block');
    const menuRef = useRef<HTMLDivElement>(null);
    const cartRef = useRef<HTMLDivElement>(null);
    const languageRef = useRef<HTMLDivElement>(null);

    const linkRefDesktop = useRef<Array<HTMLDivElement | null>>(new Array<HTMLDivElement>(props.pages.length));
    const linkRefMobile = useRef<Array<HTMLDivElement | null>>(new Array<HTMLDivElement>(props.pages.length));

    //this function set focus link desktop
    const FocusLinkDesktop = (element:HTMLDivElement):void =>{

        element.classList.add('link_selected');
        element.classList.remove('link');
    }

    //this function set focus link mobile
    const FocusLinkMobile = (element:HTMLDivElement, index:number):void =>{
        
        const linkMobile = element.childNodes[0].childNodes[0] as HTMLDivElement;
        const iconMobile = linkMobile.children[0].children[0].children[0] as SVGPathElement;  
        
        linkMobile.style.setProperty('background',theme.colors.white);
        linkMobile.style.setProperty('color',theme.colors.primaryA);
      
       index !== 0 && iconMobile.style.setProperty('fill',theme.colors.primaryA);
    }

    useEffect(()=>{
        

        // set menu and cart  hidden
        menuRef.current?.style.setProperty('display','none');
        cartRef.current?.style.setProperty('display','none');
        languageRef.current?.style.setProperty('display','none');
       
        // set toggle navbar when scroll
        let maxScroll:number = 0;
        window.addEventListener('scroll',()=>{

            let currentScroll:number = document.documentElement.scrollTop;

            if(maxScroll < currentScroll){

                setToggleNav('none');
                maxScroll = currentScroll;
                
            }else{
                setToggleNav('block');
                maxScroll = currentScroll;
                
            }
            
        });

        // set focus link when page is load
        for(let index:number = 0; index < linkRefDesktop.current.length; index++){

            if(router.asPath.includes(props.pages[index].toLowerCase())){
                FocusLinkDesktop(linkRefDesktop.current[index] as HTMLDivElement);
                FocusLinkMobile(linkRefMobile.current[index] as HTMLDivElement, index);
                break;
            }else if(router.asPath === '/'){
                FocusLinkDesktop(linkRefDesktop.current[0] as HTMLDivElement);
                FocusLinkMobile(linkRefMobile.current[0] as HTMLDivElement, index);
                break;
            }
        }


    },[]);


    const iconLinks = [
        props.icons.colombia,
        props.icons.world,
        props.icons.store,
        props.icons.tracker,
        props.icons.rocket
    ]

    //this function toggle cart, mobile menu and language-currency menu
    const ElementToggle = (reference:React.RefObject<HTMLDivElement>,displayShow:string):void =>{

        if(reference.current !== null){

            (reference.current.style.display === 'none')
            ?
            reference.current.style.display = displayShow
            :
            reference.current.style.display = 'none';
            
        }
    }


    return<NavStyle area={props.area}>
        
        {/* those components are screen that appear when user makes an action */}
        <Cart 
            reference={cartRef} 
            cartToggle={ElementToggle} 
        />

        <LanguageCurrency
            reference={languageRef}
            langToggle={ElementToggle}

        />

        <NavigationMobile 
            reference={menuRef} 
            pages={props.pages} 
            icons={iconLinks} 
            linkRefMobile={linkRefMobile} 
            menuToggle={ElementToggle}
        />

       {/* those components below are tow bars that create Nav component */}
        <NavbarTop
            toggleNav={toggleNav}
            pages={props.pages}
            icons={{
                location:props.icons.location, 
                language:props.icons.language, 
                dollar:props.icons.dollar, 
                cart:props.icons.cart, 
                bars:props.icons.bars
            }}
            iconLinks={iconLinks}
            linkRefDesktop={linkRefDesktop}
            cartToggle={ElementToggle}
            menuToggle={ElementToggle}
            languageToggle={ElementToggle}
            FocusLinkDesktop={FocusLinkDesktop}
            referenceCart={cartRef}
            referenceMenu={menuRef}
            referenceLanguage={languageRef}
        />

        <NavbarBottom
            icons={{
                location:props.icons.location,
                language:props.icons.language,
                dollar:props.icons.dollar,
                cart:props.icons.cart,
            }}
            logo={props.logo}
            search={props.search}
            name={props.name}
            cartToggle={ElementToggle}
            languageToggle={ElementToggle}
            referenceCart={cartRef}
            referenceLanguage={languageRef}
        />
      
       
    </NavStyle>
}