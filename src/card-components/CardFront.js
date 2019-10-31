import React, { Component } from 'react';

export default class CardFront extends Component {

  // This component should have one prop, which should be used to apply a background image

  render() {
    return (
      <div className="card-front" style={{backgroundImage: `url(${this.props.poster})`}}>
      </div>
    )
  }
}
