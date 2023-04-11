import { NextPage } from "next";
import CardCategories from "../../components/turismo/card-categories";
import CategoriesTourism from "../../components/turismo/categories";

import { theme } from "../../../config";
import { PropsPage } from "../../pages";


export const WidgetCategoriesTourismIndex:NextPage<PropsPage> = (props)=>{

    const dataWidget = Object.entries(props.data.attributes.data.inicio.tourism_categories);
    
    const cardsCategoriesTourism:JSX.Element[] = [];
    
    dataWidget.forEach((category:any[], index:number)=>{

        cardsCategoriesTourism.push(
            <CardCategories img={theme.data_domain+category[1].img}  title={category[1].text}/>
        )
         
    })


    return<>
        <CategoriesTourism
            cards={cardsCategoriesTourism}
            area="tourism"
        />
    
    </>
}