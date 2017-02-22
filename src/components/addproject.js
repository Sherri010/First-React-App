import React, { Component } from 'react';

class AddProject extends Component {
  constructor(){
    super();
    this.satate={
      newProject:[]
    }
  }
  static defaultProps ={
    categories:["web","mobile","design"]
  }

  handleSubmit(e){
       e.preventDefault();
    console.log(this.refs.title.value);

  }

  render() {
    let cats = this.props.categories.map(category =>{
       return <option key={category} value={category}>{category}</option>
     });
    return (
    <div>
      <h3> Add new project </h3>
      <form onSubmit={this.handleSubmit.bind(this)}>
        <div>
          <label>Title</label> <br />
          <input type="text" ref="title" />
        </div>
        <div>
          <label>Cat</label> <br />
          <select ref="category">
             {cats}
          </select>
        </div>
        <input type="submit" value="Submit" />
      </form>
    </div>
    )}
}

export default AddProject;
