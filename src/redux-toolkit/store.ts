import { configureStore, Store } from "@reduxjs/toolkit";

import BikeReducer, { selectBikeState, getBikeList } from "./slices/bikeSlice";
import { useGlobalDispatch, useGlobalSelector } from "./hooks";

export const store: Store = configureStore({
  reducer: {
    bike: BikeReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useGlobalStore = () => {
  const bikeSelect = useGlobalSelector(selectBikeState);

  const dispatch = useGlobalDispatch();
  return {
    bikeSelect,
    getBikeList: () => dispatch(getBikeList()),
  };
};
