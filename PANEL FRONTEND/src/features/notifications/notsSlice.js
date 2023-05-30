import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import notsService from "./notsService";

const initialState = {
  notificaciones: [],
};

export const createNotificacion = createAsyncThunk( "/notificaciones/create",
  async (notificacionData) => {
    try {
      return await notsService.createNotificacion(notificacionData);
    } catch (error) {
      console.error(error);
    }
  }
);

export const getAll = createAsyncThunk("notificaciones/getAll",
  async () => {
    try {
      return await notsService.getAll();
    } catch (error) {
      console.error(error);
    }
  }
);

export const getById = createAsyncThunk("notificaciones/getById",
  async (id) => {
    try {
      return await notsService.getById(id);
    } catch (error) {
      console.error(error);
    }
  }
);

export const deleteNotificacion = createAsyncThunk("notificaciones/delete",
  async (id) => {
    try {
      return await notsService.deleteNotificacion(id);
    } catch (error) {
      console.error(error);
    }
  }
);

export const updateNotificacion = createAsyncThunk("notificaciones/update",
  async ({ id, notificacionData }) => {
    try {
      return await notsService.updateNotificacion(id, notificacionData);
    } catch (error) {
      console.error(error);
    }
  }
);


export const notificacionesSlice = createSlice({
  name: "notificaciones",
  initialState,
  reducers: {
    reset: (state) => {
      state.notificaciones = [];
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getAll.fulfilled, (state, action) => {
        state.notificaciones = action.payload;
      })
      
      .addCase(createNotificacion.fulfilled, (state, action) => {
        state.notificaciones.push(action.payload);
      })
      .addCase(deleteNotificacion.fulfilled, (state, action) => {
        state.notificaciones = state.notificaciones.filter(
          (notificacion) => notificacion._id !== action.payload._id
        );
      })
      .addCase(getById.fulfilled, (state, action) => {
        state.notificaciones = action.payload;
      })
      .addCase(updateNotificacion.fulfilled, (state, action) => {
        const index = state.notificaciones.findIndex(
          (notificacion) => notificacion._id === action.payload._id
        );
        if (index !== -1) {
          state.notificaciones[index] = action.payload;
        }
      });
  },
});


export const { reset } = notificacionesSlice.actions;
export default notificacionesSlice.reducer;
