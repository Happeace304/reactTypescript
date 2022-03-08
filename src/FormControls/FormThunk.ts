import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchData = createAsyncThunk(
  'form/FetchData',
  async () => {
    const response = await axios.get('/api/data');

    return response.data
  }
)
