// page where it shows selection of yelp api results and randomly picks one
import React, { Component } from "react";
import axios from "axios"

class Wheel extends Component {
    // functions here
    // state work
    constructor() {
        // might not need if state is localled scoped
        super()
        this.state = {
            randomPlaceIndex: "",
            city: "",
            yelpResults: []
        }
    }
    // random number generator between 1-9
    // when plugging into place picker function yelpResults[parseInt(randomPlaceIndex)-1]
    handleRandomIndex() {
        this.setState({ randomPlaceIndex: Math.floor(Math.random() * 10) });
        console.log(this.state.randomPlaceIndex);
    }

    // yelp api work
    yelpHandler() {
        // replace san diego with city user ask for
        console.log('axios not working');
        axios.get(
            {
                url: "https://api.yelp.com/v3/businesses/search?location=sandiego,ca&categories=restaurants&sort_by=rating&radius=16094&limit=10",
                
                headers: {
                    "Authorization": "Bearer VY_Xbz8ZMKV_ehIMtzo3_HN4TEEnRKNtfLhPLdbEYTl8bYvyvzKf_7qUXdiA8yYR1EVEVnzIqEfEzjwEZq9QjCiWGKJT2Wet3nHDaEHQEQhB-J2K0tDFpbGrXtuyW3Yx"
                }
            }
        )
        .then(response => {
            console.log(response.data)
        })
        .catch(error => {
            console.log(error.response)
        })
            
        

    
    }


    // api results max 10

    render() {
        return (
        <div>
            <button type="Submit" onClick={this.yelpHandler} >Submit</button>
        </div>
        )
    }
}

export default Wheel