import {render, screen } from '@testing-library/react'
import CardInfo from './card-info';

describe('CardInfo tests',()=>{

    render(
        <CardInfo
        
            key={1}
            title='Card Title'
            text='Card Description'
            link='https://www.google.com'
            icon={<div>Icon</div>}

        />
    )

    it('Render title properly',()=>{

       const title =  screen.getByRole('title-card-info');
       expect(title).toHaveTextContent('Card Title');

    })

   

})