import React from 'react';
import './card.css';
const Card = (props) => (
    <div className="card-container">
        <img
        alt='monstar'
        src={`https://robohash.org/${props.monstar.id}?set=set2`}
        />
        <h3>{props.monstar.name}</h3>
<p>{props.monstar.email}</p>
    </div>
)
export default Card;