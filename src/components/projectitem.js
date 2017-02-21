import React, { Component } from 'react';


class Projectitem extends Component {
  render() {
    console.log(this.props)
    return (
    <li className="Projects">
      {this.props.project.title} - {this.props.project.deadline}
    </li>
    );
  }
}

export default Projectitem;
