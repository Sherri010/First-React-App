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
          category:" March 2016"
        },{
          title:"Event Planner",
          category:"April"
        },{
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
  render() {
    return (
      <div className="App">
        Project Management
        <Projects projects={this.state.projects}/>
        <AddProject addProject={this.handleAddProject.bind(this)}/>
      </div>
    );
  }
}

export default App;
