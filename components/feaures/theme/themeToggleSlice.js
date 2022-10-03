import { createSlice } from "@reduxjs/toolkit";

export const toggleThemeSlice = createSlice({
  name: "themeToggle",
  initialState: {
    value: false,
  },
  reducers: {
    toggle: (state) => {
      state.value = !state.value;
    },
  },
});

export const { toggle } = toggleThemeSlice.actions;
export default toggleThemeSlice.reducer;
