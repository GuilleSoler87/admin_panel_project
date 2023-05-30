import "./App.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar/Sidebar";


import RecintoEvento from './pages/RecintoEvento/RecintoEvento';
import Register from './components/Register/Register';
import Header from "./components/Header/Header";
import Asistentes from "./components/Asistentes/Asistentes";
import Login from './components/Login/Login';
import ProgramacionEvento from "./pages/ProgramacionEvento/ProgramacionEvento";
import EventForm from "./pages/EventForm/EventForm";
import Notifications from "./pages/Notifications/Notifications";
import Resultado from "./pages/Resultado/Resultado";
import AsistenteDetails from "./components/AsistenteDetails/AsistenteDetails";
import { useSelector } from "react-redux";

function App() {

  const { token } = useSelector((state) => state.auth)

  return (
    <div>
      <BrowserRouter>
          {token  ? ( // Ternario para condicionar la renderización del Sidebar
            <Header />
          ) : null}
          <div className="app-container">
            {token ? ( // Ternario para condicionar la renderización del Sidebar
              <div className="sidebar-boss-container">
                <Sidebar />
              </div>
            ) : null}

          <div className="content-container">
            <Routes>
              <Route path="/program" element={<ProgramacionEvento />} />
              <Route path="/recinto" element={<RecintoEvento />} />
              <Route path="/register" element={<Register />} />
              <Route path="/asistentes" element={<Asistentes />} />
              <Route path="/login" element={<Login />} />
              <Route path="/evento" element={<EventForm />} />
              <Route path="/notificaciones" element={<Notifications />} />
              <Route path="/resultado" element={<Resultado />} />
              <Route path="/asistenteDetails/:id" element={<AsistenteDetails />} />

            </Routes>
          </div>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;

