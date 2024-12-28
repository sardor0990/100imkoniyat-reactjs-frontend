// actions/cardSlice.js
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';

interface Card {
  id: string;
  image: string | null;
  titleUz: string;
  descriptionUz: string;
  titleRu: string;
  descriptionRu: string;
  titleEn: string;
  descriptionEn: string;
}

interface CardState {
  cards: Card[];
}

const initialState: CardState = {
  cards: [],
};

const cardSlice = createSlice({
  name: 'cards',
  initialState,
  reducers: {
    addCard: (state, action: PayloadAction<Omit<Card, 'id'>>) => {
      state.cards.push({ ...action.payload, id: uuidv4() });
    },
    updateCard: (state, action: PayloadAction<Card>) => {
      const index = state.cards.findIndex(card => card.id === action.payload.id);
      if (index !== -1) {
        state.cards[index] = action.payload;
      }
    },
    deleteCard: (state, action: PayloadAction<string>) => {
      state.cards = state.cards.filter(card => card.id !== action.payload);
    },
  },
});

export const { addCard, updateCard, deleteCard } = cardSlice.actions;
export default cardSlice.reducer;
