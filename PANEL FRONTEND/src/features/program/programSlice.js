import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import programService from "./programService";

const initialState = {
    currentDay: 1,
    program: [],
    createProgramMsg: ""
}

export const changeDay = createAsyncThunk("program/changeDay", async (day) => {
   return day;
  });

export const createProgram = createAsyncThunk("program/createProgram", async(data) => {
  try {
    return await programService.createProgram(data);   
  } catch (error) {
    console.error(error);
  }
})



  export const programSlice = createSlice({
    name: "program",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
      builder
      .addCase(changeDay.fulfilled, (state, action) => {
        state.currentDay = action.payload
      })
      .addCase(createProgram.fulfilled, (state, action)=> {
        state.program = action.payload.programacion
        state.createProgramMsg = action.payload.message
      })

    }

  })

  export default programSlice.reducer;