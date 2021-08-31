import camelize from "camelize";
import { host, isMock } from "../utils/env";

import { locations } from "./location.mock";

// export const locationRequest = (searchTerm) => {
//   console.log("i am running");

//   // `${host}/mealstogo-27a97/us-central1/geocode?city=${searchTerm}&mock=${isMock}`
//   return fetch(
//     "http://30afac7ceabb.ngrok.io/mealstogo-27a97/us-central1/geocode?city=Antwerp&mock=true"
//   )
//     .then((res) => {
//       console.log(res);
//       return res.json();
//     })
//     .catch((err) => console.log("ERROR", err));
// };
export const locationRequest = (searchTerm) => {
  return new Promise((resolve, reject) => {
    const locationMock = locations[searchTerm];
    if (!locationMock) {
      reject("not found");
    }
    resolve(locationMock);
  });
};

export const locationTransform = (result) => {
  console.log(result);
  const formattedResponse = camelize(result);
  const { geometry = {} } = formattedResponse.results[0];
  const { lng, lat } = geometry.location;

  return { lng, lat, viewport: geometry.viewport };
};
