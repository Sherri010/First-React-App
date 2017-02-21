import React, { Component } from 'react';
import Projects from './components/project'
import AddProject from './components/addproject.js'
import './App.css';

class App extends Component {
  constructor(){
      super();
    this.state = {
      project:[]
    }
 }


  componentWillMount(){
        this.setState({
        projects :[{
          title:"My portfolio",
          deadline:" March 2016"
        },{
          title:"Event Planner",
          deadline:"April"
        },{
          title:"Airplanner",
          deadline:"July"
        }
       ]})
    }

  render() {
    return (
      <div className="App">
        Project Management
        <Projects projects={this.state.projects}/>
        <AddProject />
      </div>
    );
  }
}

export default App;
