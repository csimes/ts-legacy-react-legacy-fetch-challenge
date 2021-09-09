import React, { Component } from "react";

type GeolocationState = {
  latitude: number,
  longitude: number
}

type GeolocationProps = {
//comment out?
}

class Geolocation extends Component<GeolocationProps,GeolocationState> {
  constructor(props: GeolocationProps) {
    super(props)
    this.state = { 
      latitude: 0,
      longitude: 0
    }
}

  componentDidMount() {
    navigator.geolocation.getCurrentPosition(function(position) {
      console.log("Latitude is :", position.coords.latitude);
      console.log("Longitude is :", position.coords.longitude);

      
    });


    
  }

  getLocation = () => {
      navigator.geolocation.getCurrentPosition(function(this: any, position) {
      this.setState = ({
        latitude: position.coords.latitude,
        longitude: position.coords.longitude
      })
    })

  }


  render() { 
    return (  
      <div>
        {this.state.latitude},{this.state.longitude}
      </div>
    );
  }
}

export default Geolocation;