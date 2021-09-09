import React, { Component } from "react";
import Weather from "./Weather";

type GeolocationState = {
    latitude: number,
    longitude: number
}

class Geolocation extends Component<{}, GeolocationState> {
    constructor(props: any) {
        super(props)
        this.state = {
            latitude: 0,
            longitude: 0
        }
    }

    getLocation = () => {
            navigator.geolocation.getCurrentPosition(this.setCoords);
    }
    setCoords = (position: any) => {
        this.setState({
            latitude: position.coords.latitude,
            longitude: position.coords.longitude
        })
    }
    componentDidMount() {
        this.getLocation()
    }

    render() {
        return (
            <div>
                <Weather lat={this.state.latitude} lon={this.state.longitude}/>
            </div>
        )
    }
}

export default Geolocation;