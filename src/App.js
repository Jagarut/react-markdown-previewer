import React, { Component } from "react";
import marked from "marked";
import InputBox from "./components/InputBox";
import OutputBox from "./components/OutputBox";

class App extends Component {
  state = {
    inputText: "# Hola",
    outputText: "",
    text: [],
  };

  componentDidMount() {
    this.setState({
      outputText: marked(this.state.inputText, { sanitize: true }),
    });
  }

  handleChange = (term) => {
    this.setState({
      inputText: term,
      outputText: marked(term, { sanitize: true }),
    });
  };

  handleKeyPress = (e) => {
    if (e.keyCode == 13) {
      this.setState({
        text: this.state.inputText,
      });
    }
  };

  render() {
    console.log(this.state.outputText);
    return (
      <div>
        <div className="ui container">
          <InputBox
            value={this.state.inputText}
            inputText={this.handleChange}
            keypress={this.handleKeyPress}
          />
        </div>
        <div className="ui container">
          <h5 style={{ marginTop: "20px" }}>Previewer</h5>
          <OutputBox
            value={this.state.outputText}
            outputText={this.state.outputText}
            lineBreak={this.state.line}
          />
        </div>
      </div>
    );
  }
}

export default App;
