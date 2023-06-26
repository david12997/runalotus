import {render, screen} from '@testing-library/react';
import "jest-canvas-mock"
import { Provider } from 'react-redux';
import  configureStore  from 'redux-mock-store';
import Nav from './index';
import { IconBars } from '../../../icons/icons';

jest.mock('next/router', () => require('next-router-mock'));

describe('Nav tests', () => {

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
        
    };
    const mockStore = configureStore();

    render(
        <Provider store={mockStore(initialState)}>
            <Nav
                logo='https://runalotus.com/wp-content/uploads/2021/08/logo.png'
                pages={['Home', 'About', 'Contact', 'Shop']}
                links={['https://runalotus.com/', 'https://runalotus.com/about/', 'https://runalotus.com/contact/', 'https://runalotus.com/shop/']}
                icons={{
                    bars:<IconBars width='50' height='50' fill='red' />,
                    cart:<IconBars width='50' height='50' fill='red' />,
                    dollar:<IconBars width='50' height='50' fill='red' />,
                    language:<IconBars width='50' height='50' fill='red' />,
                    location:<IconBars width='50' height='50' fill='red' />,
                    pay:<IconBars width='50' height='50' fill='red' />,
                    store:<IconBars width='50' height='50' fill='red' />,
                    tracker:<IconBars width='50' height='50' fill='red' />,
                    truck:<IconBars width='50' height='50' fill='red' />,
                    user:<IconBars width='50' height='50' fill='red' />,
                    world:<IconBars width='50' height='50' fill='red' />,
                    colombia:<IconBars width='50' height='50' fill='red' />,
                    rocket:<IconBars width='50' height='50' fill='red' />

                }}
                search={<div>Search</div>}
                name='Runalotus'
                area='nav'
                locale='en'
                location={{
                    label:'Location',
                    address:'Calle 12 # 12-12'
                }}
                locationMap={{
                    title:'Location',
                    placeholder:'Search your location',
                    textButton:'Search'
                }}
                cart={{
                    title:'Cart',
                    empty:{
                        message:'Your cart is empty',
                        btn_text:'Go to shop'
                    }
                }}
                lang_currency={{
                    label_lang:'Language',
                    label_currency:'Currency',
                    btn_save:'Save'
                }}
                    
            />
         </Provider>
    );   

    it('Render nav component properly ', () => {

        const nav = screen.getByTestId('nav-component-test-id');
        const navbarTop = screen.getByTestId('navbar-top-component-test');
        const langCurrency = screen.getByTestId('lang-currency-component-test');
        const location = screen.getByTestId('location-component-test');
        const navigationMobile = screen.getByTestId('navigation-mobile-component-test');
        const navbarBottom = screen.getByTestId('navbar-bottom-component-test');

        expect(nav).toBeInTheDocument();
        expect(navbarTop).toBeInTheDocument();
        expect(langCurrency).toBeInTheDocument();
        expect(location).toBeInTheDocument();
        expect(navigationMobile).toBeInTheDocument();
        expect(navbarBottom).toBeInTheDocument();
    });
});

