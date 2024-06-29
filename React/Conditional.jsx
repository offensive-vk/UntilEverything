/**
 * In React, you can create distinct components that encapsulate behavior you need. Then, you can render only some of them, depending on the state of your application.
 * Conditional rendering in React works the same way conditions work in JavaScript. 
 * Use JavaScript operators like if or the conditional operator to create elements representing the current state, and let React update the UI to match them.
 */

function Item({ name, isPacked }) {
    if (isPacked) {
      return <li className="item">{name} ✔</li>;
    }
    return <li className="item">{name}</li>;
}
  
export default function PackingList() {
    return (
        <section>
        <h1>Sally Ride's Packing List</h1>
        <ul>
            <Item 
            isPacked={true} 
            name="Space suit" 
            />
            <Item 
            isPacked={true} 
            name="Helmet with a golden leaf" 
            />
            <Item 
            isPacked={false} 
            name="Photo of Tam" 
            />
        </ul>
        </section>
    );
}