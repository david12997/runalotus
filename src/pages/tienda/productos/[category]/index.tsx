import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import { WidgetNav } from "../../../../widgets/common/w-nav";
import { GetData } from "../../../../services/get-data";
import { theme } from "../../../../../config";
import { PropsAppStore } from "../../productos";
import { WidgetProductsApp } from "../../../../widgets/tienda/products/w-products-store";
import { useRouter } from "next/router";


const StoreAppCategoryPage:NextPage<PropsAppStore> = (props) =>{

    const router = useRouter();
    
    if(router.isFallback){
        return <div>Loading...</div>
    }

    return<>

        <WidgetNav data={[props.data.attributes,props.context]} />
        <WidgetProductsApp context={props.context} products={props.products} categories={props.categories} />
        
    </>
}

export const getStaticPaths:GetStaticPaths = async () =>{

    return{
        paths:[
            {
                params:{category:'joyeria'}
            },
            {
                params:{category:'ceramica'}
            },
            {
                params:{category:'piedras'}
            },
            {
                params:{category:'tejidos'}
            },
            {
                params:{category:'jarras'}
            },
            {
                params:{category:'sombreros'}
            },
            {
                params:{category:'bolsos'}
            },
        ],
        fallback:false
    }
}

export const getStaticProps:GetStaticProps<PropsAppStore> = async (context) =>{

    const {params} = context;
    let id_category:number = 1;

    params?.category === 'jarras' ? (id_category = 13) 
    : params?.category === 'joyeria' ? (id_category = 9)
    : params?.category === 'ceramica' ? (id_category = 10) 
    : params?.category === 'piedras' ? (id_category = 11) 
    : params?.category === 'tejidos' ? (id_category = 12) 
    : params?.category === 'sombreros' ? (id_category = 14) 
    : params?.category === 'bolsos' ? (id_category = 15) 
    : (id_category = 1);
    
    let lang:string; // lang 5 and 6 are store page in cms
    context.locale === 'es' ? lang = '5' : lang = '6';
    
    const response = await GetData([
        'https://cms.aipus.co/api/subcategories?filters[category][id][$eq]=5&populate[0]=media', //return categories of runalotus
        'https://cms.aipus.co/api/products?populate=*&filters[subcategories][id][$eq]='+id_category, //return products of category
        `https://cms.aipus.co/api/pages/${lang}?populate[0]=components` //return components of store page

    ],theme.token_cms as string).then(data=>data);
    
    return{
        props:{
            products:response[1],
            categories:response[0],
            context:context,
            data:response[2].data
            
        }
    }
}

export default StoreAppCategoryPage;

