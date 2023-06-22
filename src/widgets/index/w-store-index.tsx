import { Player } from "@lottiefiles/react-lottie-player";
import { NextPage } from "next";
import SectionAnimationStore from "../../components/index/store-section";
import Button1 from "../../components/common/button-1";
import { theme } from "../../../config";
import { PropsIndexPage } from "../../pages";
import { useRouter } from "next/router";


export const WidgetStoreIndex:NextPage<PropsIndexPage> = (props)=>{
    type PropsWidget = {
        text1:string,
        text2:string,
        description:string,
        text_button:string,
        store_img:string,
        animation:string
    }
    const dataWidget:PropsWidget = props.data.attributes.page.WidgetStoreIndex;
    const router = useRouter();

    return<>
        <SectionAnimationStore
            imgBg={`${theme.data_domain}${dataWidget.store_img}`}
            animation={
                <Player
                    src={`${theme.data_domain}${dataWidget.animation}`}
                    className="animation-index-store"
                    loop
                    autoplay
                    speed={1}
                />
            }
            title={dataWidget.text1}
            text={dataWidget.text2}
            description={dataWidget.description}
            buttonDesktop={
                <Button1
                    text={dataWidget.text_button}
                    minWidth="96%"
                    minHeight="60px"
                    click={()=>router.push('/tienda')}
                />
            }
            buttonMobile={                
                <Button1
                    text={dataWidget.text_button}
                    minWidth="98%"
                    minHeight="80px"
                    click={()=>router.push('/tienda')}
                />
            }
        />
    </>
}