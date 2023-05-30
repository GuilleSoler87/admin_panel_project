import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createNotificacion, getAll } from '../../features/notifications/notsSlice';
import AssCategory from '../../components/Buttons/AssistantsCategory';
import SwichButton from '../../components/Buttons/Swichbutton';
import BtnSendNow from '../../components/Buttons/BtnSendNow';
import ProgramNotification from '../../components/Buttons/ProgramNotification';
import BrushEdit from '../../assets/icons/brush-edit.png';
import { HiCalendar, HiChevronDown, HiClock } from 'react-icons/hi';

import './Notifications.scss';

const Notifications = () => {
  const [notification, setNotification] = useState('');
  const [isSwitchOn, setIsSwitchOn] = useState(false);
  const maxLength = 700;
  const [dateTime, setDateTime] = useState(null);

  const dispatch = useDispatch();
  const notificaciones = useSelector((state) => state.notificaciones.notificaciones);

  useEffect(() => {
    dispatch(getAll());
  }, [dispatch]);

  const handleNotificationChange = (event) => {
    const { value } = event.target;
    if (value.length <= maxLength) {
      setNotification(value);
    }
  };

  const handleSwitchChange = () => {
    setIsSwitchOn(!isSwitchOn);
  };

  const handleCreateNotification = () => {
    if (notification.trim() !== '') {
      dispatch(createNotificacion({ contenido: notification }));
      setNotification('');
      setDateTime(null);
    }
  };

  const handleDateChange = (event) => {
    const { value } = event.target;
    const selectedDate = new Date(value);
  
    const currentDate = new Date(dateTime);
    currentDate.setDate(selectedDate.getDate());
    currentDate.setMonth(selectedDate.getMonth());
    currentDate.setFullYear(selectedDate.getFullYear());
  
    setDateTime(currentDate);
  };
  
  const handleTimeChange = (event) => {
    const { value } = event.target;
    const currentDate = new Date(dateTime);
  
    const [hours, minutes] = value.split(':');
  
    currentDate.setHours(hours);
    currentDate.setMinutes(minutes);
  
    setDateTime(currentDate);
  };

  const handleCreateNotificationProg = () => {
    if (notification.trim() !== '' && dateTime !== null) {
      const notificationData = {
        contenido: notification,
        recurrente: false,
        categoria: 'All', // Esto se modificaría en el caso de que existiese el documento categorías
        programada: true,
        dia: dateTime.toISOString(),
      };
      dispatch(createNotificacion(notificationData));
      setNotification('');
      setDateTime(null);
      setTimeout(() => {
        dispatch(getAll());
      }, 100);
    }
  };

  return (
    <div className="notification-main-container">
      <div className="notification-content">
        <h2 className="notification-title">Enviar notificaciones</h2>
        <div className="new-notification">
          <p className="new-notification-text1">Nueva notificación:</p>
          <textarea
            className="input-new-notification"
            placeholder="Añadir notificación"
            value={notification}
            onChange={handleNotificationChange}
            maxLength={maxLength}
          ></textarea>
          <span className="character-count">
            {notification.length}/{maxLength}
          </span>
        </div>

        <div className="select-options-notifications">
          <div className="div-swichButton">
            <p className="text-buttons-nots">Notificación recurrente</p>
            <SwichButton isOn={isSwitchOn} onToggle={handleSwitchChange} />
          </div>
          <div className="filter-assistants-buttons">
            <p className="text-buttons-nots">Filtrar receptores</p>
            <AssCategory />
            {isSwitchOn ? (
              <span className="input-date-nots disabled">
                <HiCalendar />
                <input type="date" className="" disabled />
                <HiChevronDown />
              </span>
            ) : (
              <span className="input-date-nots">
                <HiCalendar />
                <input type="date" className="" onChange={handleDateChange} />
                <HiChevronDown />
              </span>
            )}
            <span className="input-time-nots">
              <HiClock />
              <input type="time" className="" onChange={handleTimeChange} />
              <HiChevronDown />
            </span>
          </div>
        </div>

        <div className="send-notifications-buttons">
          <BtnSendNow disabled={isSwitchOn} onClick={handleCreateNotification} />
          <ProgramNotification onClick={handleCreateNotificationProg} />
        </div>

        <p className="new-notification-text">Notificaciones programadas:</p>

        <div className="programmed-notifications">
          <div className="scroll-container-notifications">
            {Array.isArray(notificaciones) &&
              notificaciones.map((notificacion) => {
                if (notificacion.programada) {
                  return (
                    <div className="master-card-notification" key={notificacion._id}>
                      <div className="card-complete-notification">
                        <div className="card-notification">
                          <p className="Date-card-notification">
                            {notificacion.dia && notificacion.dia.substring(0, 10)}
                          </p>
                          <p className="Hour-card-notification">
                            {notificacion.dia &&
                              (() => {
                                const hora = new Date(notificacion.dia);
                                hora.setHours(hora.getHours() + 0);
                                return hora.toLocaleTimeString([], {
                                  hour: '2-digit',
                                  minute: '2-digit',
                                });
                              })()}
                          </p>
                          <p className="who-card-notification">{notificacion.categoria}</p>
                          <p className="text-card-notification">{notificacion.contenido}</p>
                        </div>
                        <button className="image-button-edit-not">
                          <img
                            src={BrushEdit}
                            alt="edit-notification"
                            className="button-edit-notification"
                          />
                        </button>
                      </div>
                      <hr className="separator-line" />
                    </div>
                  );
                }
                return null;
              })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Notifications;

