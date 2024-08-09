import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { fetchUsersStart, fetchUsersSuccess, fetchUsersFailure } from "./userSlice";

export const fetchUsers = createAsyncThunk(
  'users/fetchUsers',
  async (params, { dispatch }) => {
    dispatch(fetchUsersStart());
    try {
      const response = await axios.get("https://dummyjson.com/users/search", { params });
      dispatch(fetchUsersSuccess(response.data));
    } catch (error) {
      dispatch(fetchUsersFailure(error.message));
    }
  }
);