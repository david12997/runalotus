import { NextPage } from "next";
import WelcomeIndex from "../../components/index/welcome-index";
import Button1 from "../../components/common/button-1";

import { theme } from "../../../config";
import { Player } from "@lottiefiles/react-lottie-player";
import { PropsIndexPage } from "../../pages";
import { useRouter } from "next/router";




export const WidgetWelcomeIndex:NextPage<PropsIndexPage> = (props)=>{

    type PropsDataWidget = {
        text1:string,
        text2:string,
        text3:string,
        description:string,
        text_button:string,
        hand:string,
        animation:string,
        bg:string
    }
    const dataWidget:PropsDataWidget = props.data.attributes.page.WidgetWelcomeIndex;
    const router = useRouter();


    return<>
    
        <WelcomeIndex
            bg={`${theme.data_domain}${dataWidget.bg}`}
            text1={dataWidget.text1}
            text2={dataWidget.text2}
            text3={dataWidget.text3}
            description={dataWidget.description}
            buttonDesktop={
                <Button1
                    text={dataWidget.text_button}
                    minWidth="96%"
                    minHeight="60px"
                    click={()=>router.push("/turismo/mapa")}
                />
            }
            buttonMobile={
                <Button1
                    text={dataWidget.text_button}
                    minWidth="96%"
                    minHeight="80px"
                    click={()=>router.push("/turismo/mapa")}
                />
            }
            hand={`${theme.data_domain}${dataWidget.hand}`}
            animation={
                <Player
                    src={`${theme.data_domain}${dataWidget.animation}`}
                    loop
                    autoplay
                    speed={1}
                    
                />
            }
        />
    </>
}