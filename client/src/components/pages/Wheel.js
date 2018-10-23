// page where it shows selection of yelp api results and randomly picks one
import React, { Component } from "react";
import axios from "axios"
import Winwheel from 'winwheel'

<<<<<<< HEAD
// class Wheel extends Component {
//     // functions here
//     // state work
//     constructor() {
//         super()
//         this.state = {
//             randomPlaceIndex: 0,
//             city: "",
//             yelpResults: [],
//             myWheel : new Winwheel({
//                 'numSegments' : 0
//             })
//         }
//         this.yelpHandler = this.yelpHandler.bind(this)
//         this.consolelogstate = this.consolelogstate.bind(this)

//     }

    // Update myWheel according to yelpResults
    // updateWheel() {
    //     this.setState({
    //         myWheel : new Winwheel({
    //             'numSegments' : (this.setState.yelpResults.length)
    //         })
    //     })
    // }
=======
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
        // Colors for the wheel segments
        this.colors = ['orange', 'red', 'blue', 'green', 'yellow', 'purple']
    }
>>>>>>> f48f8e5c27465fcdce335a510e954e92e5d30230

    // random number generator between 1-9
    // when plugging into place picker function yelpResults[parseInt(randomPlaceIndex)-1]
    // handleRandomIndex() {
    //     let randomIndex = Math.floor(Math.random() * 10);
    //     this.setState({ randomPlaceIndex: randomIndex });
    //     console.log(this.state.randomPlaceIndex);
    // }

    // componentDidMount() {
    //     this.handleRandomIndex();
    //     this.yelpHandler();
    // }

    // yelp api work
    // yelpHandler() {
        // replace san diego with city user ask for
    //     console.log("grabbing yelp info")

<<<<<<< HEAD
    //     let url = "/api/search/";
    //     axios.get(url, {
    //         params: {
    //             categories: "restaurants",
    //             location: "San Diego, CA",
    //             limit: 10,
    //             sort_by: "rating",
    //             radius: 16094,
    //             open_now: true
    //         }
    //     }).then(response => {
    //         let numSeg = response.data.businesses.length;
    //         let names = response.data.businesses.map(business => ({
    //             fillStyle: 'red',
    //             text: business.name
    //         }))
    //         this.setState({
    //             yelpResults: response.data.businesses,
    //             myWheel : new Winwheel({
    //                 'numSegments' : numSeg,
    //                 'segments' : names,
    //                 'textFontSize' : 14,
    //                 'textDirection' : 'reversed'
    //             })
    //         },
    //         () => {
    //             console.log(this.state.yelpResults)
    //             console.log(this.state)
    //         })
=======
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
                myWheel : new Winwheel({
                    'numSegments' : numSeg,
                    'segments' : names,
                    'textFontSize' : 14,
                    'textDirection' : 'reversed',
                    'lineWidth' : 8,
                    'centerY' : 250,
                    'animation' : {
                        'type' : 'spinToStop',
                        'duration' : 5,
                        'spins' : 8
                    }
                })
            },
            () => {
                console.log(this.state.yelpResults)
                console.log(this.state)
            })
>>>>>>> f48f8e5c27465fcdce335a510e954e92e5d30230
            
    //         if (response.data.businesses) {
    //             console.log("you did it")
    //         }
    //     });
    // }

    // consolelogstate (){
    //     console.log(this.state.yelpResults)
        // this.updateWheel()
    // }
  
<<<<<<< HEAD
//     render() {
//         return (
//             <div align="center">
//                 {/* <img src={logo} width="100" height="100" ></img> */}
//                 <canvas id='canvas' width='1080' height='500'></canvas>
//                 <div  style={{paddingTop:110}}>
//                     <button type="button" onClick={this.consolelogstate}  
//                     className="btn btn-primary mt-3 ml-4 btn-lg">
//                     Submit</button>
//                 </div>
//             </div>
//         )
//     }
// }
=======
    render() {
        return (
            <div align="center">
                {/* <img src={logo} width="100" height="100" ></img> */}
                <canvas id='canvas' width='500' height='500'></canvas>
                {/* <button onClick={this.myWheel.startAnimation}>Spin</button> */}
                <div  style={{paddingTop:110}}>
                    <button type="button" onClick={this.consolelogstate}  
                    className="btn btn-primary mt-3 ml-4 btn-lg">
                    Submit</button>
                </div>
            </div>
        )
    }
}
>>>>>>> f48f8e5c27465fcdce335a510e954e92e5d30230

// export default Wheel