import { ReactNode } from "react";

export type StoreProviderProps = {
    children: ReactNode;
  };
export enum bikeType {normal, electrical, old}

export type BikeItem = {
    id: string;
    name: string;
    picture: string;
    type: "normal"
  };