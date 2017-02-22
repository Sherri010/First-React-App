import React, { Component } from 'react';
import uuid from "uuid";
import $ from "jquery";
import Projects from './components/project'
import AddProject from './components/addproject.js'
import Todos from './components/todos.js';
import './App.css';

class App extends Component {
  constructor(){
      super();
    this.state = {
      project:[],
      todos :[]
    }
 }

 getTodos(){
   $.ajax({
     url:"https://jsonplaceholder.typicode.com/todos",
     dataType:"json",
     cache:"false",
     success:function(data){
       this.setState({todos:data},function(){
         console.log(this.state);
       });
     }.bind(this),
     error:function(xhr, status,error){
       console.log(error);
     }
   })
 }
getProjects(){
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
]});
}

  componentWillMount(){
    this.getProjects();
    this.getTodos();
    }

componentDidMount(){
    this.getTodos();

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
       <Todos  todos={this.state.todos}/>
      </div>
    );
  }
}

export default App;
