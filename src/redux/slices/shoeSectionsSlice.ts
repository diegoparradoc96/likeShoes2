import { createSlice, PayloadAction } from "@reduxjs/toolkit";

/* types */
import { IShoeSection } from "../../common/types";

interface ShoeSections {
  arrShoeSections: IShoeSection[];
}

const initialState: ShoeSections = {
  arrShoeSections: [],
};

export const shoeSectionsSlice = createSlice({
  name: "shoeSections",
  initialState,
  reducers: {
    setArrShoeSections: (state, action: PayloadAction<IShoeSection[]>) => {
      state.arrShoeSections = action.payload;
    },
  },
});

export const { setArrShoeSections } = shoeSectionsSlice.actions;

export default shoeSectionsSlice.reducer;
