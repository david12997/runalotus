import { NextPage} from "next";
import CardProduct from "../../../components/tienda/card-product";
import { IconCartPlus, IconTruck } from "../../../icons/icons";
import { theme } from "../../../../config";
import FeaturedProducts from "../../../components/tienda/cards-product-store";
import FormatCurrency from "../../../services/format-currency";

type PropsWidgetFeaturedProducts = {

    products:any[]
}

export const WidgetFeaturedProducts:NextPage<PropsWidgetFeaturedProducts> = (props)=>{

    const Cards1:JSX.Element [] = [];
    const Cards2:JSX.Element [] = [];

    //console.log(props.products)
    props.products.forEach((product:any, index:number)=>{
    
        
        (index <= 3) && Cards1.push(<CardProduct

            name={product.attributes.name}
            img={product.attributes.links_marketplace.img_ml}
            alt={product.attributes.name}
            price={FormatCurrency(product.attributes.sale_price, 'COP', 'es-CO')}
            discount={FormatCurrency(product.attributes.sale_price, 'COP', 'es-CO')}
            iconAdd={
                <IconCartPlus 
                    width="30" 
                    height="30" 
                    fill={theme.colors.grayA} 
                />
            }
            iconTruck={
                <IconTruck
                    width="22" 
                    height="22" 
                    fill={theme.colors.successA} 
                />
            }
            textDelivery="Envío gratis"
        />);

        (index >= 4 && index <=7) && Cards2.push(<CardProduct

            name={product.attributes.name}
            img={product.attributes.links_marketplace.img_ml}
            alt={product.attributes.name}
            price={`$ ${new Intl.NumberFormat('es-CO').format(Math.ceil(parseInt(product.attributes.sale_price)))} COP`}
            discount={`$ ${new Intl.NumberFormat('es-CO').format(Math.ceil(parseInt(product.attributes.discount_price)))} COP`}
            iconAdd={
                <IconCartPlus 
                    width="30" 
                    height="30" 
                    fill={theme.colors.grayA} 
                />
            }
            iconTruck={
                <IconTruck
                    width="22" 
                    height="22" 
                    fill={theme.colors.successA} 
                />
            }
            textDelivery="Envío gratis"
        />);

    })


    return<>
        <FeaturedProducts

            title="Productos destacados"
            link="ver más"
            urlLink=""
            featured1={Cards1}
            featured2={Cards2}
        />
    </>
}