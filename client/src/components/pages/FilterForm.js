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
  },
  formControl: {
    margin: theme.spacing.unit,
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing.unit * 2,
  },

  // style for clickbox
  root: {
    display: 'flex',
  },
  formControl: {
    margin: theme.spacing.unit * 3,
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

      const { gilad, jason, antoine } = this.state;
      const error = Object.values(this.state).filter(v => v).length !== 2;
    
        return (
          <form className={classes.container} noValidate autoComplete="off">

        <TextField
          id="outlined-full-width"
          label="Location"
          style={{ margin: 8 }}
          placeholder="Location"
          helperText="Input location!"
          fullWidth
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
          fullWidth
          margin="normal"
          variant="outlined"
          InputLabelProps={{
            shrink: true,
          }}
        />

         <FormControl variant="outlined" className={classes.formControl}>
          <InputLabel
            ref={ref => {
              this.labelRef = ReactDOM.findDOMNode(ref);
            }}
            htmlFor="outlined-price-native-simple"
          >
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
        </FormControl>

<FormControl component="fieldset" className={classes.formControl}>
          <FormLabel component="legend">Assign responsibility</FormLabel>
          <FormGroup>
            <FormControlLabel
              control={
                <Checkbox checked={gilad} onChange={this.handleChange('gilad')} value="gilad" />
              }
              label="Gilad Gray"
            />
            <FormControlLabel
              control={
                <Checkbox checked={jason} onChange={this.handleChange('jason')} value="jason" />
              }
              label="Jason Killian"
            />
                        <FormControlLabel
              control={
                <Checkbox
                  checked={antoine}
                  onChange={this.handleChange('antoine')}
                  value="antoine"
                />
              }
              label="Antoine Llorca"
            />
          </FormGroup>
          <FormHelperText>Be careful</FormHelperText>
        </FormControl>

        <FormControlLabel
          control={
            <Checkbox
              checked={this.state.checkedA}
              onChange={this.handleChange('checkedA')}
              value="checkedA"
            />
          }
          label="Secondary"
        />

        <Checkbox
          checked={this.state.checkedA}
          onChange={this.handleChange('checkedA')}
          value="checkedA"
        />

     </form> 
    )
  }
}

FilterForm.propTypes = {
  classes: PropTypes.object.isRequired,
};


export default withStyles(styles)(FilterForm);