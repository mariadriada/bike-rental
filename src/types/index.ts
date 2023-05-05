import { ReactNode } from "react";

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
  redirect: (id: string) => void;
};

export interface BikeListProps {
  list: Array<BikeItem>;
}

export type Info = {
  title: string;
  content: string;
};

export type AlertDialogProps = {
  open: boolean;
  setOpen: (state: boolean) => void;
  title: string;
  content: string;
  handleAgree: () => void;
};

export type FormData = {
  username: string;
  email: string;
  phone: string;
  dateStart: string;
  dateEnd: string;
};

export type FormBikeProps = {
  handleSubmit: (data: FormData) => void;
};
