/* eslint-disable no-useless-constructor */
import React from "react";
import TextField from '@mui/material/TextField';
import Button from "@mui/material/Button";

class ExampleOne extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {
            name: 'Sameer',
            score: 10,

        }
    }

    render() {
        return (<div>Player Name Is {this.state.name} Score is {this.state.score}, Car name Is {this.props.car} 
        <TextField label="Filled success" variant="outlined" size = "small" color="success" focused />
        <TextField id="password" label="Password" size='small' variant="outlined" />
        <Button variant="contained">Next</Button>
        </div>);
    }
}

export default ExampleOne;
