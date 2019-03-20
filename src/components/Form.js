import React, { Component } from 'react';

class Form extends Component {

  state = {
    colorFrom: 'color from',
    colorTo: 'color to',
  }

  handleInput = (event) => {
    this.setState(
      { [event.target.name]: event.target.value }
    )
  }

  handleSubmit = (event) => {
    event.preventDefault()
    this.props.addNewCard(this.state)
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input onChange={this.handleInput} type="text" name="colorFrom" value={this.state.colorFrom} />
        <input onChange={this.handleInput} type="text" name="colorTo" value={this.state.colorTo} />
        <button type="submit">Add new gradient</button>
      </form>
    )
  }
}

export default Form