import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import type { RootState } from "../store";
import { BikeItem } from "../../types";

interface BikeState {
  bikeList: Array<BikeItem>;
  error: boolean;
  loading: boolean;
}

const initialState: BikeState = {
  bikeList: [],
  error: false,
  loading: false,
};

export const getBikeList = createAsyncThunk("bike/getAll", async () => {
  const req = await fetch("http://localhost:3000/bikes");
  const data = req.json();
  return data;
});

export const BikeSlice = createSlice({
  name: "bike",
  initialState,
  reducers: {},

  extraReducers: (builder) => {
    builder.addCase(getBikeList.fulfilled, (state, { payload }) => {
      state.bikeList = payload;
      state.loading = false;
      state.error = false;
    });
    builder.addCase(getBikeList.pending, (state, { payload }) => {
      state.loading = true;
      state.error = false;
    });
    builder.addCase(getBikeList.rejected, (state, { payload }) => {
      state.loading = false;
      state.error = true;
    });
  },
});

export const selectBikeState = (state: RootState) => state.bike;

export default BikeSlice.reducer;
