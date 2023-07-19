import { NextPage } from "next";
import CardCategories from "../../components/turismo/card-categories";
import CategoriesIndex from "../../components/index/categories-index";
import { theme } from "../../../config";

import { useRouter } from "next/router";
import { PropsIndexPage } from "../../pages";

export const WidgetCategoriesProductIndex:NextPage<PropsIndexPage> = (props) =>{

    const router = useRouter();
    const cards:JSX.Element[] = [];
    const dataCategory = Object.entries(props.data.attributes.page.WidgetCategoriesProductIndex.data);
    const dataWidget = props.data.attributes.page.WidgetCategoriesProductIndex;
    
    dataCategory.forEach((category:any, index:number)=>{

        cards.push(
            
            <CardCategories
                img={ theme.data_domain+category[1].img}
                title={category[1].text}
                click={()=>router.push(`/tienda/${category[1].link}`)}
            />
        );
    })

    return<>
        <CategoriesIndex
            title={dataWidget.meta.title}
            link={dataWidget.meta.text_link}
            url=""
            cards={cards}
        />
    </>
}