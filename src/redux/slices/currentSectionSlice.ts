import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ObjCurrentSection } from "@/common/types";

interface CurrentSection {
  objCurrentSection: ObjCurrentSection;
}

const initialState: CurrentSection = {
  objCurrentSection: {
    shoeSectionId: 1, // para que traiga mujeres por defecto
    shoeTypeId: 0, // 0 traje todo
    currentSection: [],
  },
};

export const currentSectionSlice = createSlice({
  name: "currentSection",
  initialState,
  reducers: {
    setObjCurrentSection: (state, action: PayloadAction<ObjCurrentSection>) => {
      state.objCurrentSection = action.payload;
    },
  },
});

export const { setObjCurrentSection } = currentSectionSlice.actions;

export default currentSectionSlice.reducer;
