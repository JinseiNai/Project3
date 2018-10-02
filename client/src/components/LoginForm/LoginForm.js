import React, { Component } from "react";
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';

class Login extends Component {
    state = {
        username: "",
        password: ""
    }

    handleChange = name => event => {
        this.setState({
          [name]: event.target.value,
        });
      };

    render() {
        return (
            <div>
                <Grid container spacing={24}>
                    <Grid item xs={12}>
                        <form>
                        <TextField
                            id="outlined-username"
                            label="Username"
                            className="textfield"
                            value={this.state.name}
                            onChange={this.handleChange('name')}
                            margin="normal"
                            variant="outlined"
                        />
                        
                        <TextField
                            id="outlined-password-input"
                            label="Password"
                            className="textfield"
                            type="password"
                            autoComplete="current-password"
                            margin="normal"
                            variant="outlined"
                        />
                        </form>
                    </Grid>
                </Grid>
            </div>
        )
    }
}

export default Login