import { Player } from "@lottiefiles/react-lottie-player";
import { NextPage } from "next";
import SectionAnimationCash from "../../components/tienda/section-animation-cash";
import Button1 from "../../components/common/button-1";
import { PropsPage } from "../../pages";

export const WidgetAnimationPay:NextPage<PropsPage> = (props) =>{

    console.log(props);

    return<>
        <SectionAnimationCash
            area="pay"
            title="Paga online en runalotus"
            description="Es facil y ahorras tiempo"
            text="
            Protegemos y procesmos tus pagos usando las mejores tecnologias disponibles en
            el mercado, tus pagos siempre están garantizados.
            Como partners oficiales de mercadopago ofrecemos experiencias de pago seguras y
            eficientes
            "
            animation={
                <Player
                    src='/assets/animations/pay.json'
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
                    text="Ver métodos de pago"
                />
            }
        />
    </>
}