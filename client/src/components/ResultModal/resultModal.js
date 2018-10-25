import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Modal from '@material-ui/core/Modal';
import Button from '@material-ui/core/Button';
import axios from "axios";

function rand() {
    return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
    const top = 50 + rand();
    const left = 50 + rand();

    return {
        top: `${top}%`,
        left: `${left}%`,
        transform: `translate(-${top}%, -${left}%)`,
    };
}

const styles = theme => ({
    paper: {
        position: 'absolute',
        width: theme.spacing.unit * 50,
        backgroundColor: theme.palette.background.paper,
        boxShadow: theme.shadows[5],
        padding: theme.spacing.unit * 4,
    },
});

class SimpleModal extends Component {
    
    componentDidUpdate(prevProps){
        console.log(prevProps)
        console.log(this.props.userId)
        if(prevProps.userId !== this.props.userId){
            console.log(this.props.userid);
        }
    }
    
    //saving a history to db
    saveHistory(){
        // yelp link
        //name
        //address
        let link = document.getElementById("link").getAttribute('href')
        let name = document.getElementById("placeName").innerText
        let address = document.getElementById("address").innerText
        console.log(link)
        console.log(name)
        console.log(address)

    }
    render() {
        const { classes } = this.props;
        
        return (
            <div>
                {/* submit button/random button placement */}
                {/* <Button onClick={this.props.handleOpen}>Randomize!</Button> */}
                <Modal
                    aria-labelledby="simple-modal-title"
                    aria-describedby="simple-modal-description"
                    open={this.props.open}
                    onClose={this.props.handleClose}
                >
                    <div style={getModalStyle()} className={classes.paper}>
                    <Typography variant="h6" id="modal-title">
                        Randomly Chosen For You!
                    </Typography>
                    <Typography variant="subtitle1" id="simple-modal-description">
                        <h3 id="placeName">{this.props.resultName}</h3>
                        <ul style={{listStyle: 'none'}} id='result' data-id={this.props.userId}>
                            <li id="rating">Rating: {this.props.resultRating}</li>
                            <li id="address">Address: {this.props.resultAddress1}</li>
                            <li id="phone">Phone: {this.props.resultPhone}</li>
                            <li id="price">Price: {this.props.resultPrice}</li>
                            <li id="linkspot"><a id ="link" href={this.props.resultUrl} target="_blank">Yelp Link</a></li>
                        </ul>
                    </Typography>
                    <button onClick={this.props.saveFavorites}>Favorite</button>
                        <SimpleModalWrapped />
                    </div>
                </Modal>
            </div>
        );
    }
}

SimpleModal.propTypes = {
    classes: PropTypes.object.isRequired,
};

// We need an intermediary variable for handling the recursive nesting.
const SimpleModalWrapped = withStyles(styles)(SimpleModal);

export default SimpleModalWrapped;
