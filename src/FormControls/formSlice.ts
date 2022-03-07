import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import FormDataModel from "../FormControls/FormData.model";

const  initialState: FormDataModel ={
    name: '',
    password: '',
    isMarried: false,
    gender: '',
    biography: '',
}

export const formSlice = createSlice({
  name: 'form',
  initialState: {value :initialState },
  reducers: {
    loadInitial: (state) => {
      state.value = initialState;
    },
    updateData: (state, { payload }: PayloadAction<Partial<FormDataModel>>) => {
      state.value = {...state.value, ...payload};
    }
  },
})

export const { loadInitial, updateData } = formSlice.actions;

export default formSlice.reducer;
