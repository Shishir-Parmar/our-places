import {Link} from "react-router-dom";
import React from 'react';
import classes from "./MainNavigation.module.css";
import { useContext } from "react";
import FavoritesContext from "../../store/favorites-context";

const MainNavigation = () => {
    const favoritesCtx= useContext(FavoritesContext);
    return (
    <header className={classes.header}>
        <div className={classes.logo}>Our Places</div>
            <nav>
            <ul>
                <li> 
                    <Link to="/">All Places</Link>
                </li>
                <li> 
                    <Link to="/newPlaces">Add New Places</Link>
                </li>
                <li> 
                    <Link to="/favorites">
                        My Favorites
                        <span className={classes.badge}>{favoritesCtx.totalFavorites}</span>
                        
                        </Link>
                </li>
            </ul>
            </nav>
        
        
    </header>
    )
}

export default MainNavigation
