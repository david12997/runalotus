import { Player } from "@lottiefiles/react-lottie-player";
import { NextPage } from "next";
import SectionAnimationCash from "../../../components/tienda/section-animation-cash";
import Button1 from "../../../components/common/button-1";
import { theme } from "../../../../config";

type PropsWidgetAnimationCash = {

    data:{
        id:number,
        attributes:any
    }
}

export const WidgetAnimationCash:NextPage<PropsWidgetAnimationCash> = (props) =>{

    const dataWidget = props.data.attributes.page.WidgetAnimationCash;

    return<>
        <SectionAnimationCash
            area="cash"
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