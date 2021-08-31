import React from "react";
import { Text } from "react-native";
import styled from "styled-components";
import { Spacer } from "../spacer/spacer.component";
import { ScrollView, TouchableOpacity } from "react-native";

import { CompactRestaurnatInfo } from "../maps/CompactRestaurnatInfo";

const FavouritesWrapper = styled.View`
  padding: 10px;
`;

export const FavouritesBar = ({ restaurants, onNavigate }) => {
  if (!restaurants.length) {
    return null;
  }

  return (
    <FavouritesWrapper>
      <Spacer variant="left.large">
        <Text variant="caption">Favourites</Text>
      </Spacer>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {restaurants.map((restaurant, index) => (
          <Spacer key={restaurant.name + index} position="left" size="medium">
            <TouchableOpacity
              onPress={() =>
                onNavigate("RestaurantDetail", {
                  restaurant,
                })
              }
            >
              <CompactRestaurnatInfo
                key={restaurant.name + index}
                restaurant={restaurant}
              />
            </TouchableOpacity>
          </Spacer>
        ))}
      </ScrollView>
    </FavouritesWrapper>
  );
};
