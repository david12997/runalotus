import { Player } from "@lottiefiles/react-lottie-player";
import { NextPage } from "next";
import SectionAnimationRoute from "../../../components/turismo/animation-routes";
import Button1 from "../../../components/common/button-1";
import { theme } from "../../../../config";

type PropsWidgetWishListStore = {
    data:{
        id:number,
        attributes:any
    }
}

export const WidgetWishListStore:NextPage<PropsWidgetWishListStore> = (props)=>{

    const dataWidget = props.data.attributes.page.WidgetWishListStore;

    return<>
         <SectionAnimationRoute

            title={dataWidget.title}
            description={dataWidget.description}
            text={dataWidget.text}
            player={
                <Player
                    src={theme.data_domain+dataWidget.animation}
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
                    text={dataWidget.btn_text}
                />
            }

            area="wish"


            />
    </>
}