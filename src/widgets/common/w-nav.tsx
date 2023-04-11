import { NextPage } from "next";
import Nav, { TypeIconsNav } from "../../components/common/nav";
import { IconBars, IconCart, IconColombia, IconDollar, IconLanguage, IconLocation, IconLogin, IconPay, IconStore, IconTracker, IconTruck, IconUser, Iconworld } from "../../icons/icons";
import { theme } from "../../../config";
import Search from "../../components/common/search";



export const WidgetNav:NextPage = ()=>{

    const iconsNav: TypeIconsNav = {

        bars: <IconBars width="21" height="21" fill={ theme.colors.white} />,
        cart: <IconCart width="25" height="25" fill={theme.colors.white} />,
        dollar: <IconDollar width="19" height="19" fill={theme.colors.white} />,
        language: <IconLanguage width="23" height="23" fill={theme.colors.white} />,
        location: <IconLocation width="16" height="16" fill={theme.colors.white} />,
        pay: <IconPay width="20" height="20" fill={theme.colors.white} />,
        store: <IconStore width="20" height="20" fill={theme.colors.white} />,
        tracker: <IconTracker width="20" height="20" fill={theme.colors.white} />,
        truck: <IconTruck width="20" height="20" fill={theme.colors.white} />,
        user: <IconUser width="20" height="20" fill={theme.colors.white} />,
        world: <Iconworld width="20" height="20" fill={theme.colors.white} />,
        colombia:<IconColombia width="28" height="18" />,
        rocket:<IconLogin width="20" height="20" fill={theme.colors.white} />
      };
    
      const Pages: string[] = [
        'Inicio',
        'Turismo',
        'Tienda',
        'Rastreador',
        'Ingresar'
      ];
    
    return<>
    
        <Nav
            area="nav"
            name="Runalotus"
            logo="/assets/img/logos-runalotus.png"
            pages={Pages}
            icons={iconsNav}
            search={<Search />}
        />

    </>
}