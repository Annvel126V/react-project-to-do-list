import { authSlice } from "./auth/slice";
import taskReducer from "./tasks/slice";
import filtersReducer from "./filters/slice";
import { configureStore } from "@reduxjs/toolkit";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";

const authPersistConfig = {
  key: "root-auth",
  storage,
  whitelist: ["token"],
};

export const store = configureStore({
  reducer: {
    tasks: taskReducer,
    filters: filtersReducer,
    auth: persistReducer(authPersistConfig, authSlice),
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});
export const persistor = persistStore(store);
