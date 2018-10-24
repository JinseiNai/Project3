import React from 'react';
import { Link } from "react-router-dom";
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import MenuIcon from '@material-ui/icons/Menu';

class SimpleMenu extends React.Component {
  state = {
    anchorEl: null,
  };

  handleClick = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleClose = () => {
    this.setState({ anchorEl: null });
  };

  render() {
    const { anchorEl } = this.state;

    return (
      <div>
        <Button
          aria-owns={anchorEl ? 'simple-menu' : null}
          aria-haspopup="true"
          onClick={this.handleClick}
        >
          <MenuIcon />
        </Button>
        <Menu
          id="simple-menu"
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={this.handleClose}
        >
          <Link to='/favorites'>
            <MenuItem onClick={this.handleClose}>          
            Favorites</MenuItem>
          </Link>

          <Link to='/filter'>
            <MenuItem onClick={this.handleClose}>Filter</MenuItem>
          </Link>

          <Link to='/wheel'>
            <MenuItem onClick={this.handleClose}>Randomizer</MenuItem>
          </Link>

          {/* <MenuItem onClick={this.handleClose}>Restaurant List</MenuItem> */}

          {/* <MenuItem onClick={this.handleClose}>Create a List</MenuItem> */}
        </Menu>
      </div>
    );
  }
}

export default SimpleMenu;
