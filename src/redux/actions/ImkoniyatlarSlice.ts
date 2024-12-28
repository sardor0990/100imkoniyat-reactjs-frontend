import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../store';
import { v4 as uuidv4 } from 'uuid';

interface Imkoniyat {
  id: string; // Unique identifier
  image: string | null;
  titleUz: string;
  descriptionUz: string;
  titleRu: string;
  descriptionRu: string;
  titleEn: string;
  descriptionEn: string;
}

interface ImkoniyatlarState {
  items: Imkoniyat[];
}

const initialState: ImkoniyatlarState = {
  items: [],
};

const imkoniyatlarSlice = createSlice({
  name: 'imkoniyatlar',
  initialState,
  reducers: {
    addImkoniyat: (state, action: PayloadAction<Omit<Imkoniyat, 'id'>>) => {
      const newItem: Imkoniyat = { id: uuidv4(), ...action.payload }; // Generate UUID
      state.items.push(newItem);
    },
    removeImkoniyat: (state, action: PayloadAction<string>) => {
      state.items = state.items.filter(imkoniyat => imkoniyat.id !== action.payload);
    },
    updateImkoniyat: (state, action: PayloadAction<Imkoniyat>) => {
      const index = state.items.findIndex(imkoniyat => imkoniyat.id === action.payload.id);
      if (index !== -1) {
        state.items[index] = action.payload; // Update the item
      }
    },
  },
});

export const { addImkoniyat, removeImkoniyat, updateImkoniyat } = imkoniyatlarSlice.actions;

export const selectImkoniyatlar = (state: RootState) => state.imkoniyatlar.items;

export default imkoniyatlarSlice.reducer;
