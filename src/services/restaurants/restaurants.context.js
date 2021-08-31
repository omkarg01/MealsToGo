import React, { useState, useEffect, createContext, useContext } from "react";
import { LocationContext } from "../location/location.context";
import {
  restaurantsRequest,
  restaurantsTransform,
} from "./restaurants.service";
export const RestaurantsContext = createContext();

export const RestaurantContextProvider = ({ children }) => {
  const [restaurants, setRestaurants] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const { location } = useContext(LocationContext);

  const retrieveRestaurants = (loc) => {
    setIsLoading(true);
    // console.log(
    //   "restaurants.context this loc is used for get restaurants list",
    //   loc
    // );
    setRestaurants([]);

    restaurantsRequest(loc)
      .then(restaurantsTransform)
      .then((results) => {
        setError(null);
        setIsLoading(false);
        setRestaurants(results);
        // console.log("restaurants.context", results);
      })
      .catch((err) => {
        setRestaurants([]);
        setIsLoading(false);
        setError(err);
      });
  };

  useEffect(() => {
    if (location) {
      // console.log(
      //   "restaurants.context this object will be converted into str",
      //   location
      // );
      const locationString = `${location.lat},${location.lng}`;
      retrieveRestaurants(locationString);
    }
  }, [location]);

  return (
    <RestaurantsContext.Provider value={{ restaurants, isLoading, error }}>
      {children}
    </RestaurantsContext.Provider>
  );
};
