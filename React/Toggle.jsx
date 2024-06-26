import React from 'react';

export class Toggle extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isOn: true };

    // This binding is necessary to make `this` work in the callback
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(state => ({
      isOn: !state.isOn
    }));
  }

  render() {
    return (
      <button onClick={this.handleClick}>
        {this.state.isOn ? 'ON' : 'OFF'}
      </button>
    );
  }
}
