import { render, screen } from '@testing-library/react'
import Button1 from './button-1';


describe('Button1 tests',()=>{

    render(
        <Button1
            text='Click me button component'
            minHeight='50px'
            minWidth='200px'
        />
    )

    it('Render text button',()=>{

       const button =  screen.getByTestId('button-1');
       expect(button).toHaveTextContent('Click me button component');

    })


})