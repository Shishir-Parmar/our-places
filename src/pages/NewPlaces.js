import { useHistory } from 'react-router-dom';
import React from 'react';
import NewPlaceForm from '../components/places/NewPlaceForm';

const NewPlaces = () => {
const history = useHistory();

function addPlaceHandler(placeData){
    fetch(
        "https://our-places-2013c-default-rtdb.firebaseio.com/Places.json",
        {
            method: "POST",
            body: JSON.stringify(placeData),
            headers: {
                'Content-Type' : 'application/json',
            },
        }
    ).then(()=> {
        history.replace('/');
    });
}

    return (
        <section>
           <h1>Add new Places</h1>
           <NewPlaceForm onAddPlace={addPlaceHandler}/> 
        </section>
    )
}

export default NewPlaces;
