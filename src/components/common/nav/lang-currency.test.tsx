import { render, screen } from '@testing-library/react'
import LanguageCurrency from './lang-currency'
import React from 'react';
import { Provider } from 'react-redux';
import  configureStore  from 'redux-mock-store';
import { useRouter } from 'next-router-mock';

jest.mock('next/router', () => require('next-router-mock'));

describe('LanguageCurrency tests',()=>{

    const initialState = {
    
        lang_currency:{
            lang:'en',
            currency:'USD'
        },
        location: {
            address_components: [],
            geolocation:{},
            value:"",
            location:{
                value:"",
            },

        } 
    }

    const mockStore = configureStore();

    let valueLang = 'en';
    const router = useRouter();
 
    render(
        <Provider store={mockStore(initialState)}>
            <LanguageCurrency
                locale='e'
                label_lang='Language'
                label_currency='Currency'
                btn_save='Save'
                reference={React.createRef<HTMLDivElement>()}
                langToggle={()=>{valueLang ='es'; router.push('/')}}

            />
        </Provider>
    )

    it('buttom save lang currency properly',()=>{

       const button =  screen.getByTestId('button1-component-test');
       expect(button).toHaveTextContent('Save');

    })

    //test failed useRouter next-router-mock properties of null reading 'usecontext'(this is a bug)
    it('click save lang currency should change locale and reload the page',()=>{
        const button =  screen.getByTestId('button1-component-test');
        button.click();
        expect(valueLang).toBe('es');

        expect(router.asPath).toBe('/');
    })
});