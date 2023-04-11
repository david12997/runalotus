import { Player } from "@lottiefiles/react-lottie-player";
import { NextPage } from "next";
import SectionTracker from "../../components/rastreador/section-rastreador";
import { CardTracker } from "../../components/rastreador/tracker-card";
import Button1 from "../../components/common/button-1";

export const WidgetSectionTracker:NextPage = ()=>{

    return<>
        <SectionTracker 
            area="tracker"
            title="Rastrea tus compras en tiempo real"
            description="Ingresa tu ID de rastreo"
            animation={

                <Player
                    src='/assets/animations/track-page.json'
                    className="track"
                    loop
                    autoplay
                    speed={1}
                />

            }
            cardTracker={
                <CardTracker
                    label="ID de rastreo"
                    placeholder=" EJ: RUNA-123-456-789-LOTUS"
                    small="ID de rastreo disponible en la factura de tu compra"
                    button={
                        <Button1
                            minHeight="70px"
                            minWidth="270px"
                            text="Rastrear compra"
                        />
                    }
                />
            }

        />
    </>
}