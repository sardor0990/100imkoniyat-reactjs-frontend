import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../actions/counterSlice"; // Adjust path as necessary
import cardReducer from "../actions/cardSlice"; // Adjust path as necessary
import fikrlarReducer from "../actions/fikrlarSlice";
import ImkoniyatlarSlice from "../actions/ImkoniyatlarSlice";
import imkoniyatDetailSlice from "../actions/imkoniyatDetailSlice";

export const store = configureStore({
  reducer: {
    imkoniyatDetail: imkoniyatDetailSlice,
    imkoniyatlar: ImkoniyatlarSlice,
    counter: counterReducer, // Assuming counterSlice is a slice created with createSlice
    cards: cardReducer, // Assuming cardSlice is a slice created with createSlice
    fikrlar: fikrlarReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
