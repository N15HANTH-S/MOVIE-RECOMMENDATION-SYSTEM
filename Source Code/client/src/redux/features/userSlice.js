import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "User",
  initialState: {
    user: null,
    listFavorites: [],
    listWatchLater:[]
  },
  reducers: {
    setUser: (state, action) => {
      if (action.payload === null) {
        localStorage.removeItem("actkn");
      } else {
        if (action.payload.token) localStorage.setItem("actkn", action.payload.token);
      }

      state.user = action.payload;
    },
    setListFavorites: (state, action) => {
      state.listFavorites = action.payload;
    },
    removeFavorite: (state, action) => {
      const { mediaId } = action.payload;
      state.listFavorites = [...state.listFavorites].filter(e => e.mediaId.toString() !== mediaId.toString());
    },
    addFavorite: (state, action) => {
      state.listFavorites = [action.payload, ...state.listFavorites];
    },
    setListWatchLater: (state, action) => {
      state.listWatchLater = action.payload;
    },
    removeWatchLater: (state, action) => {
      const { mediaId } = action.payload;
      state.listWatchLater = [...state.listWatchLater].filter(e => e.mediaId.toString() !== mediaId.toString());
    },
    addWatchLater: (state, action) => {
      state.listWatchLater = [action.payload, ...state.listWatchLater];
    }
  }
});

export const {
  setUser,
  setListFavorites,
  addFavorite,
  removeFavorite,
  setListWatchLater,
  addWatchLater,
  removeWatchLater
} = userSlice.actions;

export default userSlice.reducer;