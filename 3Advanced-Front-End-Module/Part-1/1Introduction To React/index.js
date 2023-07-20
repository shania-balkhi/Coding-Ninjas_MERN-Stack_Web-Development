// JAVASCRIPT
// const heading = document.createElement("h2");
// heading.textContent = "Hello World!";
// heading.className /*we dont use "class", bcz "class" is a reserved keyword in JS*/ = "header";
// document.getElementById("root").append(heading);

// console.log("JavaScript element: ", heading);

// REACT WITH JS
// const reactHeading = React.createElement("h1", {classname : "head", id : "reactHead", children: "HelloReact!"});

// REACT WITH JSX

const jsxHeading = <>
                        <h1 className="head">About React</h1>
                        <p>This is created by JSX</p>
                        <p>Features of React</p>
                        <ul>
                            <li>High Performance</li>
                            <li>Fast</li>
                            <li>Composable</li>
                        </ul>
                    </> 

ReactDOM.createRoot(document.getElementById("root")).render(jsxHeading);

// console.log("React element: ", reactHeading);
