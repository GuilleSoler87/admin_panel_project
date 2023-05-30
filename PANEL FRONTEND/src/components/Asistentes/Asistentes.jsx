import React, { useEffect } from 'react'
import Asistente from '../Asistente/Asistente'
import { useDispatch } from 'react-redux';
import { getAll } from '../../features/asistentes/asistentesSlice';



const Asistentes = () => {

const dispatch = useDispatch();

useEffect(() => {
  dispatch(getAll());
}, []);

  return (
    <>
        <Asistente/>
    </>
  )
}

export default Asistentes