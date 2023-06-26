import { NextPage } from "next";
import ViewProduct from "../../components/tienda/view-product";

type PropsWidgetViewProduct = {

    product:{id:number, attributes:{}},
    context:any,
}

export const WidgetViewProduct:NextPage<PropsWidgetViewProduct> = (props) =>{


    return<>
        <ViewProduct  product={props.product} />
    </>
}