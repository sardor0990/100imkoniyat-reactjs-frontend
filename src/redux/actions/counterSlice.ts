import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";





interface CounterState {
  number: number;
}
const initialState: CounterState = {
  number: 0,
};

const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    changed: (state) => {
      state.number += 1;
    },
    changedByParam: (state, actions: PayloadAction<number>) => {
      state.number += actions.payload;
    },
  },
});

export const changedAsync = createAsyncThunk(
  "counter/changedAsync",
  async () => {}
);

export const { changed, changedByParam } = counterSlice.actions;
export default counterSlice.reducer;
