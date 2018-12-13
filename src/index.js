// Import the React and ReactDOM libraries
import React from 'react';
import ReactDOM from 'react-dom';

// Create a react component
const App = () => {
    // const buttonText = "Click Me!"; // OK to reference in JSX
    // const buttonNums = 12345; // OK to reference in JSX
    const buttonArrays = ["Hi", "There"]; // OK to reference in JSX

    return (
        <div>
            <label className="label" htmlFor="name">Enter Name:</label>
            <input id="name" type="text"/>
            <button style={{ backgroundColor: 'blue', color: 'white'}}>{buttonArrays}</button>
        </div>
    );
};

// Take the react component and show it on the screen.
ReactDOM.render(
    <App />,
    document.querySelector('#root')
);
