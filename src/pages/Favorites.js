import React from 'react';
import { useContext } from 'react';
import FavoritesContext from '../store/favorites-context';
import PlaceList from '../components/places/PlaceList';

const Favorites = () => {
    const favoritesCtx= useContext(FavoritesContext);

    let content;
    if(favoritesCtx.totalFavorites===0){
        content= <p>You got no favorites yet.</p>
    }else{
        content = <PlaceList places={favoritesCtx.favorites}/>
    }

    return (
        <section>
           <h1>My Favorites</h1> 
           {content}
        </section>
    )
}

export default Favorites;
