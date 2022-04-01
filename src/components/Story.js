import React from "react";
import Buttons from "./Buttons";
import Info from "./Info";
import data from "./data.json";

export default class Counter extends React.Component {
  constructor() {
    super();
    this.state = {
      prevSelectionList: [],
      prevSelection: " ",
      elementFoundByID: data[0],
      storyID: 1,
    };
  }

  handleClick = (choice) => {
    const nextStory = this.state.storyID + 1;
    const id = `${nextStory}${choice}`;
    //console.log("ID: " + id);
    if (nextStory > 5) {
      alert("Fin");
      this.setState(() => ({
        storyID: 6,
      }));
    } else {
      this.setState(() => ({
        prevSelection: choice,
        prevSelectionList: [...this.state.prevSelectionList, choice],
        storyID: nextStory,
        elementFoundByID: data.find((element) => element.id === id),
      }));
    }
  };

  componentDidMount() {
    alert("Bienvenid@ a Elige Tu Propia Aventura! Empecemos!");
  }

  startOver = () => {
    this.setState({
      prevSelectionList: [],
      prevSelection: "",
      elementFoundByID: data[0],
      storyID: 1,
    });
  };

  render() {
    return (
      <div className="App">
        <div className="layout">
          <h1 className="historia">{this.state.elementFoundByID.historia}</h1>
          <Buttons
            storyID={this.state.storyID}
            handleClick={this.handleClick}
            textA={this.state.elementFoundByID.opciones.a}
            textB={this.state.elementFoundByID.opciones.b}
            startOver={this.startOver}
          />
          <Info prevSelection={this.state.prevSelection} prevSelectionList={this.state.prevSelectionList}/>
        </div>
      </div>
    );
  }
}
