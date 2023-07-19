import { NextPage } from "next";

import ProductsStore from "../../components/tienda/app";
import MenuMobile from "../../components/tienda/app/products-app/menu-mobile";
import MenuDesktop from "../../components/tienda/app/products-app/menu-desktop";
import TitleCategory from "../../components/tienda/app/products-app/title-category";
import InfiniteScroll from "react-infinite-scroll-component";
import ProductApp from "../../components/tienda/app/products-app/product";
import Promotions from "../../components/tienda/app/products-app/promotions";

import React, {  useEffect, useState } from "react";
import { GetData } from "../../services/get-data";
import { theme } from "../../../config";
import { useRouter } from "next/router";


type WidgetPropsAppStore ={
    categories:{data:any[], meta:any},
    products:{data:any[], meta:any}
    context:any,
    id_category:number,

}
export const WidgetProductsApp:NextPage<WidgetPropsAppStore> = (props) =>{
    
    const router =  useRouter();

    const [products, setProducts] = useState<any[]>([...props.products.data]);
    const [page, setPage] = useState <number>(2);
    const [category, setCategory] = useState<number>(props.id_category);







    console.log('products',products);


    const FetchMore = async (category:number,page:number,shallowRouting:boolean) => {

        const response = await GetData (
            [`https://cms.aipus.co/api/products?populate=*&filters[subcategories][id][$eq]=${category}&pagination[page]=${page}&pagination[pageSize]=6`], 
            theme.token_cms as string
        )
            
        if(shallowRouting){

            setProducts([...response[0].data]);
            setPage(2);
            setCategory(category);
        }else{

            setProducts([...products,...response[0].data]);
            setPage(page+1);
            setCategory(category);
        }


        
    }

    useEffect(()=>{

        setProducts(products);
        setPage(page);
        setCategory(category);


    },[products,page,category])


    return<>

        <ProductsStore
           
            menuMobile={
                <MenuMobile 
                    products={products}
                    categories={props.categories}
                    setProducts={(currentCategory,nameCategory)=>{
                        
                        setProducts([]); //clean products to activate infinite scroll 
                        window.scrollTo({top:0,behavior:'smooth'});
                        FetchMore(currentCategory,1,true);
                        router.replace('/tienda/'+nameCategory.toLowerCase(),undefined,{shallow:true});
                        FetchMore(currentCategory,1,true);
                      
                        
                    }}
                    
                />
            }
            menuDesktop={

                <MenuDesktop
                    categories={props.categories}
                    products={products}
                    setProducts={(currentCategory,nameCategory)=>{
                        
                        setProducts([]); //clean products to activate infinite scroll 
                        window.scrollTo({top:0,behavior:'smooth'});
                        FetchMore(currentCategory,1,true);
                        router.replace('/tienda/'+nameCategory.toLowerCase(),undefined,{shallow:true});
                        FetchMore(currentCategory,1,true);
                      
                        
                    }}

                />
            }

            titleCategory={
                <TitleCategory
                    marginTop={router.pathname === '/tienda' ? '25px' : '69px'}
                    categories={props.categories}
                    products={products}
                    setProducts={(currentCategory,nameCategory)=>{
                        
                        setProducts([]); //clean products to activate infinite scroll 
                        window.scrollTo({top:0,behavior:'smooth'});
                        FetchMore(currentCategory,1,true);
                        router.replace('/tienda/'+nameCategory.toLowerCase(),undefined,{shallow:true});
                        FetchMore(currentCategory,1,true);
                      
                        
                    }}
                />
            }
            promotions={<Promotions /> }

            infiniteScroll={
                <InfiniteScroll

                    dataLength={products.length}
                    next={()=> FetchMore(category,page,false)}
                    hasMore={true}
                    loader={<h4 className="loader-app-products">Loading...</h4>}
                    className="infinite-scroll-container"
                    style={{marginTop:'-20px'}}
                    
                >

                    {
                        products.map((product:any,index:number)=>{

                            return<span key={index}>
                                
                                <ProductApp product={product} />
                                <hr className="hr-product"></hr>

                            </span>
                        })
                    }
                </InfiniteScroll>
            }
        />

    </>
}