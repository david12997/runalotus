import { Player } from "@lottiefiles/react-lottie-player";
import { NextPage } from "next";
import SectionAnimationTrack from "../../../components/tienda/section-animation-track";
import Button1 from "../../../components/common/button-1";
import { theme } from "../../../../config";

type PropsWidgetAnimationTrack = {

    data:{
        id:number,
        attributes:any
    }
}

export const WidgetSectionAnimationTrack:NextPage<PropsWidgetAnimationTrack> = (props)=>{

    const dataWidget = props.data.attributes.page.WidgetSectionAnimationTrack;

    return<>
        <SectionAnimationTrack

            area="track"
            title={dataWidget.title}
            description={dataWidget.description}
            animation={
                <Player
                    src={theme.data_domain+dataWidget.animation}
                    className="track"
                    loop
                    autoplay
                    speed={1}
                />
            }
            text={dataWidget.text}
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