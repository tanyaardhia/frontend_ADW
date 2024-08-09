import axios from "axios";
import { fetchUsersStart, fetchUsersSuccess, fetchUsersFailure } from "./userSlice";

export const fetchUsers = (params) => {
  return async (dispatch) => {
    dispatch(fetchUsersStart());
    try {
      const response = await axios.get("https://dummyjson.com/users/search", { params });
      dispatch(fetchUsersSuccess(response.data));
    } catch (error) {
      dispatch(fetchUsersFailure(error.message)); 
    }
  };
};
