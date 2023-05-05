import { ReactNode } from "react";

import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

export type StoreProviderProps = {
  children: ReactNode;
};
export enum bikeType {
  normal,
  electrical,
  old,
}

export type BikeItem = {
  id: string;
  name: string;
  picture: string;
  type: "normal";
};

export interface BikeListProps {
  list: Array<BikeItem>;
}
