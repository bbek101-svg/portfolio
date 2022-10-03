import { configureStore } from "@reduxjs/toolkit";
import toggleReducer from "./feaures/theme/themeToggleSlice";

export default configureStore({
  reducer: {
    themeToggle: toggleReducer,
  },
});
