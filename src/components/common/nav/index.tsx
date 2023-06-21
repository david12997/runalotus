import { NextRouter, useRouter } from "next/router";
import React, { useEffect, useState, useRef } from "react";
import styled from "styled-components";
import { theme } from "../../../../config";

import Cart from "./cart";
import NavigationMobile from "./navigation-mobile";
import NavbarTop from "./navbar-top";
import NavbarBottom from "./navbar.bottom";
import LanguageCurrency from "./lang-currency";
import LocationNav from "./location";


export interface PropsNavStyle{
    area:string,
    context?:any
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
    links:string[],
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
    area:string,
    locale:string,
    location:{
        label:string,
        address:string,
    },
    locationMap:{
        title:string,
        placeholder:string,
        textButton:string
    },
    cart:{
        title:string,
        empty:{
            message:string,
            btn_text:string
        }
    },
    lang_currency:{
        label_lang:string,
        label_currency:string,
        btn_save:string,
    }
    

}

export default function Nav(props:PropsNav):JSX.Element{

    const router:NextRouter = useRouter();
    const [toggleNav, setToggleNav] = useState<string>('block');

    const menuRef = useRef<HTMLDivElement>(null);
    const cartRef = useRef<HTMLDivElement>(null);
    const languageRef = useRef<HTMLDivElement>(null);
    const locationRef = useRef<HTMLDivElement>(null);
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

        // set screens  hidden
        menuRef.current?.style.setProperty('display','none');
        cartRef.current?.style.setProperty('display','none');
        languageRef.current?.style.setProperty('display','none');
        locationRef.current?.style.setProperty('display','none');
       
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
              
            if(router.asPath === props.links[index]){
            
                FocusLinkDesktop(linkRefDesktop.current[index] as HTMLDivElement);
                FocusLinkMobile(linkRefMobile.current[index] as HTMLDivElement, index);
                break;
            
            }else if(router.asPath.includes('/tienda/productos')){

                FocusLinkDesktop(linkRefDesktop.current[2] as HTMLDivElement);
                FocusLinkMobile(linkRefMobile.current[2] as HTMLDivElement, index);
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
            cart_empty={props.cart.empty}
            title={props.cart.title}
        />

        <LanguageCurrency
            reference={languageRef}
            langToggle={ElementToggle}
            locale={props.locale}
            label_lang={props.lang_currency.label_lang}
            label_currency={props.lang_currency.label_currency}
            btn_save={props.lang_currency.btn_save}

        />

        <NavigationMobile 
            reference={menuRef} 
            pages={props.pages}
            links={props.links}
            icons={iconLinks} 
            linkRefMobile={linkRefMobile} 
            menuToggle={ElementToggle}
        />
        
        <LocationNav
            reference={locationRef}
            locationToggle={ElementToggle}
            title={props.locationMap.title}
            placeholder={props.locationMap.placeholder}
            textButton={props.locationMap.textButton}
        />

       {/* those components below are tow bars that create Nav component */}
        <NavbarTop
            toggleNav={toggleNav}
            pages={props.pages}
            links={props.links}
            icons={{
                location:props.icons.location, 
                language:props.icons.language, 
                dollar:props.icons.dollar, 
                cart:props.icons.cart, 
                bars:props.icons.bars
            }}
            iconLinks={iconLinks}
            linkRefDesktop={linkRefDesktop}
            elementToggle={ElementToggle}
            FocusLinkDesktop={FocusLinkDesktop}
            referenceCart={cartRef}
            referenceMenu={menuRef}
            referenceLanguage={languageRef}
            referenceLocation={locationRef}
            locale={props.locale}
            location={props.location}
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
            referenceCart={cartRef}
            referenceLanguage={languageRef}
            referenceLocation={locationRef}
            elementToggle={ElementToggle}
            locale={props.locale}
            location={props.location}
        />
      
       
    </NavStyle>
}