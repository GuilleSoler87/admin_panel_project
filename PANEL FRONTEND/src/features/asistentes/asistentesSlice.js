import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import asistentesService from "./asistentesService";

const initialState = {
  asistentes: [],
  asistente: null,
};

export const getAll = createAsyncThunk("usuarios/getAll", async () => {
  
  try {
    return await asistentesService.getAll();
  } catch (error) {
    console.error(error);
  }
});

export const getById = createAsyncThunk("usuarios/getById", async (_id) => {
  try {
    return await asistentesService.getById(_id);
  } catch (error) {
    console.error(error);
  }
});

export const asistentesSlice = createSlice({
  name: "usuarios",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getAll.fulfilled, (state, action) => {
      state.asistentes = action.payload;
    })
    .addCase(getById.fulfilled, (state, action) => {
      state.asistente = action.payload;
    });
  },
});

export default asistentesSlice.reducer;
