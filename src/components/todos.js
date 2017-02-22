import React, { Component } from 'react';
import TodoItem from './todositem';

class Todos extends Component {

  render() {
    let todosItem;
    console.log("todo list:",this.props.projects)
    if(this.props.todos){
      todosItem = this.props.todos.map(todo=>{
      return (
           <TodoItem key={todo.title}  todo={todo} />
       );
     });
    }
    //console.log(Projectitem);
    return (
      <div className="Todos">
        <h3> Todos </h3>
        {todosItem}
      </div>
    );
  }
}


Todos.propTypes ={
  todos : React.PropTypes.array
}
export default Todos;
