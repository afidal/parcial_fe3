import React from "react";

export default class Buttons extends React.Component {
  render() {
    const { storyID, textA, textB, handleClick, startOver } = this.props;
    return (
      <div className="opciones">
        <div className="opcion">
          <button
            className="botones"
            id="A"
            onClick={() => handleClick("a")}
            disabled={storyID > 5}
          >
            A
          </button>
          <h2>{textA}</h2>
        </div>
        <div className="opcion">
          <button
            className="botones"
            id="B"
            onClick={() => handleClick("b")}
            disabled={storyID > 5}
          >
            B
          </button>
          <h2>{textB}</h2>
        </div>
        <div className="opcion reiniciar">
          <button
            className="botones"
            onClick={() => startOver()}
            disabled={storyID === 1}
          >
            Volver a Empezar
          </button>
        </div>
      </div>
    );
  }
}
