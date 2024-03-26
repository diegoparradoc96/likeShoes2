import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface CurrentSection {
  arrCurrentSection: string[];
}

const initialState: CurrentSection = {
  arrCurrentSection: [],
};

export const currentSectionSlice = createSlice({
  name: "currentSection",
  initialState,
  reducers: {
    setArrCurrentSection: (state, action: PayloadAction<string[]>) => {
      state.arrCurrentSection = action.payload;
    },
  },
});

export const { setArrCurrentSection } = currentSectionSlice.actions;

export default currentSectionSlice.reducer;
