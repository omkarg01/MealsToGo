import React from "react";

import {
  createStackNavigator,
  CardStyleInterpolators,
} from "@react-navigation/stack";
import { SuccessScreen as CheckoutSuccessScreen } from "../../features/checkout/screens/checkout-success.screen";
import { ErrorScreen as CheckoutErrorScreen } from "../../features/checkout/screens/checkout-error.screen";
import { CheckoutScreen } from "../../features/checkout/screens/checkout.screen";

const CheckoutStack = createStackNavigator();

export const CheckoutNavigator = ({ route, navigation }) => {
  return (
    <CheckoutStack.Navigator
      headerMode="screen"
      screenOptions={{
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
      }}
    >
      <CheckoutStack.Screen name="Checkout" component={CheckoutScreen} />
      <CheckoutStack.Screen
        name="CheckoutSuccess"
        component={CheckoutSuccessScreen}
      />
      <CheckoutStack.Screen
        name="CheckoutError"
        component={CheckoutErrorScreen}
      />
    </CheckoutStack.Navigator>
  );
};
