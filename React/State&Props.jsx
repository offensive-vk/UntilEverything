import React from 'react';
/**
 * Props: Short for properties, props are read-only inputs to a component. 
 * They allow data to be passed from a parent component to a child component.
 * @param {*} props 
 * @returns Hello
 */
function Welcome(props) {
    return <h1>Hello, {props.name}</h1>;
}
  
// Usage
<Welcome name="Alice" />


/**
 * State is a way to store and manage local data within a component. 
 * State can be changed, and when it is, the component re-renders to reflect those changes.
*/

class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = { date: new Date() };
  }

  componentDidMount() {
    this.timerID = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      date: new Date()
    });
  }

  render() {
    return (
      <div>
        <h1>Hello, world!</h1>
        <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
      </div>
    );
  }
}

export default Clock;

export function showClock() {
    return <Clock />
}
