import React, { Component } from 'react';
import './App.css';
import BulletGraph from './BulletGraph';
import data1 from './data';

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Welcome to Akul's bullet graph</h2>
        </div>
        <br />
        <BulletGraph data={data1} />
      </div>
    );
  }
}
