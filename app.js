import React from "react";
import ReactDOM from 'react-dom/client';

// Episode - 03
// JSX (transpiled before it reaches the JS engine)
// the transpilation is done by PARCEL-> BABEL

// JSX -> React.createElement -> ReactElement-JS Object -> HTMLElement(render)

// React Element
const jsxHeading = (
    <h1 className="heading" tabIndex="5">
        Namaste React using JSX :)
    </h1>
);
// This is how a react element in rendered
// root.render(jsxHeading);

// React Functional Component -> A javascript function that returns some piece of JSX
// const HeadingComponent1 = () => <h1>Namaste React Functional Component</h1>

const TitleComponent = () => {
    return <h1 className="title">Namaste React Functional Title Component</h1>
}

const elem = <p>React Element</p>

const title = (
    <h1 className="title">
        {elem}
        Namaste React using JSX
    </h1>
)

// Component Composition -> Component inside another component
const HeadingComponent = () => {
    return <div className="container">
        {title}
        <TitleComponent />
        <h2>Namaste React Functional Heading Component</h2>
    </div>
}

// Both the above return functions are same 

console.log(jsxHeading); // object

const root = ReactDOM.createRoot(document.getElementById("root"));

// A Component must be wrapped with anuglar brackets to be rendered
root.render(<HeadingComponent />)



// Episode - 02
// const parent = React.createElement("div", {id: 'parent'}, [
//     React.createElement("div", {id: 'child1'},[
//         React.createElement("h1", {}, "This is the Namaste React Course"),
//         React.createElement("h2", {}, "I'm h2 tag")
//     ]),
//     React.createElement("div", {id: 'child2'},[
//         React.createElement("h1", {}, "I'm h1 tag"),
//         React.createElement("h2", {}, "I'm h2 tag")
//     ])
// ])


// const heading  = React.createElement("h1", {id:"heading"},  "Hello World from React");

// const root = ReactDOM.createRoot(document.getElementById('root'));

// root.render(heading);
// root.render(parent);



// Episode - 01
/*

<div id='parent'>
    <div id='child1'>
        <h1>I'm h1 tag</h1>
        <h2>I'm h2 tag</h2>
    </div>
    <div id='child2'>
        <h1>I'm h1 tag</h1>
        <h2>I'm h2 tag</h2>
    </div>
</div>
*/

// React Element is an object
// When the react element renders on to the the DOM it converts into html that the browser understands

// const parent = React.createElement("div", {id: 'parent'}, [
//     React.createElement("div", {id: 'child1'},[
//         React.createElement("h1", {}, "I'm h1 tag"),
//         React.createElement("h2", {}, "I'm h2 tag")
//     ]),
//     React.createElement("div", {id: 'child2'},[
//         React.createElement("h1", {}, "I'm h1 tag"),
//         React.createElement("h2", {}, "I'm h2 tag")
//     ])
// ])

// console.log(parent);

// const heading  = React.createElement("h1", {id:"heading"},  "Hello World from React");

// const root = ReactDOM.createRoot(document.getElementById('root'));

// root.render(heading);
// root.render(parent);