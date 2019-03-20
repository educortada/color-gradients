import React, { Component } from 'react';

class Card extends Component {
  render() {
    
    // CSS
    const cardGradient = {
      height: '160px',
      width: '170px',
      borderRadius: '12px 12px 0px 0px',
      backgroundImage: `linear-gradient(135deg, ${this.props.colorFrom}, ${this.props.colorTo})`
    }
    const cardColorFrom = {
      color: `${this.props.colorFrom}`,
      display: 'block',
      padding: '0'
    }
    const cardColorTo = {
      color: `${this.props.colorTo}`
    }

    // Card
    return (
      <article className="card" >
        <div className="card-gradient" style={cardGradient}>
        </div>
        <div className="card-description">
          <div className="card-color-from" style={cardColorFrom}>
            {this.props.colorFrom}
          </div>
          <div className="card-color-to" style={cardColorTo}>
            {this.props.colorTo}
          </div>
        </div>
      </article>
    )
  }
}

export default Card;