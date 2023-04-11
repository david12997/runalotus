
import React from "react";
import styled from "styled-components";
import { theme } from "../../../config";

export interface PropsStyleFooter{
    area:string
}

const StyleFooter = styled.footer<PropsStyleFooter>`

    grid-area:${(props)=>props.area};
    height:100%;
    background:${theme.colors.white};
    box-shadow:0px -2px 2px rgba(0,0,0,0.2);
    display:flex;
    justify-content:space-around;
    flex-wrap:wrap;

    & > .container-categories, .container-runalotus, .container-cliente{

        width:100%;
        border-bottom:1px solid ${theme.colors.grayD};
        padding:15px;
        margin-top:20px;
        text-align:center;
        @media(min-width:800px){

            width:25%;
            padding:30px;
            
        }

        & > .title-footer{
            font-size:17px;
            font-weight:800;
            color:${theme.colors.balck};
            @media(min-width:800px){
                font-size:18px;
            }
        }
    }

    & > .container-cliente > .container-img{

        width:100%;
        display:flex;
        justify-content:center;
        margin-top:15px;
        @media(min-width:800px){
            margin-top:30px;
        }

        & > img{
            width:200px;

        }
    }

    & > .container-categories > .options-categories, .options-runalotus, .options-cliente{

        margin-top:25px;
        cursor:pointer;



        & > .option-category, .option-runalotus, .option-cliente{
            
            color:${theme.colors.grayA};
            font-size:14px;
            font-weight:700;
            margin-bottom:7px;
            @media(min-width:800px){
                margin-bottom:13px;
                font-size:16px;
            }

        }

        & > .option-view-more{
            font-size:14px;
            font-weight:700;
            color:${theme.colors.primaryA};
            @media(min-width:800px){
                font-size:16px;
            }
        }
    }

`;


export type PropsFooter={

    title1:string,
    optionsTitle1:string[],
    title2:string,
    optionsTitle2:string[],
    title3:string,
    optionsTitle3:string[],
    img:string,
    altImg:string,
    area:string

}

export default function Footer(props:PropsFooter):JSX.Element{

    return<StyleFooter area={props.area}>
        
        <div className="container-categories">
            <div className="title-footer">
                {props.title1}
            </div>

            <div className="options-categories">
                {
                    props.optionsTitle1.map((element:string,index:number)=><div className="option-category" key={index}> {element}</div>)
                }
                <div className="option-view-more">Ver más</div>
            </div>
        </div>

        <div className="container-runalotus">
            <div className="title-footer" >
               {props.title2}
            </div>

            <div className="options-runalotus">
                {
                    props.optionsTitle2.map((element:string,index:number)=><div className="option-runalotus" key={index}> {element}</div>)
                }
            </div>
        </div>

        <div className="container-cliente">
            <div className="title-footer">
                {props.title3}
            </div>

            <div className="options-cliente">
                {
                    props.optionsTitle3.map((element:string,index:number)=><div className="option-cliente" key={index}> {element}</div>)
                }
                
            </div>

            <div className="container-img">
                <img  src={props.img} alt={props.altImg} />

            </div>
           
        </div>
    
    </StyleFooter>
}