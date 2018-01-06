import React from 'react';

const SampleComponent = (props) => {
  return props.name && <p>Hello, {props.name}</p>
};

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      name: null
    }
  }
  onInput(e) {
    this.setState({name: e.target.value.trim()});
  }
  render() {
    return <div>
      Введите имя:
      <input onInput={this.onInput.bind(this)} />
      <SampleComponent name={this.state.name} />
    </div>
  }
}



export default App;
