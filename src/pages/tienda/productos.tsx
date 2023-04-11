import { GetStaticProps, NextPage } from "next";
import { WidgetNav } from "../../widgets/common/w-nav";
import { WidgetProductsApp } from "../../widgets/tienda/products/w-products-store";
import { GetData } from "../../services/get-data";
import { theme } from "../../../config";
import { WidgetFooter } from "../../widgets/common/w-footer";
import { useRouter } from "next/router";

export type PropsAppStore ={
    categories:{data:any[], meta:any},
    products:{data:any[], meta:any}
}

const  StoreAppPage:NextPage<PropsAppStore> =(props) =>{

    const router = useRouter();
    
    if (router.isFallback) {
        // If the page is not yet generated, show a loading spinner
        return <div>Loading...</div>;
      }

    return<>

        <WidgetNav/>
        <WidgetProductsApp products={props.products} categories={props.categories} />
        <WidgetFooter/>
    </>
}

export const getStaticProps:GetStaticProps<PropsAppStore> = async(conext) =>{

    const response = await GetData([
    
        'https://cms.aipus.co/api/subcategories?filters[category][id][$eq]=5&populate[0]=media', //return categories of runalotus
        'https://cms.aipus.co/api/products?populate=*&filters[subcategories][id][$eq]=1' //return products of runalotus
    
    ],theme.token_cms).then(data=>data);



    return{
        props:{
            categories:response[0],
            products:response[1]
        }
    }
}


export default StoreAppPage;