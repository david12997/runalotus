import { NextPage } from "next";
import CardCategories from "../../components/turismo/card-categories";
import CategoriesIndex from "../../components/index/categories-index";
import { theme } from "../../../config";
import { PropsPage } from "../../pages";

export const WidgetCategoriesProductIndex:NextPage<PropsPage> = (props) =>{

    const cards:JSX.Element[] = [];

    const dataWidget = Object.entries(props.data.attributes.data.inicio.categories);
    
    dataWidget.forEach((category:any, index:number)=>{

        cards.push(
            
            <CardCategories
                img={ theme.data_domain+category[1].img}
                title={category[1].text}
            />
        );
    })

    return<>
        <CategoriesIndex
            title="Categorias"
            link="Ver más"
            url=""
            cards={cards}
        />
    </>
}