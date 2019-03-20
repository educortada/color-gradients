import React, { Component } from 'react';
import './App.css';

import Card from './components/Card';
import dataGradients from './data/gradients'

class App extends Component {

  renderCards() {
    return (
      dataGradients.map((item, index) => {
        return <Card key={`id-${index}`} colorFrom={item[0]} colorTo={item[1]} />
      })
    )
  }

  render() {
    return (
      <div>
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
