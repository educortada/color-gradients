import React, { Component } from 'react';
import './App.css';

import dataGradients from './data/gradients'

import Form from './components/Form'
import Card from './components/Card';


class App extends Component {

  state = {
    gradientsList: [...dataGradients]
  }

  handleAddCard = (newCard) => {
    const newGradient = [newCard.colorFrom, newCard.colorTo]
    this.setState(
      { gradientsList: [...this.state.gradientsList, newGradient] }
    )
  }

  renderCards() {
    return (
      this.state.gradientsList.map((item, index) => {
        console.log(item)
        return <Card key={`id-${index}`} colorFrom={item[0]} colorTo={item[1]} />
      })
    )
  }

  render() {
    return (
      <div>
        <header>
          <section>
            <Form addNewCard={this.handleAddCard} />
          </section>
        </header>
        <main>
          <section className="cards">
            {this.renderCards()}
          </section>
        </main>
      </div>
    );
  }
}

export default App;
