import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { baseUrl } from '@/assets/urls/Urls';

export const AllProgramsApi = createAsyncThunk(
    "programs/AllProgramsApi",
    async (_, { rejectWithValue }) => {
      try {
        const response = await axios.get(baseUrl);
        return response.data;
      } catch (error) {
        return rejectWithValue(error);
      }
    }
  );