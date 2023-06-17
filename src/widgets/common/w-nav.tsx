import { NextPage } from "next";
import Nav from "../../components/common/nav";
import { IconBars, IconCart, IconColombia, IconDollar, IconLanguage, IconLocation, IconLogin, IconPay, IconStore, IconTracker, IconTruck, IconUser, Iconworld } from "../../icons/icons";
import { theme } from "../../../config";
import Search from "../../components/common/search";


type PropsWidgetNav = {

  data:any
}

export const WidgetNav:NextPage<PropsWidgetNav> = (props)=>{

  const logoNav:string = props.data[0].components.data[0].attributes.component.brand.logo;
  const nameNav:string = props.data[0].components.data[0].attributes.component.brand.name;
  const pagesNav:string[] = props.data[0].components.data[0].attributes.component.pages;
  const linksNav:string[] = props.data[0].components.data[0].attributes.component.link;
  const placeholderSearch:string = props.data[0].components.data[0].attributes.component.search;
  const locale = props.data[1].locale;
  const location={
    label:props.data[0].components.data[0].attributes.component.location.label as string,
    address:props.data[0].components.data[0].attributes.component.location.address as string
  };
  const locationMap={
    title:props.data[0].components.data[0].attributes.component.location.title as string,
    placeholder:props.data[0].components.data[0].attributes.component.location.placeholder as string,
    textButton:props.data[0].components.data[0].attributes.component.location.button_save as string
  };
  const cart ={
    title:props.data[0].components.data[0].attributes.component.cart.title as string,
    empty:{
      message:props.data[0].components.data[0].attributes.component.cart.empty.message as string,
      btn_text:props.data[0].components.data[0].attributes.component.cart.empty.btn_text as string
    }
  };
  const lang_currency={
    label_lang:props.data[0].components.data[0].attributes.component.locale.lang.label as string,
    label_currency:props.data[0].components.data[0].attributes.component.locale.currency.label as string,
    btn_save:props.data[0].components.data[0].attributes.component.locale.btn_save as string
  }

  


  const iconsNav = {

    bars: <IconBars width="21" height="21" fill={ theme.colors.white} />,
    cart: <IconCart width="25" height="25" fill={theme.colors.white} />,
    dollar: <IconDollar width="19" height="19" fill={theme.colors.white} />,
    language: <IconLanguage width="23" height="23" fill={theme.colors.white} />,
    location: <IconLocation width="15" height="15" fill={theme.colors.white} />,
    pay: <IconPay width="20" height="20" fill={theme.colors.white} />,
    store: <IconStore width="20" height="20" fill={theme.colors.white} />,
    tracker: <IconTracker width="20" height="20" fill={theme.colors.white} />,
    truck: <IconTruck width="20" height="20" fill={theme.colors.white} />,
    user: <IconUser width="20" height="20" fill={theme.colors.white} />,
    world: <Iconworld width="20" height="20" fill={theme.colors.white} />,
    colombia:<IconColombia width="28" height="18" />,
    rocket:<IconLogin width="20" height="20" fill={theme.colors.white} />

  };

    
  return<>
  
      <Nav
          area="nav"
          name={nameNav}
          logo={theme.data_domain+logoNav}
          pages={pagesNav}
          links={linksNav}
          icons={iconsNav}
          search={<Search placeholder={placeholderSearch} />}
          locale={locale}
          location={location}
          locationMap={locationMap}
          cart={cart}
          lang_currency={lang_currency}
      />

  </>
}