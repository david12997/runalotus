import React from 'react';
import styled from 'styled-components';

import { theme } from '../../../../config';
import { IconAngleNext } from '../../../icons/icons';
import Button1 from '../button-1';
import { useRouter } from 'next/router';

const StyleNavigationMobile = styled.div`

    & > .navigationMobile{
        position: absolute;
        z-index:99999;
        display: none;
        width: 90vw;
        margin-left: 12vw;
        height: 102vh;
        box-shadow: 0px 0px 20px rgba(0,0,0,0.4);
        background: ${theme.colors.warningB};
        overflow-x: hidden;
        overflow-y: scroll;

        @media(min-width:800px){
            display: none;
        }

        & > .navigationMobile__openClose{
            width: 98%;
            height: 50px;
            display: flex;
            justify-content: flex-end;
            align-items: center;
        }

        & > .navigationMobile__container{
            margin-top: 20px;
            width: 90%;
            margin-left: 5%;

        }
    }
`;

type PropsNavigationMobile = {

    reference:React.RefObject<HTMLDivElement>,
    pages:string[],
    links:string[],
    icons:JSX.Element[],
    linkRefMobile: React.MutableRefObject<(HTMLDivElement | null)[]>,
    menuToggle:(reference:React.RefObject<HTMLDivElement>,displayShow:string)=>void
}

export default function NavigationMobile(props:PropsNavigationMobile):JSX.Element{

    const router = useRouter();

    return<StyleNavigationMobile data-testid="navigation-mobile-component-test">

        <div ref={props.reference} className="navigationMobile">

            <div className="navigationMobile__openClose" onClick={()=>props.menuToggle(props.reference,'block')}>
                <IconAngleNext width="24" height="24" fill={theme.colors.primaryA}/>
            </div>

            <div className="navigationMobile__container">
                {
                    props.pages.map((page:string,index:number)=>{

                        return<div ref={elem => props.linkRefMobile.current[index] = elem} style={{marginBottom:'36px'}} key={index}>
                            <Button1 
                                text={page} 
                                minWidth="100%" 
                                minHeight="60px" 
                                icon={<span style={{marginLeft:'5px',display:'flex',justifyContent:'center'}}>{props.icons[index]}</span>}
                                click={()=>{
                                    router.push(props.links[index]);
                                    props.menuToggle(props.reference,'block');
                                }}
                            />
                        </div>
                    })  
                }
            

            </div>

        </div>

    </StyleNavigationMobile>
}