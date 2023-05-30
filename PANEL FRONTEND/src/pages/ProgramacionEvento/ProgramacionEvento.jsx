import React, { useEffect, useState } from 'react'
import { HiPlusSmall } from "react-icons/hi2"
import "./ProgramacionEvento.scss"
import "../../sass/input.scss"
import "../../sass/buttons.scss"
import BtnAddActivity from '../../components/Buttons/BtnAddActivity'
import BtnSave from '../../components/Buttons/BtnSave';
import BtnNext from '../../components/Buttons/BtnNext';
import ActivityInputGroup from '../../components/ActivityInputGroup/ActivityInputGroup';
import { useDispatch, useSelector } from 'react-redux';
import { changeDay, createProgram } from '../../features/program/programSlice';
import { useNavigate } from 'react-router-dom'
import {createEvent} from "../../features/event/eventSlice"


const ProgramacionEvento = () => {
  let navigate = useNavigate();
  let programDayOne = JSON.parse(localStorage.getItem(`Program1`)) || ""

  const dispatch = useDispatch();
  const { currentDay } = useSelector((state) => state.program);

  const [inputGroups, setInputGroups] = useState( programDayOne || 
    [ { dia: currentDay, inicio: '', fin: '', actividad: '' }
  ]);

  const handleAddInputGroup = () => {
    setInputGroups([...inputGroups, { dia: currentDay, inicio: '', fin: '', actividad: '' }]);
  };

  //BUTTONS
    const [tabs, setTabs] = useState([
    <button key={1} className={'btn-tab-day-selected btn-tab-day'} value={1} onClick={() => { handleTabChange(1) }}>
      DÍA 1
    </button>
  ]);

  const addDay = () => {
    const dayNumber = (tabs.length + 1)
    const newTab = (
      <button
        key={dayNumber}
        className= 'btn-tab-day'
        value={dayNumber}
        onClick={() => { handleTabChange(dayNumber) }}
      >
        DÍA {dayNumber}
      </button>
    );
    setTabs([...tabs, newTab]);
  };

  //Clicking on different day tabs
  const handleTabChange = ( day) => {
    //ClassName IS IMMUTABLE AND CAN'T BE CHANGED!!! MUST USE good old JS DOM manipulation:
    const buttons = document.querySelectorAll('.btn-tab-day');
    buttons.forEach((button) => {
      if (button.value === day.toString()) {
        button.classList.add('btn-tab-day-selected');
      } else {
        button.classList.remove('btn-tab-day-selected');
      }
    });
    let storageData = JSON.parse(localStorage.getItem(`Program${day}`)) || []
    if (storageData.length > 0) {
      setInputGroups(storageData)  //print existing
    } else {
      setInputGroups([{ inicio: '', fin: '', actividad: '' }]) //Empty form
    }
    dispatch(changeDay(day))
  }

  const handleInputChange = (index, inputName, value) => {
    const updatedGroups = [...inputGroups];
    updatedGroups[index][inputName] = value;
    setInputGroups(updatedGroups);
  };

  //The input can be converted to text by clicking the check icon
  const handleConvertToText = (index) => {
    const updatedGroups = [...inputGroups];
    const group = updatedGroups[index];
    const convertedGroup = {
      inicio: group.inicio ? group.inicio : '',
      fin: group.fin ? group.fin : '',
      actividad: group.actividad ? group.actividad : '',
      showText: true
    };
    updatedGroups[index] = convertedGroup;
    setInputGroups(updatedGroups);
  };

  //It can be converted back to input fields by clicking the pen
  const handleConvertToInput = (index) => {
    const updatedGroups = [...inputGroups];
    const group = updatedGroups[index];
    updatedGroups[index] = { ...group, showText: false };
    setInputGroups(updatedGroups);
  };

  const deleteActivity = (index) => {
    const updatedGroups = [...inputGroups];
    updatedGroups.splice(index, 1);
    setInputGroups(updatedGroups);
  };

  const handleSave = () => {
    const inputGroupsShowTrue = inputGroups.map((row, index) => {
      return {
        inicio: row.inicio ? row.inicio : '',
        fin: row.fin ? row.fin : '',
        actividad: row.actividad ? row.actividad : '',
        showText: true
      }
    })

    setInputGroups(inputGroupsShowTrue)
    let activityArray = [];
    inputGroups.forEach(group => {
      if (group.inicio  || group.inicio || group.actividad){  //If one is empty ok, if all are empty, not saved
      activityArray.push({ dia: currentDay, inicio: group.inicio, fin: group.fin, actividad: group.actividad })
    }})
     localStorage.setItem("Program" + currentDay, JSON.stringify(activityArray))
  }

const handleNext = () => {
  let finalArray = []
  tabs.forEach((tab, index) => {
    let storedData = JSON.parse(localStorage.getItem(`Program${index+1}`))
    finalArray = [...finalArray, ...storedData]
  })
  localStorage.setItem("programacion", JSON.stringify(finalArray))
  navigate("/recinto")
  }

  // Another component prints the actual form fields. Passing values
  const renderInputGroups = () => {
    return inputGroups.map((group, index) => (
      <ActivityInputGroup
        key={index}
        group={group}
        index={index}
        handleInputChange={handleInputChange}
        handleConvertToText={handleConvertToText}
        handleConvertToInput={handleConvertToInput}
        deleteActivity={deleteActivity}
      />
    ));
  };


  return (
    <>

      <div className="main-background">
        <h3>Programación del evento</h3>

        <div className="tab">

          {tabs}

          <button className="btn-tab-plus" onClick={addDay}><span><HiPlusSmall /></span></button>

        </div>
        <div className="activity-form">
          <span className="inputs-div title">
            <span className="clock-text">Hora inicio</span>
            <span className="clock-text">Hora final</span>
            <span className="activity-text">Descripción de la actividad</span>
          </span>

          {renderInputGroups()}

          <div className="addbutton-div">

            <BtnAddActivity handleClick={handleAddInputGroup} />
          </div>

        </div >

        <span className="savebutton-div">
          <BtnSave onClick={handleSave}></BtnSave>
        </span>

      </div>

      <div className="next-recinto-container">
        <p className="steps">2 Pasos de 3 Completados</p>
        <p className="points">● ● &#x25CB;</p>
        <div className="btns">
          <BtnNext onClick={handleNext}></BtnNext>
        </div>
      </div>

    </>
  )
}


export default ProgramacionEvento