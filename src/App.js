import React from 'react';
import logo from './logo.svg';
import './App.css';

class App extends React.Component {
    state = { time: new Date() };
  
  componentWillUnmount() {
    clearInterval(this.timeID);
  }

  componentDidMount() {
    this.updateTime();
  }

  updateTime() {
    this.timeID = setInterval(() => {
      this.setState({ time: new Date() });
    }, 1000);
  }

  render() {
    const { time } = this.state;
    return (
      <div className="App">
        <h2>Current time: {time.toLocaleTimeString()}.</h2>
      </div>
    );
  }
}


export default App;
