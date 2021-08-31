module.exports.payRequest = (request, response, stripeClient) => {
  const body = JSON.parse(request.body);
  const { token, amount } = body;
  stripeClient.paymentIntents
    .create({
      amount,
      currency: "INR",
      payment_method_types: ["card"],
      payment_method_data: {
        type: "card",
        card: {
          token,
        },
      },
      confirm: true,
    })
    .then((paymentIntent) => {
      console.log("paymentDone");
      response.json(paymentIntent);
    })
    .catch((e) => {
      console.log(e);
      response.status(400);
      response.send(e);
    });
};
