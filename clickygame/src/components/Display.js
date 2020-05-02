import React, { Component } from "react";
import Images from "./Images";

class Display extends Component {

    state = {
        clicked: false
    }

    clickAlert = (event) => {
        console.log(this.state)
        this.setState({ clicked: true })
        console.log(this.state)

        // console.log(event.target.id)
        
    }

    render() {
        return (

            Images.map( singlePick => (

                <img id={singlePick.id} key={singlePick.id} src={singlePick.src} alt={singlePick.alt} onClick={this.clickAlert} />)
            )
        );
    }

};

export default Display;