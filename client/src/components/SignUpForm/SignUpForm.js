import React, { Component } from "react";
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
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
});



class SignUp extends Component {
    constructor() {
        super()
        this.state = {
            username: "",
            password: "",
            confirmPassword: "",
            redirectTo: null
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange = name => event => {
        this.setState({
            [name]: event.target.value,
        });
    };

    handleSubmit(event) {
        event.preventDefault()
        console.log(`${this.state.username} + ${this.state.password}`)
        // TODO - validate!
        axios
            .post('/auth/signup', {
                username: this.state.username,
                password: this.state.password
            })
            .then(response => {
                console.log(response)
                if (!response.data.errmsg) {
                    console.log('youre good')
                    
                    this.setState({
                        redirectTo: '/login'
                    })
                } else {
                    console.log('duplicate')
                }
            })
    }

    render() {
        const { classes } = this.props;
        if (this.state.redirectTo) {
            return <Redirect to={{ pathname: this.state.redirectTo }} />
        }

        return (
            <div>
                <style>{'body { background-color: skyblue; }'}</style>
                <Grid container spacing={27} className={classes.root}>
                    <Grid item xs={12} className={classes.root} style={{ padding: 0 }}>
                        <h4 style={{ marginBottom: 0 }}>Sign Up</h4>
                    </Grid>
                    <form className={classes.container} noValidate autoComplete="off" onSubmit={this.handleSubmit}>
                    <div>
                        <TextField
                            id="outlined-username"
                            label="Username"
                            className={classes.textField}
                            value={this.state.name}
                            onChange={this.handleChange('username')}
                            margin="normal"
                            variant="outlined"
                        />
                        </div>
                         </form>
                </Grid>
                <div align="center">
                        <TextField
                            id="outlined-password-input"
                            label="Password"
                            className={classes.textField}
                            type="password"
                            autoComplete="current-password"
                            onChange={this.handleChange('password')}
                            margin="normal"
                            variant="outlined"
                        />
                        </div>
                        <div align="center">
                        <button className="btn btn-outline-info mt-1 ml-1" >Sign Up</button>
                        </div>
            </div>
        )
    }
}

SignUp.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SignUp)