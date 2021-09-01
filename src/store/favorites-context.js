import { createContext, useState } from "react";

const FavoritesContext = createContext({
    favorites: [],
    totalFavorites: 0,
    addFavorite: (favoritePlace)=>{},
    removeFavorite: (placeId)=>{},
    itemIsFavorite: (placeId)=>{}
});

export function FavoritesContextProvider(props) {
    const [userFavorites, setUserFavorities] = useState([]);


    function removeFavoriteHandler(placeId){
        setUserFavorities(prevUserFavorites=>{
            return prevUserFavorites.filter(place=>place.id!==placeId)
        });
    }

    function itemIsFavoriteHandler(placeId){
        return userFavorites.some(place=>place.id===placeId)
    }

    function addFavoriteHandler(favoritePlace){
        setUserFavorities((prevUserFavorites)=>{
            return prevUserFavorites.concat(favoritePlace);
        })
    }


    const context={
        favorites: userFavorites,
        totalFavorites: userFavorites.length,
        addFavorite: addFavoriteHandler,
        removeFavorite: removeFavoriteHandler,
        itemIsFavorite: itemIsFavoriteHandler,
    };



    return( <FavoritesContext.Provider value={context}>
       {props.children}
    </FavoritesContext.Provider>
    );
}

export default FavoritesContext;