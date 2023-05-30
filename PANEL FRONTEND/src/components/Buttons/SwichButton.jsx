import React from 'react';
import "../../sass/buttons.scss"

const SwitchButton = ({ isOn, onToggle }) => {
  const toggleSwitch = () => {
    onToggle(!isOn);
  };

  return (
    <button className={`switch-button ${isOn ? 'on' : 'off'}`} onClick={toggleSwitch}>
      <span className={`switch-slider ${isOn ? 'on' : 'off'}`}></span>
    </button>
  );
};

export default SwitchButton;
