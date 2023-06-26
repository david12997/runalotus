import React from "react";
import styled from "styled-components";


interface PropsBreadCrumbs{

}

const StyleBreadCrumbs = styled.div<PropsBreadCrumbs>`


    width:100%;
    grid-area: navigation;
    border:1px solid black;
    position: relative;



`;

export default function BreadCrumbs():JSX.Element{

    return<StyleBreadCrumbs data-testid="breadcrumb-component-test ">

    
    </StyleBreadCrumbs>

}