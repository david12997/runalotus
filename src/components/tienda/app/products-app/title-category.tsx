import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { theme } from "../../../../../config";
import { IconCategories } from "../../../../icons/icons";
import Select from "react-select";
import { useRouter } from "next/router";

const StyleTitleCategory = styled.div<{marginTop:string}>`

   & > .title-category{
        position: relative;
        width: 100%;
        height: 60px;
        margin-top: ${props=>props.marginTop};
        display: flex;
        justify-content: flex-start;
        align-items: center;
        z-index: 998;
      

        @media(min-width:800px){

            width: 80%;
            margin-left: 20%;
            margin-top: ${props=>props.marginTop === "25px" ? "25px" : "0px"};

        }

        & > #categories-select{
            width:75%;
            margin-left: 5%;
            @media(min-width:800px){
                width: 53%;
                margin-left: 1%;
            }
        }

        & > .icon{
            width: 15%;
            margin-left: 3%;
            @media(min-width:800px){
                width: 5%;
                margin-left: 6%;
            }
        }
    }
`;

type PropsTitleCategory = {
    categories:any,
    products:any,
    setProducts:(currentCategory:number,nameCategory:string,products:any[])=>void,
    marginTop:string
}

export default function TitleCategory(props:PropsTitleCategory):JSX.Element {

    const router = useRouter();
    const [categories, setCategories] = useState<any[]>([]);
  

    const parseCategories = (categories:any) =>{

        let catgeoriesSelect:any[] = [];
        categories.data.forEach((category:any,index:number)=>{

            catgeoriesSelect.push({
                
                id:category.id,
                value:category.attributes.name.toLowerCase(),
                label:category.attributes.name,
                icon:theme.data_domain+ category.attributes.media.data[0].attributes.url
    
            })
    
        });

       setCategories(catgeoriesSelect);
    }
   

    useEffect(()=>{

        parseCategories(props.categories);


        
    },[])

    const customStylesSelect = {

        control: (base:any) => ({
          ...base,
          height: 48,
          minHeight: 48,
          fontSize:19,
          fontWeight:300
        })
    };
      
    
    return<StyleTitleCategory marginTop={props.marginTop}>
        
        <div className="title-category">
            
            <span className="icon">
                <IconCategories width="40" height="40" fill={theme.colors.primaryA} />
            </span>

            <Select
                id="categories-select"
                placeholder="Categorias"
                value={categories.filter((e:any)=>e.value.trim() === router.query.category)}
                options={categories}
                formatOptionLabel={(e:any)=>(
                    <div style={{display:'flex',alignItems:'center'}}>
                        <img loading="lazy" style={{width:"30px", marginRight:'10px',marginLeft:'5px'}} src={e.icon}/> {e.label}
                    </div>
                )}
                styles={customStylesSelect}
                onChange={(e)=>{
                    const categoriesMobile = document.getElementsByClassName("categories-mobile-store");
                    const categoriesDesktop = document.getElementsByClassName("categories-desktop-store");
                    for(let i = 0; i < categoriesMobile.length; i++){
                        
                        if( parseInt(categoriesMobile[i].attributes[0].value) === e.id){
                            categoriesMobile[i].setAttribute("style","border:3px solid "+theme.colors.secondaryA);
                            categoriesDesktop[i].setAttribute("style","border:3px solid "+theme.colors.secondaryA);
                        }else{
                            categoriesMobile[i].setAttribute("style","border:1px solid "+theme.colors.grayD);
                            categoriesDesktop[i].setAttribute("style","border:2px solid "+theme.colors.grayD);
                        }
                        
                    }

                    props.setProducts(e.id,e.value,props.products.data);
                    
                }}
            />
        </div>
    </StyleTitleCategory>
}