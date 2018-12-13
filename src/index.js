// Import the React and ReactDOM libraries
import React from 'react';
import ReactDOM from 'react-dom';

// Create a react component
const App = () => {
    // const buttonText = "Click Me!"; // OK to reference in JSX
    // const buttonNums = 12345; // OK to reference in JSX
    // const buttonArrays = ["Hi", "There"]; // OK to reference in JSX
    const buttonText = { text: 'Click Me!' }; // ERROR: NOT OK to reference in JSX because this is an object.
    // We are not allowed to take a JS Object and reference it inside JSX, but you can refer to its child text property.
    const labelText = "Enter Name: ";

    return (
        <div>
            <label className="label" htmlFor="name">{labelText}</label>
            <input id="name" type="text"/>
            <button style={{ backgroundColor: 'blue', color: 'white'}}>{buttonText.text}</button>
        </div>
    );
};

// Take the react component and show it on the screen.
ReactDOM.render(
    <App />,
    document.querySelector('#root')
);
