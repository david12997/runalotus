import { Player } from "@lottiefiles/react-lottie-player";
import { NextPage } from "next";
import SectionAnimationCash from "../../components/tienda/section-animation-cash";
import Button1 from "../../components/common/button-1";
import { theme } from "../../../config";
import { PropsIndexPage } from "../../pages";

export const WidgetAnimationPayIndex:NextPage<PropsIndexPage> = (props) =>{

    console.log(props);
    const dataWidget = props.data.attributes.page.WidgetAnimationPayIndex;

    return<>
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
                    minHeight="65px"
                    minWidth="250px"
                    text={dataWidget.text_button}
                />
            }
        />
    </>
}