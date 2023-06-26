import { NextPage } from "next";
import CardInfo from "../../../components/common/card-info";
import { IconCreditCardCheck, IconEscudoCheck, IconHandBill, IconTruckBox } from "../../../icons/icons";
import { theme } from "../../../../config";
import CardsStore from "../../../components/tienda/cards-store";


type PropsWidgetCardsInfo = {
    data:{
        id:number,
        attributes:any
    }
}

export const WidgetCardsInfo:NextPage<PropsWidgetCardsInfo> = (props)=>{

    const dataWidget = props.data.attributes.page.WidgetCardsInfo;

    const IconsCardInfo:JSX.Element[] = [

        <IconHandBill width="112" height="112"  />,
        <IconTruckBox width="112" height="112" fill={theme.colors.white}/>,
        <IconEscudoCheck width="112" height="112"  />,
        <IconCreditCardCheck width="112" height="112" fill={theme.colors.white}/>
    
    ];

    const Cards:JSX.Element[] = [];


    dataWidget.forEach((card:any,index:number) => {
            
        Cards.push(

            <CardInfo
                key={index}
                icon={IconsCardInfo[index]}
                title={card.title}
                text={card.text}
                link={card.text_link}
            />
        )
    });

    return<>
        <CardsStore
            cards={Cards}
        />
    </>
} 