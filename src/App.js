import React, { Component } from 'react';
import './App.css';

import * as firebase from 'firebase';

import HeaderColumn from './components/HeaderColumn';
import SelectComponent from './components/SelectComponent';

class App extends Component {


  constructor(){
    super();
    this.state = {
      departments: [],
    }
  }

  componentDidMount(){
    const rootRef = firebase.database().ref();
    const departmentsRef = rootRef.child('departments');
    const teamsRef = rootRef.child('teams');

    departmentsRef.on('value', snap => {
      this.setState({
        departments: snap.val(),
      });
    });
  }

  render() {
    return (
      <div className="App container-fluid">
        <div className="row">
          <HeaderColumn />
        </div>
        <SelectComponent data={this.state}/>
      </div>
    );
  }
}

export default App;
