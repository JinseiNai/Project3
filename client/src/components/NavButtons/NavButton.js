import React from "react";
import Button from "@material-ui/core/Button";
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
    button: {
      margin: theme.spacing.unit,
    },
    input: {
      display: 'none',
    },
  });

function NavButton(props){
    const { classes } = props;
    return (
        // <button>{props.label}</button>
        <Button variant="outlined" color="primary" className={classes.button}>
            {props.label}
        </Button>
    )
}
NavButton.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(NavButton)