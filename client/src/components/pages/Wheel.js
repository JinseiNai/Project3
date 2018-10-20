// page where it shows selection of yelp api results and randomly picks one
import React, { Component } from "react";
<<<<<<< HEAD
import axios from "axios";
// import logo from "./colorwheel.png"
=======
import axios from "axios"
import Winwheel from 'winwheel'
>>>>>>> d454e9e61dc521710cf05f1e1a76fc0472f1662c

class Wheel extends Component {
    // functions here
    // state work
    constructor() {
        super()
        this.state = {
            randomPlaceIndex: 0,
            city: "",
            yelpResults: [],
            myWheel : new Winwheel({
                'numSegments' : 0
            })
        }
        this.yelpHandler = this.yelpHandler.bind(this)
        this.consolelogstate = this.consolelogstate.bind(this)

    }

    // Update myWheel according to yelpResults
    updateWheel() {
        this.setState({
            myWheel : new Winwheel({
                'numSegments' : (this.setState.yelpResults.length)
            })
        })
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

    // componentDidUpdate(prevProps, prevState) {
    //     console.log(prevState)
    //     if (this.state.yelpResults.length !== prevState.yelpResults.length) {
    //         this.setState({
    //             myWheel : new Winwheel({
    //                 'numSegments' : (this.setState.yelpResults.length)
    //             })
    //         })
    //     }
    // }

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
            let numSeg = response.data.businesses.length;
            let names = response.data.businesses.map(business => ({
                fillStyle: 'red',
                text: business.name
            }))
            this.setState({
                yelpResults: response.data.businesses,
                myWheel : new Winwheel({
                    'numSegments' : numSeg,
                    'segments' : names,
                    'textFontSize' : 14,
                    'textDirection' : 'reversed'
                })
            },
            () => {
                console.log(this.state.yelpResults)
                console.log(this.state)
            })
            
            if (response.data.businesses) {
                console.log("you did it")
            }
        });
    }

    consolelogstate (){
        console.log(this.state.yelpResults)
        // this.updateWheel()
    }
  
    render() {
        return (
            <div align="center">
            {/* <img src={logo} width="100" height="100" ></img> */}
            <div  style={{paddingTop:110}}>
                <button type="button" onClick={this.consolelogstate}  
                className="btn btn-primary mt-3 ml-4 btn-lg">
                Submit</button>
            </div>
            </div>
        )
    }
}

export default Wheel