import React from "react";
import ReactDOM from "react-dom";
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';

const styles = theme => ({
  btnSize: {
    width: 'auto'
  }
})

//import { Link } from 'react-router-dom'
//import Button from '@material-ui/core/Button';

//<Button component={Link} to="/LoginForm">
  //Link
//</Button>
class FavsButton extends React.Component {
  handleClick = () => {
    console.log('this is:', this);
  }

  render() {
    const { classes } = this.props;
    return (
      <button onClick={this.handleClick}
      className="btn btn-success mt-3">
        Favorites
      </button>
    );
  }
}

FavsButton.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(FavsButton);


