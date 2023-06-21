import { NextPage } from "next";
import CardCategories from "../../components/turismo/card-categories";
import CategoriesTourism from "../../components/turismo/categories";

import { theme } from "../../../config";
import { PropsIndexPage } from "../../pages/turismo";


export const WidgetCategoriesTourismIndex:NextPage<PropsIndexPage> = (props)=>{

    const dataWidget = Object.entries(props.data.attributes.page.WidgetCategoriesTourismIndex.categories);
    
    const cardsCategoriesTourism:JSX.Element[] = [];
    
    dataWidget.forEach((category:any[], index:number)=>{

        cardsCategoriesTourism.push(
            <CardCategories img={theme.data_domain+category[1].img}  title={category[1].text}/>
        )
         
    })


    return<>
        <CategoriesTourism
            tittle={props.data.attributes.page.WidgetCategoriesTourismIndex.title.text}
            link={props.data.attributes.page.WidgetCategoriesTourismIndex.title.label}
            cards={cardsCategoriesTourism}
            area="tourism"
        />
    
    </>
}