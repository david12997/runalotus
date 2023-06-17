import { GetStaticProps, NextPage } from "next";
import { WidgetNav } from "../../widgets/common/w-nav";
import { WidgetProductsApp } from "../../widgets/tienda/products/w-products-store";
import { GetData } from "../../services/get-data";
import { theme } from "../../../config";
import { WidgetFooter } from "../../widgets/common/w-footer";
import { useRouter } from "next/router";

export type PropsAppStore ={
    categories:{data:any[], meta:any},
    products:{data:any[], meta:any},
    context:any,
    data:{id:number,attributes:any}
}

const  StoreAppPage:NextPage<PropsAppStore> =(props) =>{

    const router = useRouter();
    
    if (router.isFallback) {
        // If the page is not yet generated, show a loading spinner
        return <div>Loading...</div>;
      }

    return<>

        <WidgetNav data={[props.data.attributes,props.context]} />
        <WidgetProductsApp 
            context={props.context} 
            products={props.products} 
            categories={props.categories} 
        />
       
    </>
}

export const getStaticProps:GetStaticProps<PropsAppStore> = async(context) =>{

    let lang:string; // lang 5 and 6 are store page in cms
    context.locale === 'es' ? lang = '5' : lang = '6';

    const response = await GetData([
    
        'https://cms.aipus.co/api/subcategories?filters[category][id][$eq]=5&populate[0]=media', //return categories of runalotus
        'https://cms.aipus.co/api/products?populate=*&filters[subcategories][id][$eq]=1', //return products of runalotus
        `https://cms.aipus.co/api/pages/${lang}?populate[0]=components` //return components of store page
    
    ],theme.token_cms as string).then(data=>data);



    return{
        props:{
            categories:response[0],
            products:response[1],
            context:context,
            data:response[2].data
        }
    }
}


export default StoreAppPage;