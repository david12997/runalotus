import { NextPage } from "next";
import WelcomeStore from "../../components/tienda/welcome-store";
import { theme } from "../../../config";

type PropsWidgetWelcomeStore = {
    data:{
        id:number,
        attributes:any
    }
}

export const WidgetWelcomeStore:NextPage<PropsWidgetWelcomeStore> = (props)=>{

    const dataWidget = props.data.attributes.page.WidgetWelcomeStore;

    return<>

        <WelcomeStore

            imgDesktop={ theme.data_domain+dataWidget.img_desktop}
            imgMobile={theme.data_domain+dataWidget.img_mobile}
            alt={dataWidget.alt}
        />
    </>
}