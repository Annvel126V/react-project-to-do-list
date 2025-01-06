import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const toDoList = axios.create({
  baseURL: "http://connection-api.global",
});

const setAuthHeader = (token) => {
  toDoList.defaults.headers.common.Authorization = `Bearer ${token}`;
};

export const register = createAsyncThunk(
  "register",
  async (credentials, thankAPI) => {
    try {
      const { data } = await toDoList.post("users/signup", credentials);
      setAuthHeader(data.token);
      return data;
    } catch (err) {
      return thankAPI.rejectWithValue(err.message);
    }
  }
);

export const login = createAsyncThunk(
  "login",
  async (credentials, thankAPI) => {
    try {
      const { data } = await toDoList.post("users/login", credentials);
      setAuthHeader(data.token);
      return data;
    } catch (err) {
      return thankAPI.rejectWithValue(err.message);
    }
  }
);
