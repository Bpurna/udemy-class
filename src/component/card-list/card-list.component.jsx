import React from 'react';
import './card-list.css';
import Card from '../card/card';

const CardList = (provps) => {
    return <div className='card-list'>
        {
            props.monstars.map(monstar => (
                <Card key={monstar.id} monstar={monstar} />
            ))
        }
    </div>
}
export default CardList;