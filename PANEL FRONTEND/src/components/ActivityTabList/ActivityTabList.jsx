import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { changeDay } from '../../features/program/programSlice';
import { HiPlusSmall } from 'react-icons/hi2';
import "../../sass/input.scss"


const ActivityTabList = (props) => {

const {currentDay}  = useSelector((state) => state.program);
const dispatch = useDispatch();

const [tabCounter, setTabCounter] = useState(2)
const [selectedButton, setSelectedButton] = useState(1)
const [tabs, setTabs] = useState([
<button key={1} className={selectedButton == 1  ? 'btn-tab-day-selected' : 'btn-tab-day'} value={1}>
      DÍA 1
</button>
]);

const handleTabChange= (day) => {
    dispatch(changeDay(day))
}

const addDay = () => {
       const newTab = (
      <button 
      key={tabCounter} 
      className={currentDay == tabCounter  ? 'btn-tab-day-selected' : 'btn-tab-day'} 
       
      value={tabCounter}
      onClick={() => {handleTabChange(tabCounter)}}
      >
        DÍA {tabCounter}
      </button>
    );
    setTabCounter(tabCounter+1)
    setTabs([...tabs, newTab]);
  };
  
  
  
    return (
    <>
    
    {tabs}

   <button className="btn-tab-plus" onClick={addDay}><span><HiPlusSmall /></span></button>
    
    </>
  )
}

export default ActivityTabList