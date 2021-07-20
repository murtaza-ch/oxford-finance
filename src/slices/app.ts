import { createSlice } from "@reduxjs/toolkit";

const appSlice = createSlice({
  name: "app",
  initialState: {
    answers: {} as {
      loanAmount: number;
      wantMechanicalIsurance: string;
      buyingOffaDealer: string;
      "chooseYourTerm.monthsAndPrice": string;
    },
  },
  reducers: {
    setAnswerValue: (state, action) => {
      const { name, value } = action.payload as { name: string; value: string };
      // @ts-ignore
      state.answers[name] = value;
    },
  },
});

export const { setAnswerValue } = appSlice.actions;

export default appSlice.reducer;
