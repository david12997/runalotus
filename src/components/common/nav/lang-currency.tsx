import React from "react";
import styled from "styled-components";

import { theme } from "../../../../config";
import { IconTimesClose } from "../../../icons/icons";
import Select from "react-select";
import Button1 from "./../button-1";
import {  useDispatch } from "react-redux";
import { AppDispatch } from "../../../store";
import { setLangCurrencyGlobalState } from "../../../store/lang-currency";
import { useRouter } from "next/router";


const StyleLanguageCurrency = styled.div`

    & > .Language_change{
        position: fixed;
        z-index: 9999999;
        width: 100vw;
        height: 100vh;
        background: rgba(0,0,0,0.3);
        display:none;
        justify-content:center;
        align-items: center;

        & > .container_languages{
            width: 90%;
            height:430px;
            background: ${theme.colors.white};
            border-radius: 10px;

            @media(min-width:800px){
                width: 50%;
                height:460px;
                border-radius: 20px;
            }

            & > .close_language_change{

                width:calc(96% - 10px);
                height: 30px;
                display:flex;
                justify-content: flex-end;
                align-items: center;
                padding:10px;
                cursor:pointer;

                @media(min-width:800px){
                    width:calc(97% - 10px);
                    height: 40px;
                }

            }

            & > .container_options_language_money{
                width: 80%;
                margin-left: 10%;
                height:calc(100%  - 50px);
               

                @media(min-width:800px){
                    width: 70%;
                    margin-left: 15%;
                    height:calc(100%  - 70px);
                }

            }

            & > .container_options_language_money > .option_language, .option_money{
                max-height: 70px;
                padding-bottom: 25px;
                padding-top: 25px;
                @media(min-width:800px){
                    padding-bottom: 30px;
                    padding-top: 30px;
                    max-height: 80px;
                }
            }



            & > .container_options_language_money  label{
                font-size: 18px;
                font-weight: 800;
            }
        }
        
    }


`;

type PropsLanguageCurrency = {
    reference:React.RefObject<HTMLDivElement>,
    langToggle:(reference:React.RefObject<HTMLDivElement>,displayShow:string)=>void,
    locale:string,
    label_lang:string,
    label_currency:string,
    btn_save:string
}

export default function LanguageCurrency(props:PropsLanguageCurrency):JSX.Element{

    const selectDataLanguage =[
        {
            value:'es', 
            label:'Español',
            icon:theme.data_domain+'/uploads/flag_espain_da52e05ff5.svg?updated_at=2023-05-20T20:03:18.520Z'
        },
        {
            value:'en', 
            label:'English',
            icon:theme.data_domain+'/uploads/flag_united_states_8520b129dd.svg?updated_at=2023-05-20T20:03:18.405Z'
        }
    ];

    const selectDataMoney =[
        {
            value:'USD',
            label:'USD',
            country:'United States'
        },
        {
            value:'EUR',
            label:'EUR',
            country:'Europe'
        },
        {
            value:'GBP',
            label:'GBP',
            country:'United Kingdom'
        },
        {
            value:'COP',
            label:'COP',
            country:'Colombia'
        },
        {
            value:'MXN',
            label:'MXN',
            country:'Mexico'
        },
        {
            value:'ARS',
            label:'ARS',
            country:'Argentina'
        },
        {
            value:'BRL',
            label:'BRL',
            country:'Brazil'
        }

    ]

    const [stateLocale, setStatelocale] = React.useState(props.locale);
    const [stateCurrency, setStateCurrency] = React.useState(stateLocale === 'es' ? 'COP' : 'USD');

    const dispatch = useDispatch<AppDispatch>();
    const router = useRouter();
    const {pathname, asPath, query} = router; 

    React.useEffect(() => {

        dispatch(setLangCurrencyGlobalState({
            lang:stateLocale,
            currency:stateCurrency
        }));


    },[]);

    return<StyleLanguageCurrency data-testid="lang-currency-component-test">
        <div ref={props.reference}  className="Language_change">

            <div className="container_languages">

                <div className="close_language_change" onClick={()=>props.langToggle(props.reference,'flex')}>
                    <IconTimesClose width="24" height="24" fill={theme.colors.primaryA} />
                </div>

                <div className="container_options_language_money">
                  
                  <div className="option_language">
                        <label>{props.label_lang}</label>
                        <Select
                                placeholder="Select language..."
                                id="select-language"
                                instanceId={"select-language"}
                                options={selectDataLanguage}
                                formatOptionLabel={(e)=>(
                                    <div style={{display:'flex',alignItems:'center'}}>
                                        <img loading="lazy" style={{width:"30px", marginRight:'10px',marginLeft:'5px'}} src={e.icon}/> {e.label}
                                    </div>
                                )}
                                value={ stateLocale === 'es' ? selectDataLanguage[0] : selectDataLanguage[1]}
                                onChange={(e)=>{
                                    stateLocale === 'es' ? setStatelocale('en') : setStatelocale('es');
                                    dispatch(setLangCurrencyGlobalState({
                                        lang:e?.value,
                                        currency:stateCurrency
                                    }));
                                }}
                            />
                    </div>
                
                    <hr style={{borderColor:"rgb(255 255 255 / 32%)"}}/>

                    <div className="option_money">
                        <label>{props.label_currency}</label>
                        <Select
                            placeholder="Select currency..."
                            menuShouldScrollIntoView={false}//this property is for fix scroll all page and allow to scroll only select
                            menuPosition="fixed" //this property is for fix scroll all page and allow to scroll only select
                            id="select-money"
                            instanceId={"select-money"}
                            options={selectDataMoney}
                            formatOptionLabel={(e)=>(
                                <div style={{display:'flex',alignItems:'center'}}>
                                    <span style={{marginRight:'10px',marginLeft:'5px'}}>{e.label}</span> {e.country}
                                </div>
                            )}
                            value={selectDataMoney.filter((e)=>e.value === stateCurrency)}
                            onChange={(e)=>{

                                if(e !== null && e.value !== undefined){
                                    setStateCurrency(e.value);
                                    dispatch(setLangCurrencyGlobalState({
                                        lang:stateLocale,
                                        currency:e.value
                                    }));
                                }

                            }}
                        
                        
                        />
                    </div>

                    <Button1
                       
                        minHeight="60px"
                        minWidth="100%"
                        text={props.btn_save}
                        click={()=>{
                            props.langToggle(props.reference,'flex');
                            router.push({pathname,query}, asPath,{locale:stateLocale})
                        }}
                    />
                    

                </div>
            </div>
        </div>


    </StyleLanguageCurrency>
}