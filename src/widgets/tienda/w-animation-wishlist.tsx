import { Player } from "@lottiefiles/react-lottie-player";
import { NextPage } from "next";
import SectionAnimationRoute from "../../components/turismo/animation-routes";
import Button1 from "../../components/common/button-1";

export const WidgetWishListStore:NextPage = ()=>{

    return<>
         <SectionAnimationRoute

            title="No te pierdas los descuentos que tenemos para tí"
            description="Encuentra productos con hasta 50% OFF"
            text=" 
                Tenemos sorpresas y regalos semanales para nuestros usuarios activos
                así como descuentos y promociones especiales que te estan esperando,
                no pierdas tiempo ve y descubre todo lo que tenemos preparado para ti.
            "
            player={
                <Player
                    src='/assets/animations/wish-list-store.json'
                    className="router-tourism"
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

            area="wish"


            />
    </>
}