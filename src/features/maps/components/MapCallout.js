import React from "react";
import { CompactRestaurnatInfo } from "../../../components/maps/CompactRestaurnatInfo";

export const MapCallout = ({ restaurant }) => {
  return <CompactRestaurnatInfo restaurant={restaurant} isMap />;
};
