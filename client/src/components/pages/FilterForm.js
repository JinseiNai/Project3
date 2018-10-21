import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import Input from '@material-ui/core/Input';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import FilledInput from '@material-ui/core/FilledInput';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import NativeSelect from '@material-ui/core/NativeSelect';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';


// imports for clickboxes
import FormLabel from '@material-ui/core/FormLabel';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import Checkbox from '@material-ui/core/Checkbox';


const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',    
    flexDirection: 'column',
    alignItems: 'center',
    padding: '5%',
    paddingTop: '2%',
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
  },
  dense: {
    marginTop: 16,
  },
  menu: {
    width: 200,
  },

  // styles for select
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    flexGrow: 1,
  },
  formControl: {
    margin: theme.spacing.unit,
    minWidth: 120,
    maxWidth:150,
  },
  selectEmpty: {
    marginTop: theme.spacing.unit * 1,
  },

  // style for clickbox
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  formControl: {
    margin: theme.spacing.unit * 1,
  },

// styles for button
  button: {
    margin: theme.spacing.unit,
  },
  input: {
    display: 'none',
  },
});

class FilterForm extends Component {
    constructor() {
        super()
        this.state = {

        // this.handleSubmit = this.handleSubmit.bind(this)
        // this.handleChange = this.handleChange.bind(this)       
      };
    }

    handleChange = name => event => {
        this.setState({ [name]: event.target.value });
    };
    // handleSubmit(event) {
    
    render() {
      const { classes } = this.props;

      const { price1, price2, price3, price4 } = this.state;
      const error = Object.values(this.state).filter(v => v).length !== 2;
    
        return (
          <form className={classes.container} noValidate autoComplete="off">

        <TextField
          id="outlined-full-width"
          label="Location"
          style={{ margin: 8 }}
          placeholder="Location"
          helperText="Input location!"
          // fullWidth
          margin="normal"
          variant="outlined"
          InputLabelProps={{
            shrink: true,
          }}
        />
        <TextField
          id="outlined-full-width"
          label="Cuisine"
          style={{ margin: 8 }}
          placeholder="Cuisine"
          helperText="What you want to eat!"
          // fullWidth
          margin="small"
          variant="outlined"
          InputLabelProps={{
            shrink: true,
          }}
        />

          {/* Selects */}
         {/* <FormControl variant="outlined" className={classes.formControl}>
          <InputLabel
            ref={ref => {
              this.labelRef = ReactDOM.findDOMNode(ref);
            }}
            htmlFor="outlined-price-native-simple">
          Price
          </InputLabel>
          <Select
            native
            value={this.state.price}
            onChange={this.handleChange('price')}
            input={
              <OutlinedInput
                name="Price"
                labelWidth={this.labelRef ? this.labelRef.offsetWidth : 0}
                id="outlined-price-native-simple"
              />
            }
          >
            <option value="" />
            <option value={10}>$</option>
            <option value={20}>$$</option>
            <option value={30}>$$$</option>
          </Select>
        </FormControl> */}

        {/* checkbox group */}
        
        <FormControl component="fieldset" className={classes.formControl} value="center">
          <FormLabel component="legend">Price</FormLabel>
          <FormGroup row>
            <FormControlLabel
              control={
                <Checkbox checked={price1} onChange={this.handleChange('price1')} value="price1" />
              }
              label="$"
            />
            <FormControlLabel
              control={
                <Checkbox checked={price2} onChange={this.handleChange('price2')} value="price2" />
              }
              label="$$"
            />
              <FormControlLabel
              control={
                <Checkbox
                  checked={price3}
                  onChange={this.handleChange('price3')}
                  value="price3"
                />
              }
              label="$$$"
            />
             <FormControlLabel
              control={
                <Checkbox
                  checked={price4}
                  onChange={this.handleChange('price4')}
                  value="price4"
                />
              }
              label="$$$$"
            />
          </FormGroup>
          {/* <FormHelperText>Be careful</FormHelperText> */}
        </FormControl>

        {/* fav's button */}
        <Button variant="outlined" className={classes.button}>
        Submit
        </Button>        

        {/* <FormControlLabel
          control={
            <Checkbox
              checked={this.state.checkedA}
              onChange={this.handleChange('checkedA')}
              value="checkedA"
            />
          }
          label="Secondary"
        /> */}

        {/* <Checkbox
          checked={this.state.checkedA}
          onChange={this.handleChange('checkedA')}
          value="checkedA"
        /> */}

     </form> 
    )
  }
}

FilterForm.propTypes = {
  classes: PropTypes.object.isRequired,
};


export default withStyles(styles)(FilterForm);