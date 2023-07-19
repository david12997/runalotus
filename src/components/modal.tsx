import React from "react";
import styled, { StyledComponent } from "styled-components";
import { theme } from "../../config";

const StyleModal = styled.div`

    position:fixed;
    z-index: 9999999;
    width:100vw;
    height:100vh;
    background-color:rgba(0,0,0,0.5);
    display: flex;
    justify-content: center;
    align-items: center;

    & > .modal{
        width:90%;
        height:90%;
        border-radius: 6px;
        background-color:${theme.colors.white};
        display:grid;
        grid-gap: 5px;
        padding: 5px;
        grid-template-areas: "info info"
                            "media media"
                            "button button";
        grid-template-columns: 1fr 1fr;
        grid-template-rows: 1fr 1fr 0.5fr;
        @media(min-width:800px){
            grid-template-areas: "media info"
                                "media info"
                                "button button";
            grid-template-columns: 1fr 1fr;
            grid-template-rows: 1fr 1fr 0.6fr;

            width:70%;
            height:80%;
            border-radius: 10px;
        }

        & > .info{
            grid-area: info;
           
        }
        & > .button{
            grid-area: button;
          
        }
        & > .media{
            grid-area: media;
            
        }
    }

`;

type PropsModal = {
   
    infoElement:JSX.Element,
    mediaElement:JSX.Element,
    buttonElement:JSX.Element,
    styleInfoElement:StyledComponent<"div", any, {}, never>,
    styleMediaElement:StyledComponent<"div", any, {}, never>,
    styleButtonElement:StyledComponent<"div", any, {}, never>,
};

export default function Modal(props: PropsModal): JSX.Element {


    return <StyleModal>
            <div className="modal">
                <div className="info">
                    {
                        <props.styleInfoElement>
                            {props.infoElement}
                        </props.styleInfoElement>
                    }
                </div>

                <div className="button">
                    {
                        <props.styleButtonElement>
                            {props.buttonElement}
                        </props.styleButtonElement>
                    }
                </div>

                <div className="media">
                    {
                        <props.styleMediaElement>
                            {props.mediaElement}
                        </props.styleMediaElement>
                    }
                </div>
            </div>
    </StyleModal>
}