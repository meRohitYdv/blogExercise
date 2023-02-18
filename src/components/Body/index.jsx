import Card from './Card';
import * as React from 'react';
import cardsData from './cardsData';
import './index.css';

export default function Body(){
    let index = 0;
    return (
        <div className='Body'>
            {
                cardsData().map((element)=> (
                    <Card key={index++} data={element} />
                ))
            }
        </div>
    );
};