import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { v4 as uuid } from 'uuid';
import { RootState } from '../store';

interface ImkoniyatDetail {
  id: string;
  image: string | null;
  titleUz: string;
  descriptionUz: string;
  titleRu: string;
  descriptionRu: string;
  titleEn: string;
  descriptionEn: string;
}

interface ImkoniyatDetailState {
  list: ImkoniyatDetail[];
}

const initialState: ImkoniyatDetailState = {
  list: [],
};

const imkoniyatDetailSlice = createSlice({
  name: 'imkoniyatDetail',
  initialState,
  reducers: {
    addImkoniyatDetail: {
      reducer: (state, action: PayloadAction<ImkoniyatDetail>) => {
        state.list.push(action.payload);
      },
      prepare: (detail: Omit<ImkoniyatDetail, 'id'>) => ({
        payload: {
          ...detail,
          id: uuid(),
        },
      }),
    },
    deleteImkoniyatDetail: (state, action: PayloadAction<string>) => {
      state.list = state.list.filter(detail => detail.id !== action.payload);
    },
    updateImkoniyatDetail: (state, action: PayloadAction<ImkoniyatDetail>) => {
      const index = state.list.findIndex(detail => detail.id === action.payload.id);
      if (index !== -1) {
        state.list[index] = action.payload;
      }
    },
  },
});

export const { addImkoniyatDetail, deleteImkoniyatDetail, updateImkoniyatDetail } = imkoniyatDetailSlice.actions;

export const selectImkoniyatDetail = (state: RootState, id: string) =>
  state.imkoniyatDetail.list.find(detail => detail.id === id);

export default imkoniyatDetailSlice.reducer;