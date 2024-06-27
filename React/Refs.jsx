/**
 * Refs provide a way to access DOM nodes or React elements created in the render method.
 * In the typical React dataflow, props are the only way that parent components interact with their children. To modify a child, you re-render it with new props. However, 
 * there are a few cases where you need to imperatively modify a child outside of the typical dataflow. 
 * The child to be modified could be an instance of a React component, or it could be a DOM element.
 */

// You can add a ref to your component by importing the useRef Hook from React:
import { useRef } from 'react';

// Inside your component, call the useRef Hook and pass the initial value that you want to reference as the only argument. 
// For example, here is a ref to the value 0:
const ref = useRef(0);

/**
 * useRef returns an object like this:
{ 
    current: 0 // The value you passed to useRef
}
*/

/**
 * You can access the current value of that ref through the ref.current property. 
 * This value is intentionally mutable, meaning you can both read and write to it. 
 * It’s like a secret pocket of your component that React doesn’t track. 
 * (This is what makes it an “escape hatch” from React’s one-way data flow—more on that below!)
 */


export default function Counter() {
  let ref = useRef(0);

  function handleClick() {
    ref.current = ref.current + 1;
    alert('You clicked ' + ref.current + ' times!');
  }

  return (
    <button onClick={handleClick}>
      Click me!
    </button>
  );
}
