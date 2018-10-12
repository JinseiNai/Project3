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
        console.log("grabbing yelp info")
        
        let url = "/api/search/";
        axios.get(url, {
            params: {
                categories: "restaurants",
                location: "San Diego, CA",
                limit: 10,
                sort_by: "rating",
                radius: 16094,
                open_now: true
            }
        }).then(function(response){
            console.log(response.data.businesses)
            
            this.setState({
                yelpResults: 
            })
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