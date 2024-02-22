import { createSlice } from "@reduxjs/toolkit";

const initialState = "SON";

const memeberSlice = createSlice({
  name: "member",
  initialState,
  reducers: {
    setMember: (state, action) => {
      const activeMember = action.payload;
      return activeMember;
    },
  },
});

export const { setMember } = memeberSlice.actions;
export default memeberSlice.reducer;
