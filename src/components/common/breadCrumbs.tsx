import React, {useEffect} from "react";
import styled from "styled-components";
import { theme } from "../../../config";
import { useRouter } from "next/router";


interface PropsBreadCrumbs{

    
}

const StyleBreadCrumbs = styled.div<PropsBreadCrumbs>`


    width:100%;
    height: 25px;
    margin-top:60px;
    z-index: 999;
    grid-area: navigation;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    position: fixed;
    background: ${theme.colors.white};
    border-bottom: 1px solid ${theme.colors.grayD};
    color: ${theme.colors.secondaryA};
    

    & > div{
        font-weight: 500;
        font-size: 15px;
        max-width: 90px;
        min-width: 30px;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        margin-left: 10px;
        cursor: pointer;
       
       
    }

   



`;

export default function BreadCrumbs():JSX.Element{

    
    const elementRef = React.useRef<HTMLDivElement>(null);
    const router = useRouter();
    
    const setPositionBreadcrumb = (breadcrumb:HTMLElement):void =>{
        
    }

    useEffect(()=>{
        let maxScroll:number = 0;

        if(router.asPath.includes('turismo/mapa')) elementRef.current?.style.setProperty('margin-top','0px');
        else{
            
            window.addEventListener('scroll',()=>{


                let currentScroll:number = document.documentElement.scrollTop;
                if(maxScroll < currentScroll){
    
                    elementRef.current?.style.setProperty('margin-top',`34px`);
                    maxScroll = currentScroll;
                    
                }else{
                    
                    elementRef.current?.style.setProperty('margin-top',`60px`);
                    maxScroll = currentScroll;
                    
                }
                
            });
        }



  
       console.log(router.asPath.split('/'));

    },[]);

    return<StyleBreadCrumbs ref={elementRef} data-testid="breadcrumb-component-test ">
        <div onClick={()=>router.push("/")} >{`Inicio > `}</div>
        {
            router.asPath.split('/').filter((item:string)=>item !== '' && item).map((item:string,index:number)=>{
                
                return <div key={index} onClick={()=>{
                    const arrayPath = router.asPath.split('/').filter((item:string)=>item !== '' && item);
                    console.log(arrayPath, index); 
                    router.push(`/${arrayPath.slice(0,index+1).join('/')}`);
                
                }}> 

                    {item+' >'}
                    
                
                </div>
            })
        }

    </StyleBreadCrumbs>

}