import { configureStore } from '@reduxjs/toolkit'
import auth from '../features/auth/authSlice'
import asistentes from '../features/asistentes/asistentesSlice'
import program from "../features/program/programSlice"
import recinto from "../features/recinto/recintoSlice"
import event from  "../features/event/eventSlice"
import notificaciones from "../features/notifications/notsSlice"

export const store = configureStore({
  reducer: {
    auth,
    program,
    asistentes,
    recinto,
    event,
    notificaciones

  },
})

