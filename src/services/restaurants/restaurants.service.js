import camelize from "camelize";
import { host, isMock } from "../utils/env";
import { mocks, mockImages } from "./mock";

export const restaurantsRequest = (location = "37.7749295,-122.4194155") => {
  return new Promise((resolve, reject) => {
    const mock = mocks[location];
    if (!mock) {
      reject("not found");
    }
    resolve(mock);
  });
};

// export const restaurantsRequest = (location) => {
//   `${host}/mealstogo-27a97/us-central1/placesNearby?location=${location}&mock=${isMock}`;
//   return fetch(
//     `http://30afac7ceabb.ngrok.io/mealstogo-27a97/us-central1/placesNearby?location=${location}&mock=${isMock}`
//   ).then((res) => {
//     return res.json();
//   });
// };

export const restaurantsTransform = ({ results = [] }) => {
  console.log(results);
  const mappedResults = results.map((restaurant) => {
    return {
      ...restaurant,
      address: restaurant.vicinity,
      isOpenNow: restaurant.opening_hours && restaurant.opening_hours.open_now,
      isClosedTemporarily: restaurant.business_status === "CLOSED_TEMPORARILY",
      photos: [mockImages[Math.ceil(Math.random() * (mockImages.length - 1))]],
    };
  });
  return camelize(mappedResults);
};
