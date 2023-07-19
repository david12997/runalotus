import { Player } from "@lottiefiles/react-lottie-player";
import { NextPage } from "next";
import SectionAnimationCash from "../../components/tienda/section-animation-cash";
import Button1 from "../../components/common/button-1";
import { theme } from "../../../config";
import { PropsIndexPage } from "../../pages";
import Modal from "../../components/modal";


import styled from "styled-components";
import React from "react";

const styleInfoModal = styled.div`

    border-bottom: 1px solid ${theme.colors.grayE};

    & > .container-modal{
       height:45vh;
       overflow-y: scroll;
       overflow-x: hidden;
       @media(min-width:800px){
            height:60vh;
       }
    }

    & > .container-modal > .title-modal{
        font-size: 18px;
        width: 100%;
        height: 40px;
        display:flex;
        justify-content:center;
        align-items:center;
        border-bottom:1px solid ${theme.colors.grayE};
        font-weight: 700;
        @media(min-width:800px){
            height: 55px;
            font-size: 21px;
        }
    
    }

    & > .container-modal > .content-modal{
        width: 100%;
        & > .item{
            width: 100%;
            font-size: 15px;
            font-weight: 400;
            color: ${theme.colors.grayA};
            padding-top: 5px;
            padding-bottom: 5px;
            border-bottom:1px solid ${theme.colors.grayE};
            margin-top: 10px;
            margin-bottom:10px;
            display:flex;
            justify-content:space-between;
            align-items:center;
            @media(min-width:800px){
                font-size: 18px;
            }

            & > img{
                margin-right: 10px;
            }

            & > #tarjetas-credito{
                width:160px; 
            }
            & > #tarjetas-debito{
                height: 35px;
            }
            & > #ml{
                height: 30px;
            }
            & > #efecty{
                height: 35px;
            }
            & > #cash-on-delivery{
                height: 35px;
            }

            & > span{
                margin-left: 5px;
            }

        }

        & > .message{
            color: ${theme.colors.grayA};
            width: 100%;
            font-weight: 600;
            margin-top:12px;
            margin-bottom:25px;

            & > small{
                margin-left: 10px;
                display: block;
                width: 90%;
                height: 50px;
                display: flex;
                justify-content: flex-start;
                align-items: center;
                @media(min-width:800px){
                    margin-left: 20px;
                }
            }
        }
        
    }
 
`;
const styleMediaModal = styled.div`

    width: 100%;
    height: 100%;


    & > .container-media{
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        @media(min-width:800px){
            height: 65vh;
        }
       
        & > img{
            width:200px;
            @media(min-width:800px){
                width:340px;
            }
        }
    }

`;
const styleButtonModal = styled.div`


    width: 100%;
    height: 100%;

    @media(min-width:300px){
        margin-top: 10%;
    }
    
    @media(min-width:800px){

        width: 90%;
        margin-left: 5%;
        margin-top:3%;
    }
`;

const InfoModal = ():JSX.Element=>{

    return<div className="container-modal">
        <div className="title-modal">Métodos de pago disponibles</div>
        <div className="content-modal">
            <div className="item">
                <span>Tarjetas de credito</span>
                <img loading="lazy" id="tarjetas-credito" src={theme.data_domain+'/uploads/pays_1_54655ac4dd.png'} alt="" />
            </div>
            <div className="item">
                <span>Tarjetas de debito</span>
                <img loading="lazy" id="tarjetas-debito" src={theme.data_domain+'/uploads/credit_cards_5890ab48ea.png'} alt="" />
            </div>
            <div className="item">
                <span>Paga con tu cuenta de Mercado Libre</span>
                <img loading="lazy" id="ml" src={theme.data_domain+'/uploads/icon_mercado_libre_eb4daa11bb.png'} alt="" />
            </div>
            <div className="item">
                <span>Paga en efectivo con Efecty</span>
                <img loading="lazy" id="efecty" src={theme.data_domain+'/uploads/efecty_aa50d41968.png'} alt="" />
            </div>
            <div className="item">
                <span>Pago contra entrega</span>
                <img loading="lazy" id="cash-on-delivery" src={theme.data_domain+'/uploads/efectivo_b3b19ee92b.webp'} alt="" />
            </div>

            <div className="message">
                
                <small><li>Todas tus compras estan respaldadas y cuentan con 30 días de garantía.</li></small>
                <small><li>Emitimos factura y garantia de cualquier producto que compres.</li></small>
            
            </div>
        </div>

    </div>
}

const MediaModal = ():JSX.Element=>{

    return<div className="container-media">
        <img loading="lazy" src={theme.data_domain+'/uploads/pay_secure_cebed6860e.webp'} alt="" />
    </div>
}

export const WidgetAnimationPayIndex:NextPage<PropsIndexPage> = (props) =>{

    const dataWidget = props.data.attributes.page.WidgetAnimationPayIndex;
    const [showModal,setShowModal] = React.useState<boolean>(false);

    return<>
        {
            showModal 
            &&
            <Modal
                infoElement={<InfoModal/>}
                mediaElement={<MediaModal/>}
                buttonElement={
                    <Button1
                        minHeight="60px"
                        minWidth="100%"
                        text="Salir"
                        click={()=>setShowModal(false)}
                    />
                }
                styleInfoElement={styleInfoModal}
                styleMediaElement={styleMediaModal}
                styleButtonElement={styleButtonModal}
            />
        }

        <SectionAnimationCash
            area="pay"
            title={dataWidget.text1}
            description={dataWidget.text2}
            text={dataWidget.description}
            animation={
                <Player
                    src={theme.data_domain+dataWidget.animation}
                    className="cash-on-delivery"
                    loop
                    autoplay
                    speed={1}
                />
            }

            button={
                <Button1
                    click={()=>setShowModal(true)}
                    minHeight="65px"
                    minWidth="250px"
                    text={dataWidget.text_button}
                />
            }
        />
    </>
}