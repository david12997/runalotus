import { NextPage } from "next";
import WelcomeStore from "../../components/tienda/welcome-store";

export const WidgetWelcomeStore:NextPage = ()=>{

    return<>

        <WelcomeStore

            imgDesktop="/assets/img/tienda/welcome-store-desktop.webp"
            imgMobile="/assets/img/tienda/welcome-store-mobile.webp"
            alt="Productos que cuentan historias hasta 50% off en toda la tienda"
        />
    </>
}