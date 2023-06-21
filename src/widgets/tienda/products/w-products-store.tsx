import { NextPage } from "next";
import ProductsStore from "../../../components/tienda/app";

type PropsAppStore ={
    categories:{data:any[], meta:any},
    products:{data:any[], meta:any},
    context:any
}

export const WidgetProductsApp:NextPage<PropsAppStore> = (props) =>{

    return<>

        <ProductsStore
            products={props.products}
            categories={props.categories}
            context={props.context}
        />

    </>
}