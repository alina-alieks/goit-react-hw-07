import { configureStore } from "@reduxjs/toolkit";
import contactsSlice from "./contactsSlice";
import filtersSlice from "./filtersSlice";

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
import storage from "redux-persist/lib/storage"; // defaults to localStorage for web

const persistContactsConfig = {
  key: "contacts",
  storage,
  whitelist: ["items"],
};

const pContactsSliceReducer = persistReducer(
  persistContactsConfig,
  contactsSlice
);
export const store = configureStore({
  reducer: {
    contacts: pContactsSliceReducer,
    filters: filtersSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
