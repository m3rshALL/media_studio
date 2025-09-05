import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface UIState {
  theme: 'light' | 'dark';
  isMenuOpen: boolean;
  isModalOpen: boolean;
  modalContent: string | null;
  loading: boolean;
}

const initialState: UIState = {
  theme: 'light',
  isMenuOpen: false,
  isModalOpen: false,
  modalContent: null,
  loading: false,
};

const uiSlice = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    setTheme: (state, action: PayloadAction<'light' | 'dark'>) => {
      state.theme = action.payload;
    },
    toggleMenu: (state) => {
      state.isMenuOpen = !state.isMenuOpen;
    },
    setMenuOpen: (state, action: PayloadAction<boolean>) => {
      state.isMenuOpen = action.payload;
    },
    openModal: (state, action: PayloadAction<string>) => {
      state.isModalOpen = true;
      state.modalContent = action.payload;
    },
    closeModal: (state) => {
      state.isModalOpen = false;
      state.modalContent = null;
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
  },
});

export const { setTheme, toggleMenu, setMenuOpen, openModal, closeModal, setLoading } = uiSlice.actions;
export default uiSlice.reducer;