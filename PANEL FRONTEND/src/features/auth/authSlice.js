import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import authService from "./authService";


const initialState = {
  usuario: null,
  token: localStorage.getItem("token") || "",
};



export const register = createAsyncThunk('auth/register',async(usuario)=>{
    try {
      return await authService.register(usuario);   
    } catch (error) {
      console.error(error);
    }
})

export const login = createAsyncThunk("auth/login", async (usuario) => {
  try {
    return await authService.login(usuario);
  } catch (error) {
    console.error(error);
  }
})

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
    .addCase(login.fulfilled, (state, action) => {
      console.log(action.payload)
      state.token = action.payload.token
    })
  }
});


export default authSlice.reducer;