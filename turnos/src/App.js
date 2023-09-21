import React, { Component } from 'react';
import Scheduler from './components/scheduler';
import './App.css';

const data = [
  { start_date:'2023-10-15 5:00', end_date:'2023-10-15 9:00', text: 'event 1', id: 1},
  { start_date:'2023-10-18 5:00', end_date:'2023-10-18 9:00', text: 'event 2', id: 2},
];

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="scheduler-container">
          <Scheduler events={data}/>
        </div>
      </div>
    );
  }
}
export default App;
