import { Player } from "@lottiefiles/react-lottie-player";
import { NextPage } from "next";
import SectionAnimationCash from "../../components/tienda/section-animation-cash";
import Button1 from "../../components/common/button-1";

export const WidgetAnimationCash:NextPage = () =>{

    return<>
        <SectionAnimationCash
            area="cash"
            title="Pago contra entrega en runalotus"
            description="Pagas en la puerta de tu casa"
            text="
                Compra en runalotus y pagas solo cuando recibes tu producto,
                con el pago contra entrega estas seguro de recibir lo que pediste,
                pide ahora y paga enla puerta de tu casa
            "
            animation={
                <Player
                    src='/assets/animations/cash-on-delivery.json'
                    className="cash-on-delivery"
                    loop
                    autoplay
                    speed={1}
                />
            }

            button={
                <Button1
                    minHeight="65px"
                    minWidth="250px"
                    text="Ver descuentos"
                />
            }
        />
    </>
}