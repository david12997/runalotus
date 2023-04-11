import { NextPage } from "next";
import CardInfo from "../../components/common/card-info";
import { IconCreditCardCheck, IconEscudoCheck, IconHandBill, IconTruckBox } from "../../icons/icons";
import { theme } from "../../../config";
import CardsStore from "../../components/tienda/cards-store";



export const WidgetCardsInfo:NextPage = ()=>{

    const Cards:JSX.Element[] = [
        <CardInfo 
            icon={<IconHandBill width="112" height="112"  />} 
            title="Pago contra entrega" 
            text="En Runalotus solo pagas cuando reciber tu compra" 
            link="Ver más" 
        />
        ,
        <CardInfo 
            icon={<IconTruckBox width="112" height="112" fill={theme.colors.white}/>} 
            title="Envíos a toda Colombia" 
            text="De la mano de las mejores transportadoras del país" 
            link="Ver más" 
        />
        ,
        <CardInfo 
            icon={<IconEscudoCheck width="112" height="112"  />} 
            title="Garantia en tus compras" 
            text="Todas tus compras cuentan con garantia de 14 días" 
            link="Ver más" 
        />
        ,
        <CardInfo 
            icon={<IconCreditCardCheck width="112" height="112" fill={theme.colors.white}/>} 
            title="Multiples métodos de pago" 
            text="Realiza todos tus pagos desde tu banco favorito" 
            link="Ver más" 
        />
    ];

    return<>
        <CardsStore
            cards={Cards}
        />
    </>
} 