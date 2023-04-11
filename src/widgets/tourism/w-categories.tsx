import { NextPage } from "next";
import CardCategories from "../../components/turismo/card-categories";
import CategoriesTourism from "../../components/turismo/categories";



export const WidgetCategoriesTourism:NextPage = ()=>{

    const cardsCategoriesTourism = [
        <CardCategories title="Playa y Mar" img="/assets/img/turismo/categories/playa-y-mar.png"/>,
        <CardCategories title="Paramos y  Nevados" img="/assets/img/turismo/categories/paramos-y-nevados.png"/>,
        <CardCategories title="Selvas y Bosques" img="/assets/img/turismo/categories/selvas-bosques.png"/>,
        <CardCategories title="Paisajes montañosos" img="/assets/img/turismo/categories/paisajes-montañosos.png"/>,
        <CardCategories title="Rios y Lagunas" img="/assets/img/turismo/categories/rios-y-lagunas.png"/>,
        <CardCategories title="Desiertos y cañones" img="/assets/img/turismo/categories/desiertos.png"/>
      ];
    

    return<>
        <CategoriesTourism
            cards={cardsCategoriesTourism}
            area="categories"
        />
    
    </>
}