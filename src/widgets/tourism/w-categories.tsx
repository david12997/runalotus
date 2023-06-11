import { NextPage } from "next";
import CardCategories from "../../components/turismo/card-categories";
import CategoriesTourism from "../../components/turismo/categories";
import { theme } from "../../../config";
import { PropsTourismPage } from "../../pages/turismo";



export const WidgetCategoriesTourism:NextPage<PropsTourismPage> = (props)=>{

    const dataWidget = Object.entries(props.data.attributes.page.WidgetCategoriesTourism.categories);
    const cardsCategoriesTourism:JSX.Element[] = [];

    dataWidget.forEach((category:any[], index:number)=>{

        cardsCategoriesTourism.push(
            <CardCategories img={theme.data_domain+category[1].img}  title={category[1].text}/>
        )

    });

    return<>
        <CategoriesTourism
            tittle={props.data.attributes.page.WidgetCategoriesTourism.title.text}
            link={props.data.attributes.page.WidgetCategoriesTourism.title.label}
            cards={cardsCategoriesTourism}
            area="categories"
        />
    
    </>
}