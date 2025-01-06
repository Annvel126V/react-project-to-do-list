import { fetchTasks, addTask, deleteTask } from "./operations";
import { createSlice, isAnyOf } from "@reduxjs/toolkit";

const taskSlice = createSlice({
  name: "tasks",
  initialState: {
    items: [],
    loading: false,
    error: null,
  },
  extraReducers: (builder) => {
    builder

      .addCase(fetchTasks.fulfilled, (state, action) => {
        state.items = action.payload;
      })

      .addCase(addTask.fulfilled, (state, action) => {
        state.items.push(action.payload);
      })

      .addCase(deleteTask.fulfilled, (state, action) => {
        state.items = state.items.filter((item) => item.id !== action.payload);
      })
      .addMatcher(
        isAnyOf(fetchTasks.pending, addTask.pending, deleteTask.pending),
        (state) => {
          state.loading = true;
        }
      )

      .addMatcher(
        isAnyOf(fetchTasks.fulfilled, addTask.fulfilled, deleteTask.fulfilled),
        (state) => {
          state.loading = false;
        }
      )

      .addMatcher(
        isAnyOf(fetchTasks.rejected, addTask.rejected, deleteTask.rejected),
        (state, action) => {
          state.error = action.payload;
          state.loading = false;
        }
      );
  },
});

export default taskSlice.reducer;
