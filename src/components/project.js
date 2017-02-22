import React, { Component } from 'react';
import Projectitem from './projectitem';

class Projects extends Component {
  deleteProject(id){
    this.props.onDelete(id);
  }
  render() {
    let projectItems;
    console.log("project list:",this.props.projects)
    if(this.props.projects){
      projectItems = this.props.projects.map(project=>{
      return (
           <Projectitem  onDelete={this.deleteProject.bind(this)} key={project.title}  project={project} />
       );
     });
    }
    //console.log(Projectitem);
    return (
      <div className="Projects">
        {projectItems}
      </div>
    );
  }
}

export default Projects;
