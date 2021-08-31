import createStripe from "stripe-client";
import { host } from "../utils/env";

const stripe = createStripe(
  "pk_test_51JCOoESJtAOGSo1GjUJm9x0hW6UbSFo1Rhm1qH8QkXfm6egZZIG6hwzcaA6nwPLiUqK1uzSC0Z6zXbRIIk2L682O00p7Hz4FNn"
);

export const cardTokenRequest = (card) => stripe.createToken({ card });

export const payRequest = (token, amount, name) => {
  return fetch(`${host}/mealstogo-27a97/us-central1/pay`, {
    body: JSON.stringify({
      token,
      name,
      amount,
    }),
    method: "POST",
  }).then((res) => {
    console.log(res);
    console.log(res.status);
    if (res.status > 200) {
      return Promise.reject("something went wrong processing your payment");
    }
    return res.json();
  });
};
