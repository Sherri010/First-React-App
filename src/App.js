import React, { Component } from 'react';
import uuid from "uuid";
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
          id:uuid.v4(),
          title:"My portfolio",
          category:" March 2016"
        },{
          id:uuid.v4(),
          title:"Event Planner",
          category:"April"
        },{
          id:uuid.v4(),
          title:"Airplanner",
          category:"July"
        }
       ]})
    }

handleAddProject(project){
  let projects = this.state.projects;
  projects.push(project);
  this.setState(projects:projects);
}

handleDeleteProject(id){
    let projects = this.state.projects;
    let index = projects.findIndex(x => x.id === id);
    projects.splice(index,1);
    this.setState({projects:projects});
}
  render() {
    return (
      <div className="App">
        Project Management
        <Projects projects={this.state.projects} onDelete={this.handleDeleteProject.bind(this)}/>
        <AddProject addProject={this.handleAddProject.bind(this)}/>
      </div>
    );
  }
}

export default App;
