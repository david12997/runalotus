import { NextPage } from "next";
import CardCategories from "../../components/turismo/card-categories";
import CategoriesIndex from "../../components/index/categories-index";
import { theme } from "../../../config";
import { PropsPage } from "../../pages";
import { useRouter } from "next/router";

export const WidgetCategoriesProductIndex:NextPage<PropsPage> = (props) =>{

    const router = useRouter();
    const cards:JSX.Element[] = [];
    const dataCategory = Object.entries(props.data.attributes.data.inicio.categories.data);
    const dataWidget = props.data.attributes.data.inicio.categories;
    
    dataCategory.forEach((category:any, index:number)=>{

        cards.push(
            
            <CardCategories
                img={ theme.data_domain+category[1].img}
                title={category[1].text}
                click={()=>router.push(`/tienda/productos/${category[1].link}`)}
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