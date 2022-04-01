import React from "react";

const Info = ({ prevSelection, prevSelectionList }) => {
  const newPrevSelectionList = [...prevSelectionList];
  newPrevSelectionList.pop();
  return (
    <div className="recordatorio">
      <h3>Selección Anterior: {prevSelection.toUpperCase()}</h3>
      <h4>Historial Opciones Elegidas:</h4>
      <ul>
        {newPrevSelectionList.map((option, idx) => (
          <li key={idx}>{option.toUpperCase()}</li>
        ))}
      </ul>
    </div>
  );
};

export default Info;
