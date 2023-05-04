import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import type { RootState } from "../store";
import { getAll, getOne } from "../../services/products";
import { sortArrayDesc } from "../../general-functions";
import { BykeItem } from "../../types";

interface BikeState {
  bikeList: Array<BykeItem>;
  error: boolean;
  loading: boolean;
}

const initialState: BikeState = {
  bikeList: [],
  error: false,
  loading: false
};

export const getBikeList = createAsyncThunk(
  "bike/getAll",
  async () => {
    console.log()
    return []
  }
);


export const BikeSlice = createSlice({
  name: "bike",
  initialState,
  reducers: {},
    
  extraReducers: (builder) => {
    builder.addCase(getBikeList.fulfilled, (state, { payload }) => {
      state.bikeList = payload;
      state.loading = false
      state.error = false
    });
    builder.addCase(getBikeList.pending, (state, { payload }) => {
        state.loading = true
        state.error = false
      });
      builder.addCase(getBikeList.rejected, (state, { payload }) => {
        state.loading = false
        state.error = true
      });
  },
});


export const selectBikeState = (state: RootState) => state.product;

export default BikeSlice.reducer;