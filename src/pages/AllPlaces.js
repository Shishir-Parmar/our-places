import React from 'react';
import { useState, useEffect } from 'react';
import PlaceList from "../components/places/PlaceList";


const AllPlaces = () => {
  const [isLoading, setIsLoading]= useState(true);
  const [loadedPlaces, setLoadedPlaces] = useState([]);

  useEffect(() => {
    fetch(
      "https://our-places-2013c-default-rtdb.firebaseio.com/Places.json"
      )
        .then(Response=>{
          return Response.json();
      })
         .then(data =>{
           const places =[];

           for(const key in data){
             const place ={
               id: key,
               ...data[key]
             };
             places.push(place);
           }

          setIsLoading(false);
          setLoadedPlaces(places);
      });
  
  }, []);


    if(isLoading){
      return <section>
        <p>Loading...</p>
      </section>
    }


    return (
        <section>
            <h1>All Places</h1>
            <PlaceList places={loadedPlaces}/>
        </section>
    )
}

export default AllPlaces;
