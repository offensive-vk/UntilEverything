/**
 * In React.js, a component is a reusable, self-contained piece of the user interface. 
 * Components can be thought of as the building blocks of a React application, allowing you to split the UI into independent, reusable pieces. 
 * There are two main types of components in React: class components and functional components.
 */


/**
 * 1. Functional Components
 * Functional components are simpler and are written as JavaScript functions. 
 * They can accept props (input) and return React elements, which describe what should appear on the screen.
 * @param {*} props 
 * @returns {Hello, your name}
 */
function Welcome(props) {
    return <h1>Hello, {props.name}</h1>;
}
  
/**
 * 2. Class Components
 * Class components are more feature-rich and are written using ES6 classes. 
 * They can have local state and lifecycle methods.
 */
class WelcomeClass extends React.Component {
    render() {
      return <h1>Hello, {this.props.name}</h1>;
    }
}
  