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
import Image from "next/image";


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
    const [hasMoreInfinity, setHasMoreInfinity] = useState<boolean>();

    const FetchMore = async (category:number,page:number,shallowRouting:boolean) => {

        const response = await GetData (
            [`https://cms.aipus.co/api/products?populate=*&filters[subcategories][id][$eq]=${category}&pagination[page]=${page}&pagination[pageSize]=9`], 
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
       
        if(response[0].data.length === 0){
            setHasMoreInfinity(false);
            setTimeout(() => setHasMoreInfinity(false), 1200);
            
        }
        
    }

    useEffect(()=>{

        setHasMoreInfinity(true);
        setProducts(products);
        setPage(page);
        setCategory(category);


    },[products])


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
                    marginTop={'69px'}
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
            promotions={<Promotions  /> }

            infiniteScroll={
                <InfiniteScroll

                    dataLength={products.length}
                    next={()=> FetchMore(category,page,false)}
                    hasMore={hasMoreInfinity as boolean}
                    endMessage={
                        <div style={{textAlign: 'center',padding:"5px"}}>      
                            
                            <Image
                                src={theme.data_domain+"/uploads/empty_box_63499fe01a.webp"}
                                alt="empty box products"
                                width={250}
                                height={250}
                            />
                            <p style={{color:theme.colors.grayA,fontSize:'17px'}}>Ups! no hay más productos en esta categoria</p>
                            <p onClick={()=>router.push('/tienda/')} style={{color:theme.colors.secondaryA,fontWeight:'800',cursor:'pointer'}}>Ver más productos</p>
                            <br/>
                        </div>
                    }
                    loader={
                        <div className="" style={{textAlign: 'center',padding:"5px",marginTop:'10px',paddingTop:'15px'}}>
                            <Image
                                src={theme.data_domain+"/uploads/loading_a81759c690.webp"}
                                alt="loading products"
                                width={250}
                                height={250}
                            />
                             <p style={{color:theme.colors.grayA,fontSize:'17px'}}>Cargando productos...</p>
                             <br/>
                             <br/>

                        </div>
                    }
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