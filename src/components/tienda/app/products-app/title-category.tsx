import React from "react";
import styled from "styled-components";
import { theme } from "../../../../../config";
import { IconCategories } from "../../../../icons/icons";
import Select from "react-select";

const StyleTitleCategory = styled.div`

   & > .title-category{
        position: relative;
        width: 100%;
        height: 60px;
        margin-top: 69px;
        display: flex;
        justify-content: flex-start;
        align-items: center;

        @media(min-width:800px){

            width: 80%;
            margin-left: 20%;
            margin-top: 20px;
        }

        & > #categories-select{
            width:75%;
            margin-left: 5%;
            @media(min-width:800px){
                width: 56%;
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
    categories:any
}

export default function TitleCategory(props:PropsTitleCategory):JSX.Element {

    const catgeoriesSelect:any[] = [];

    props.categories.data.forEach((category:any,index:number)=>{
        catgeoriesSelect.push({

            value:category.attributes.name,
            label:category.attributes.name,
            icon:theme.data_domain+ category.attributes.media.data[0].attributes.url

        })

    });

    const customStylesSelect = {

        control: (base:any) => ({
          ...base,
          height: 48,
          minHeight: 48,
          fontSize:19,
          fontWeight:300
        })
    };
      
    
    return<StyleTitleCategory>
        
        <div className="title-category">
            
            <span className="icon">
                <IconCategories width="40" height="40" fill={theme.colors.primaryA} />
            </span>

            <Select
                id="categories-select"
                placeholder="Categorias"
                options={catgeoriesSelect}
                formatOptionLabel={(e)=>(
                    <div style={{display:'flex',alignItems:'center'}}>
                        <img style={{width:"30px", marginRight:'10px',marginLeft:'5px'}} src={e.icon}/> {e.label}
                    </div>
                )}
                styles={customStylesSelect}
            />
        </div>
    </StyleTitleCategory>
}