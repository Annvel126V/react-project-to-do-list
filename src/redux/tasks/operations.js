import { createAsyncThunk } from "@reduxjs/toolkit";
import { toDoList } from "../auth/operations";

export const fetchTasks = createAsyncThunk(
  "tasks/fetchAll",
  async (_, thunkAPI) => {
    try {
      const { data } = await toDoList.get("/tasks");
      return data;
    } catch (err) {
      return thunkAPI.rejectWithValue(err.message);
    }
  }
);

export const addTask = createAsyncThunk(
  "tasks/addTask",
  async (body, thunkAPI) => {
    try {
      const { data } = await toDoList.post("/tasks", body);
      return data;
    } catch (err) {
      return thunkAPI.rejectWithValue(err.message);
    }
  }
);

export const deleteTask = createAsyncThunk(
  "tasks/deleteTask",
  async (id, thankAPI) => {
    try {
      const { data } = await toDoList.delete(`/tasks/${id}`);
      return data.id;
    } catch (err) {
      return thankAPI.rejectWithValue(err.message);
    }
  }
);

export const updateTask = createAsyncThunk("task/update", async (dispathc) => {
  try {
    const response = await toDoList.patch(`/tasks/${task.id}`, task);
    dispathc({ type: "task/update", payload: response.data });
  } catch (err) {
    return thankAPI.rejectWithValue(err.message);
  }
});
