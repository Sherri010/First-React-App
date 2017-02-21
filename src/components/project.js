import React, { Component } from 'react';
import Projectitem from './projectitem';

class Projects extends Component {
  render() {
    let projectItems;
    console.log("project list:",this.props.projects)
    if(this.props.projects){
      projectItems = this.props.projects.map(project=>{
      return (
           <Projectitem key={project.title}  project={project} />
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
