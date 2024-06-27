/**
 * Events are actions or occurrences that happen in the browser that the system can respond to. 
 * These can include anything from a user clicking a button, to a page loading, to a user pressing a key. 
 * Event handling is crucial for creating interactive web applications.
 */

import React from 'react';

const App = () => {
  const handleClick = () => {
    alert('Button was clicked!');
  };

  return (
    <div>
      <button onClick={handleClick}>Click me</button>
    </div>
  );
};

export default App;

// OR

class App extends React.Component {
  handleClick = () => {
    alert('Button was clicked!');
  };

  render() {
    return (
      <div>
        <button onClick={this.handleClick}>Click me</button>
      </div>
    );
  }
}

export default App;

/**
 * In event handlers, you often need to access the event object to get information about the event. 
 * Here's an example that logs the event object:
 */

const App = () => {
  const handleClick = (event) => {
    console.log(event);
    alert('Button was clicked!');
  };

  return (
    <div>
      <button onClick={handleClick}>Click me</button>
    </div>
  );
};

export default App;
