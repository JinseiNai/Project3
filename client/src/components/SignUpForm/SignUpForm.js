import React, { Component } from "react";
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import PropTypes from 'prop-types';
import TextField from '@material-ui/core/TextField';
import SubmitBtn from '../SignupButton/index';

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
        const { classes } = this.props;

        return (
            <div>
                <Grid container spacing={24} className={ classes.root }>
                    <Grid item xs={12} className={ classes.root } style={{ padding: 0 }}>
                    <h4 style={{ marginBottom: 0 }}>Sign Up</h4>
                    </Grid>
                    <form className={ classes.container } noValidate autoComplete="off">
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
                            margin="normal"
                            variant="outlined"
                        />
                        <SubmitBtn />
                    </form>
                </Grid>
            </div>
        )
    }
}

SignUp.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SignUp)