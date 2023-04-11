import { NextPage } from "next";
import ProductsStore from "../../../components/tienda/app/products-store";

type PropsAppStore ={
    categories:{data:any[], meta:any},
    products:{data:any[], meta:any}
}

export const WidgetProductsApp:NextPage<PropsAppStore> = (props) =>{

    return<>

        <ProductsStore
            products={props.products}
            categories={props.categories}
        />

    </>
}