import React, { Component } from "react";
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';
import PropTypes from 'prop-types';
import TextField from '@material-ui/core/TextField';
import axios from 'axios'
import { Redirect } from 'react-router-dom'

const styles = theme => ({
    root: {
        justifyContent: 'center',
        margin: 0,
        textAlign: 'center',
    },
    container: {
      display: 'flex',
      flexWrap: 'wrap',
    },
    textField: {
      marginLeft: theme.spacing.unit,
      marginRight: theme.spacing.unit
    },
    dense: {
      marginTop: 16,
    },
    menu: {
      width: 200,
    },
    rightIcon: {
        marginLeft: theme.spacing.unit,
    },
});


  
class Login extends Component {
    constructor() {
        super()
        this.state = {
            username: "",
            password: "",
            redirectTo: null
        }
    }

    handleChange = name => event => {
        this.setState({
          [name]: event.target.value,
        });
      };

    handleSubmit = (e) => {
        e.preventDefault();
        console.log('username: ' + this.state.username)
        console.log('password: ' + this.state.password)
        // Logic to do a post
        this.setState({
            redirectTo: '/'
        })
    }

    render() {
        const { classes } = this.props;
        if (this.state.redirectTo) {
            return <Redirect to={{ pathname: this.state.redirectTo }} />
        }

        return (
            <div>
                <Grid container spacing={24} className={ classes.root }>
                    <Grid item xs={12} className={ classes.root } style={{ padding: 0 }}>
                    <h4 style={{ marginBottom: 0 }}>Login</h4>
                    </Grid>
                    <form className={ classes.container } noValidate autoComplete="off" onSubmit={ this.handleSubmit }>
                        <TextField
                            id="outlined-username"
                            label="Username"
                            className={ classes.textField }
                            value={this.state.name}
                            onChange={this.handleChange('username')}
                            margin="normal"
                            variant="outlined"
                        />
                        <TextField
                            id="outlined-password-input"
                            label="Password"
                            className={ classes.textField }
                            type="password"
                            autoComplete="current-password"
                            onChange={this.handleChange('password')}
                            margin="normal"
                            variant="outlined"
                        />
                        <button>Login</button>
                    </form>
                </Grid>
            </div>
        )
    }
}

Login.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Login)