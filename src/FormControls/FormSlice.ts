import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import FormDataModel from "../FormControls/FormData.model";
import FormDataStoreModel from "./FormStoreData.model";
import { fetchData, fetchDataById, postData } from "./FormThunk";

const initialState: FormDataStoreModel ={
  data: {
    id: '',
    name: '',
    password: '',
    isMarried: false,
    gender: '',
    biography: '',
  },
  list: [],
  state: 'idle',
};

export const formSlice = createSlice({
  name: 'form',
  initialState: initialState,
  reducers: {
    loadInitial: (state) => {
      state.data = {...state.data,...initialState.data, id: ''};
    },
    updateData: (state, { payload }: PayloadAction<Partial<FormDataModel>>) => {
      state.data = {...state.data, ...payload};
    },
  },
  extraReducers: (builder) => {
    builder.addCase(postData.fulfilled, (state, action) => {
      state.list = action.payload;
      state.data = {...state.data,...initialState.data};
      state.state = 'idle'
    })
    builder.addCase(fetchData.fulfilled, (state, action) => {
      state.list = action.payload;
      state.state = 'idle'
    })
    builder.addCase(fetchDataById.fulfilled, (state, action) => {
      state.data = action.payload;
      state.state = 'idle'
    })
  }
})

export const { loadInitial, updateData } = formSlice.actions;
export default formSlice.reducer;
