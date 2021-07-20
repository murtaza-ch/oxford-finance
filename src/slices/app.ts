import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import firebase from "firebase";

export const fetchProjectSetting = createAsyncThunk(
  "app/fetchProjectSetting",
  async (_, { dispatch }) => {
    try {
      await firebase
        .database()
        .ref("/carousels/-McRQtTWJdS7IL3GxGC_")
        .once("value", (data) => {
          dispatch(setSetting(data.val().settings));
        });
    } catch (error) {
      console.log({ error });
    }
  }
);

const appSlice = createSlice({
  name: "app",
  initialState: {
    answers: {} as {
      loanAmount: number;
      wantMechanicalIsurance: string;
      buyingOffaDealer: string;
      "chooseYourTerm.monthsAndPrice": string;
      repaymentDuration: string;
    },
    setting: {} as any,
  },
  reducers: {
    setAnswerValue: (state, action) => {
      const { name, value } = action.payload as { name: string; value: string };
      // @ts-ignore
      state.answers[name] = value;
    },
    setSetting: (state, action) => {
      state.setting = action.payload;
    },
  },
});

export const { setAnswerValue, setSetting } = appSlice.actions;

export default appSlice.reducer;
