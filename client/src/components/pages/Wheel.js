// page where it shows selection of yelp api results and randomly picks one
import React, { Component } from "react";
import axios from "axios"

class Wheel extends Component {
    // functions here
    // state work
    constructor() {
        super()
        this.state = {
            randomPlaceIndex: "",
            city: "",
            yelpResults: ""
        }
        this.yelpHandler = this.yelpHandler.bind(this)
        this.consolelogstate = this.consolelogstate.bind(this)

    }
    // random number generator between 1-9
    // when plugging into place picker function yelpResults[parseInt(randomPlaceIndex)-1]
    handleRandomIndex() {
        let randomIndex = Math.floor(Math.random() * 10);
        this.setState({ randomPlaceIndex: randomIndex });
        console.log(this.state.randomPlaceIndex);
    }
    componentDidMount() {
        this.handleRandomIndex();
        this.yelpHandler();
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
        }).then(response => {
            this.setState({
                yelpResults: response.data.businesses
            },
            () => {
                console.log(this.state.yelpResults)
            })
            
            if (response.data.businesses) {
                console.log("you did it")
            }
        });
    }

    consolelogstate (){
        console.log(this.state.yelpResults)
        console.log(this.state.randomPlaceIndex)
        console.log(this.state.yelpResults[this.state.randomPlaceIndex].alias)
    }
  
    render() {
        return (
            <div>
                <button type="button" onClick={this.consolelogstate} >Submit</button>
            </div>
        )
    }
}

export default Wheel