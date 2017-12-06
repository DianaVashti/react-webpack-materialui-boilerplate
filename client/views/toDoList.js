import React, {Component}  from 'react'

export default class ToDoList extends Component {
  constructor(props){
    super(props)
  }

  render() {
    return (
      <ul>
        {this.props.items.map(item => (
          <li key={item.id}>{item.text}</li>
        ))}
      </ul>
    );
  }
}
