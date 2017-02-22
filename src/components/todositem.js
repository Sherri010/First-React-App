import React, { Component } from 'react';


class TodoItem extends Component {

  render() {
    console.log(this.props)
    return (
    <li className="Todos">
     <strong>  {this.props.todo.title} </strong>
    </li>
    );
  }
}

TodoItem.propTypes ={
  todos : React.PropTypes.object
}
export default TodoItem;
