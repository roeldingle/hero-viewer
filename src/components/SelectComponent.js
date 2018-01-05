import React, { Component } from 'react';
import { Button, Card, CardTitle, CardBody } from 'reactstrap';

import * as firebase from 'firebase';

import ViewHeroComponent from './ViewHeroComponent';
import ViewAttributesComponent from './ViewAttributesComponent';

class SelectComponent extends Component {

  state = {
    teams: [],
  }

  DepartmentSelect = (id) => {
    const rootRef = firebase.database().ref();
    const teamsRef = rootRef.child('teams');

    teamsRef.orderByChild('department').equalTo(id).on('value', snap => {
      this.setState({
        teams: snap.val(),
      });
    });
  }

  render() {

    let data = this.props.data;
    let departments = data.departments;
    let teams = this.state.teams;

    function MapObject(object, callback) {
      return Object.keys(object).map(function (key) {
        return callback(key, object[key]);
      });
    }
    var DepartmentList = MapObject(departments, function (key, value) {
      return {
        id: key,
        name: value.name,
        logo: value.logo,
      }
    })

    var TeamList = MapObject(teams, function (key, value) {
      return {
        id: key,
        name: value.name,
      }
    })
    return (
      <div className="row main-container">
      <div className="col">
        <Card style={{marginBottom: "1em"}}>
          <CardBody>
            <CardTitle>Departments</CardTitle>
            {
              DepartmentList.map((department, key) => {
                  return <Button onClick={() => this.DepartmentSelect(department.id)} color="danger" style={{margin:"2px"}}>{department.name}</Button>
              })
            }
          </CardBody>
        </Card>

        <Card style={{marginBottom: "1em"}}>
          <CardBody>
            <CardTitle>Teams</CardTitle>
            {
              TeamList.map((team, key) => {
                  return <Button color="danger" style={{margin:"2px"}}>{team.id}</Button>
              })
            }
          </CardBody>
        </Card>
      </div>
      <ViewHeroComponent />
      <ViewAttributesComponent />
    </div>
    );
  }
}

export default SelectComponent;
