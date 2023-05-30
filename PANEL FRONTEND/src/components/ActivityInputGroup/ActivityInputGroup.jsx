import React from 'react';
import {HiOutlineTrash, HiOutlineCheck, HiOutlinePaintBrush, HiClock, HiChevronDown, HiPlusSmall, HiPlus} from "react-icons/hi2"
import "../../pages/ProgramacionEvento/ProgramacionEvento.scss"


const ActivityInputGroup = ({
  group,
  index,
  handleInputChange,
  handleConvertToText,
  handleConvertToInput,
  deleteActivity
}) => {
  return (
    <div key={index} className="inputs-div">
      {group.showText ? (
        <>
          <span className="clock-text">{group.inicio} </span>
          <span className="clock-text">{group.fin} </span>
          <span className="activity-text"> {group.actividad} </span>
          <span className="activity-icons">
            <i type="button" onClick={() => handleConvertToInput(index)}>
              <HiOutlinePaintBrush />
            </i>
            <i type="button" onClick={() => deleteActivity(index)}>
              <HiOutlineTrash />
            </i>
          </span>
        </>
      ) : (
        <>
          <span className="input-time">
            <HiClock></HiClock>
            <input
              type="time"
              className=""
              value={group.inicio}
              onChange={(e) => handleInputChange(index, 'inicio', e.target.value)}
            />
            <HiChevronDown></HiChevronDown>
          </span>

          <span className="input-time">
            <HiClock></HiClock>
            <input
              type="time"
              value={group.fin}
              onChange={(e) => handleInputChange(index, 'fin', e.target.value)}
            />
            <HiChevronDown></HiChevronDown>
          </span>

          <input
            type="text"
            value={group.actividad}
            onChange={(e) => handleInputChange(index, 'actividad', e.target.value)}
          />
          <span className="activity-icons">
            <i type="button" onClick={() => handleConvertToText(index)}>
              <HiOutlineCheck />
            </i>

            <i type="button" onClick={() => deleteActivity(index)}>
              <HiOutlineTrash />
            </i>
          </span>
        </>
      )}
    </div>
  );
};

export default ActivityInputGroup;