import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import FormDataModel from "../FormControls/FormData.model";
import FormDataStoreModel from "./FormStoreData.model";
import { fetchData } from "./FormThunk";

const initialState: FormDataStoreModel ={
  value: {
    name: '',
    password: '',
    isMarried: false,
    gender: '',
    biography: '',
  },
  state: 'idle',
};

export const formSlice = createSlice({
  name: 'form',
  initialState: initialState,
  reducers: {
    loadInitial: (state) => {
      state.value = initialState.value;
    },
    updateData: (state, { payload }: PayloadAction<Partial<FormDataModel>>) => {
      state.value = {...state.value, ...payload};
    }
  },
  extraReducers: (builder) => {
    builder.addCase(fetchData.pending, (state, action) => {
      state.state = 'loading'
    })
    builder.addCase(fetchData.fulfilled, (state, action) => {
      state.value = action.payload;
      state.state = 'idle'
    })
  }
})

export const { loadInitial, updateData } = formSlice.actions;
export default formSlice.reducer;
