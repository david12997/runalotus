
import { NextPage } from "next";
import Footer from "../../components/common/footer";

export const WidgetFooter:NextPage = ()=>{


    const options1:string[] =[
       "Rutas turísticas",
       "Playa y mar",
       "Paramos y nevados",
       "Selvas y bosques",
       "Rios y lagunas",
       "Jarras",
       "Joyeria",
       "Ceramica",
       "Tejidos"
    ];
    
    const options2:string[] =[
        "Servicios turisticos",
        "Tiendas oficiales",
        "team@runalotus.com",
        "Cra 10c # 20-10",
        "Bogotá Colombia",
    ];
    
    const options3:string[] =[
       "Términos y condiciones",
       "Tratamiento de datos",
       "Envíos y devoluciones",
       "Políticas de turísmo",
    ];
     
    return<>

        <Footer
            area="footer"
            title1="Categorias"
            title2="Runalotus"
            title3="Servicio al cliente"
            optionsTitle1={options1}
            optionsTitle2={options2}
            optionsTitle3={options3}
            img="/assets/img/logos-runalotus.png"
            altImg="Logo runalotus"
        
        />
    </>
}