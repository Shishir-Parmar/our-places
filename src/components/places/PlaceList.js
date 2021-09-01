import React from 'react'
import PlaceContent from './PlaceContent';
import classes  from './PlaceContent.module.css';

const PlaceList = (props) => {
    return (
       <ul className={classes.list}>
           {props.places.map(places=><PlaceContent 
           key={places.id} 
           id={places.id} 
           image={places.image} 
           title={places.title}
           address={places.address}
           description={places.description}
           />)}
       </ul>
    )
}

export default PlaceList;
