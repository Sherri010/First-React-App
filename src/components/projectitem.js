import React, { Component } from 'react';


class Projectitem extends Component {
  render() {
    console.log(this.props)
    return (
    <li className="Projects">
     <strong>  {this.props.project.title} </strong> - {this.props.project.category}
    </li>
    );
  }
}

export default Projectitem;
