import React from 'react';

function ExampleTwo(props) {

    const [name, setName] = React.useState("Shravan")
    const [score, setScore] = React.useState(8)

    return(<div>Player name is {name}, Score is {score}, Bike is {props.bike}</div>)
}

export default ExampleTwo;