import { Player } from "@lottiefiles/react-lottie-player";
import { NextPage } from "next";
import SectionAnimationCash from "../../components/tienda/section-animation-cash";
import Button1 from "../../components/common/button-1";
import { theme } from "../../../config";

export type PropsWidgetAnimationPayStore = {
    data:{
        id:number,
        attributes:any
    }
}

export const WidgetAnimationPayStore:NextPage<PropsWidgetAnimationPayStore> = (props) =>{

    const dataWidget = props.data.attributes.page.WidgetAnimationPayStore;
   
    return<>
        <SectionAnimationCash
            area="pay"
            title={dataWidget.title}
            description={dataWidget.description}
            text={dataWidget.text}
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
                    minHeight="65px"
                    minWidth="250px"
                    text={dataWidget.btn_text}
                />
            }
        />
    </>
}