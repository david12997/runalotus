import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import { WidgetViewProduct } from "../../../widgets/tienda/w-view-product";
import { GetData } from "../../../services/get-data";
import { theme } from "../../../../config";
import { useRouter } from "next/router";
import { WidgetNav } from "../../../widgets/common/w-nav";
import BreadCrumbs from "../../../components/common/breadCrumbs";

type PropsViewProduct = {
    id_product:number,
    product:{id:number, attributes:{}},
    data:{id:number, attributes:{}}
    context:any,
}

const StoreViewProductPage:NextPage<PropsViewProduct> = (props) =>{

    const router = useRouter();

    if(router.isFallback){

        return <h1>Loading...</h1>
    }

    return<>
    <WidgetNav data={[props.data.attributes,props.context]}/>
    <BreadCrumbs/>
    <WidgetViewProduct product={props.product} context={props.context} />
    </>
}

export const getStaticPaths:GetStaticPaths = async () =>{

    return{
        paths:[], //empty array
        fallback:true
    }

}

export const getStaticProps:GetStaticProps<PropsViewProduct> = async (context) =>{

    const {params} = context;
    let id_product:number = 1;

    if(params?.product){
        id_product = parseInt(params.product as string);
    }

    let lang:string; // lang 5 and 6 are store page in cms
    context.locale === 'es' ? lang = '5' : lang = '6';

    const response = await GetData([
        `https://cms.aipus.co/api/products/${id_product}?populate=*`,
        `https://cms.aipus.co/api/pages/${lang}?populate[0]=components` //return components of store page
        
    ],theme.token_cms as string).then(data=>data);
    
    return{
        props:{
            id_product:id_product,
            product:response[0].data,
            data:response[1].data,
            context:context
        }
    }
}

export default StoreViewProductPage;