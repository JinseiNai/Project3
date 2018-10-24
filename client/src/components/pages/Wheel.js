// page where it shows selection of yelp api results and randomly picks one
import React, { Component } from "react";
import axios from "axios"
import Winwheel from 'winwheel'
import SimpleModalWrapped from "../ResultModal/resultModal"
import Header from "../Header/Header";

class Wheel extends Component {
    // functions here
    // state work
    constructor() {
        super()
        this.state = {
            randomPlaceIndex: 0,
            city: "",
            yelpResults: "",
            randomResult: "",
            open: false,
            resultLocation:"",
            myWheel : new Winwheel({
                'numSegments' : 0
            })
        }
        this.yelpHandler = this.yelpHandler.bind(this)
        // this.consolelogstate = this.consolelogstate.bind(this)
        // Colors for the wheel segments
        this.colors = ['orange', 'red', 'blue', 'green', 'yellow', 'purple', 'pink', 'skyblue', 'teal', 'peach', 'tan']
    }

    // modal
    handleOpen = () => {
        // let statecopy = JSON.parse(JSON.stringify(this.state))
        // statecopy.open = true
        // console.log(statecopy)
        // this.setState({
        //     randomPlaceIndex: statecopy.randomPlaceIndex,
        //     yelpResults: statecopy.yelpResults,
        //     randomResult: statecopy.randomResult,
        //     resultLocation: statecopy.resultLocation,
        //     open: statecopy.open
        // });
        this.setState({
            open: true
        })
    };

    handleClose = () => {
        this.setState({ open: false });
    };

    // When spin button is clicked
    // Start the spin animation
    // then get result of indicated pointer
    spinBtn() {
        this.state.myWheel.startAnimation();
        console.log(this.state.myWheel)
        setTimeout(function() {
            let result = this.state.myWheel.getIndicatedSegment();
            console.log(result)
            let business = this.state.yelpResults.filter(place => place.name === result.text)
            this.setState({
                randomResult: business[0],
                resultLocation: business[0].location.address1,
                open: true
            })
            console.log(this.state.randomResult)
            console.log(this.state.yelpResults)
            console.log(business)
            console.log(this.state.resultLocation)
        }.bind(this), 3500)
    }

    // random number generator between 1-9
    // when plugging into place picker function yelpResults[parseInt(randomPlaceIndex)-1]
     handleRandomIndex() {
        //  let randomIndex = Math.floor(Math.random() * 10);
        //  this.setState({ randomPlaceIndex: randomIndex });
        //  console.log(this.state.randomPlaceIndex);
        return Math.floor(Math.random() * 10);
     }

     componentDidMount() {
        //  this.handleRandomIndex();
         this.yelpHandler();
     }

    // yelp api work
     yelpHandler() {
        // replace san diego with city user ask for
         console.log("grabbing yelp info")
         let number = this.handleRandomIndex();
        console.log(number)

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
                fillStyle: this.colors[Math.floor(Math.random() * this.colors.length)],
                text: business.name,
                strokeStyle: 'white'
            }))
            this.setState({
                yelpResults: response.data.businesses,
                randomResult: response.data.businesses[number],
                resultLocation: response.data.businesses[number].location.address1,
                myWheel : new Winwheel({
                    'numSegments' : numSeg,
                    'segments' : names,
                    'textFontSize' : 14,
                    'textDirection' : 'reversed',
                    'lineWidth' : 8,
                    'centerY' : 250,
                    'animation' : {
                        'type' : 'spinToStop',
                        'duration' : 3,
                        'spins' : 8
                    },
                    'pins' : true
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

    // consolelogstate (){
    //     console.log(this.state.yelpResults)
    // }
  
    render() {
        return (
            <div align="center">
                <Header />
                <canvas id='canvas' width='500' height='500'></canvas>
                {/* <button onClick={() => this.spinBtn()}>Spin</button> */}
                <div style={{paddingTop:50}}>
                    <button type="button" onClick={() => this.spinBtn()}  
                    className="btn btn-primary mt-3 ml-4 btn-lg">
                    Spin</button>
                </div>
                <SimpleModalWrapped open={this.state.open} handleClose={this.handleClose} handleOpen={this.handleOpen} resultName={this.state.randomResult.name}
                    resultRating={this.state.randomResult.rating}
                    resultAddress1={this.state.resultLocation}
                    resultPhone={this.state.randomResult.phone}
                    resultUrl={this.state.randomResult.url} 
                    resultPrice = {this.state.randomResult.price}/>
            </div>
        )
    }
}
export default Wheel;
