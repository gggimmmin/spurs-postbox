import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { jsonApi } from "@api/index";

const initialState = {
  letters: [],
  isLoading: false,
  isError: false,
  error: null,
};

const getLettersFromDB = async () => {
  const { data } = await jsonApi.get("/letters?_sort=-createdAt");
  return data;
};

export const __getLetters = createAsyncThunk(
  "getLetters",
  async (payload, thunkAPI) => {
    try {
      const letters = await getLettersFromDB();
      return letters;
    } catch (err) {
      return thunkAPI.rejectWithValue(err);
    }
  }
);

export const __addLetter = createAsyncThunk(
  "addLetter",
  async (newLetter, thunkAPI) => {
    try {
      await jsonApi.post("/letters", newLetter);
      const letters = await getLettersFromDB();
      return letters;
    } catch (err) {
      return thunkAPI.rejectWithValue(err);
    }
  }
);

const letterSlice = createSlice({
  name: "letter",
  initialState,
  reducers: {
    addLetter: (state, action) => {
      const newLetter = action.payload;
      return [newLetter, ...state];
    },
    deleteLetter: (state, action) => {
      const letterId = action.payload;
      return state.filter((letter) => letter.id !== letterId);
    },
    editLetter: (state, action) => {
      const { id, editingText } = action.payload;
      return state.map((letter) => {
        if (letter.id === id) {
          return { ...letter, content: editingText };
        }
        return letter;
      });
    },
  },
  extraReducers: (builder) => {
    builder.addCase(__addLetter.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(__addLetter.fulfilled, (state, action) => {
      state.isLoading = false;
      state.letters = action.payload;
      state.isError = false;
      state.error = null;
    });
    builder.addCase(__addLetter.rejected, (state, action) => {
      state.isLoading = false;
      state.isError = true;
      state.error = action.payload;
    });
    builder.addCase(__getLetters.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(__getLetters.fulfilled, (state, action) => {
      state.isLoading = false;
      state.letters = action.payload;
      state.isError = false;
      state.error = null;
    });
    builder.addCase(__getLetters.rejected, (state, action) => {
      state.isLoading = false;
      state.isError = true;
      state.error = action.payload;
    });
  },
});

export const { addLetter, deleteLetter, editLetter } = letterSlice.actions;
export default letterSlice.reducer;
