import { NextPage } from "next";
import CardCategories from "../../components/turismo/card-categories";
import CategoriesIndex from "../../components/index/categories-index";
import { theme } from "../../../config";
import { useRouter } from "next/router";

type PropsWidgetCategoriesProductStore = {
    data:{id:number,attributes:any}
}

export const WidgetCategoriesProductStore:NextPage<PropsWidgetCategoriesProductStore> = (props) =>{

    const router = useRouter();
    const cards:JSX.Element[] = [];
    const dataCategory = Object.entries(props.data.attributes.page.WidgetCategoriesProductStore.data);
    const dataWidget = props.data.attributes.page.WidgetCategoriesProductStore;
    
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