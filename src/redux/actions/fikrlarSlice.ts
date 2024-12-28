// src/store/slices/fikrlarSlice.js

import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';
const initialState = {
  fikrlarCards: [],
};
interface FikrlarCard {
  id: string;
  image: string | null;
  rating: number;
  titleUz: string;
  jobUz: string;
  descriptionUz: string;
  titleRu: string;
  jobRu: string;
  descriptionRu: string;
  titleEn: string;
  jobEn: string;
  descriptionEn: string;
}

const fikrlarSlice = createSlice({
  name: 'fikrlar',
  initialState,
  reducers: {
    addFikrlarCard: (state, action) => {
      const newCard = { ...action.payload, id: uuidv4() }; // Generate a unique ID for the new card
      state.fikrlarCards.push(newCard);
    },
    deleteFikrlar: (state, action: PayloadAction<number>) => {
      state.fikrlarCards = state.fikrlarCards.filter((_, index) => index !== action.payload);
    },
    updateFikrlarCard: (state, action: PayloadAction<FikrlarCard>) => {
      const index = state.fikrlarCards.findIndex(card => card.id === action.payload.id);
      if (index !== -1) {
        state.fikrlarCards[index] = action.payload;
      }

    },
  },
});

export const { addFikrlarCard, deleteFikrlar, updateFikrlarCard } = fikrlarSlice.actions;
export default fikrlarSlice.reducer;
