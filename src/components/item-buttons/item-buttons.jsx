import React, { Component } from 'react';
import './item-buttons.css';
import colors from '../helpers/colors';

export default class ItemButtons extends Component {
  state = { activeButton: 0 };

  render() {
    const { activeButton } = this.state;

    const buttons = colors.map((color, i) => {
      return (
        <div className={activeButton === i ? 'outer-circle' : ''} key={i}>
          <button
            onClick={() => this.setState({ activeButton: i })}
            style={{ backgroundColor: color }}
          />
        </div>
      );
    });

    return <div className="item__buttons">{buttons}</div>;
  }
}
