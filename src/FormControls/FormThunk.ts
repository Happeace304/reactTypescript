import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import FormDataModel from "./FormData.model";

export const postData = createAsyncThunk(
  'form/PostData',
  async (data: FormDataModel) => {
    const response = await (
      data.id ?
        axios.put(`/api/data`, data):
        axios.post(`/api/data`, data)
    );

    return response.data;
  }
)

export const fetchDataById = createAsyncThunk(
  'form/FetchDataById',
  async (id: string) => {
    const response = await axios.get(`/api/data/${id}`);

    return response.data
  }
)
export const fetchData = createAsyncThunk(
  'form/FetchData',
  async () => {
    const response = await axios.get('/api/data');

    return response.data
  }
)
