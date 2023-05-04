import { ReactNode } from "react";

export type StoreProviderProps = {
    children: ReactNode;
  };

export type BykeItem = {
    id: string;
    name: string;
    picture: string;
  };