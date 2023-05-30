import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import eventService from "./eventService";

const initialState = {
    event: {},
    createEventMsg: ""
}


export const createEvent = createAsyncThunk("event/createEvent", async(data) => {
    try {
      return await eventService.createEvent(data);   
    } catch (error) {
      console.error(error);
    }
  })

  export const eventSlice = createSlice({
    name: "event",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
      builder
      .addCase(createEvent.fulfilled, (state, action) => {
        state.event = action.payload.evento
        state.createEventMsg = action.payload.message
      })
    }

  })

  export default eventSlice.reducer;