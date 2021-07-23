import React, { Component } from "react";
import axios from "axios";
import Dropdown from "./Dropdown";

class VehicleTypeList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      vehicleTypes: []
    };
  }

  componentDidMount() {
    axios
      .get(
        "https://my-json-server.typicode.com/brian-anderson-iowa/interviewData/vehicleTypes"
      )
      .then((response) => {
        console.log(response);
        this.setState({ vehicleTypes: response.data });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    const { vehicleTypes } = this.state;
    return (
      <div>
        <Dropdown vehicleTypes={vehicleTypes} />
        List of Vehicle Types
        {vehicleTypes.length
          ? vehicleTypes.map((vehicleTypes) => (
              <div key={vehicleTypes.id}>
                {vehicleTypes.id} : {vehicleTypes.type}
              </div>
            ))
          : null}
      </div>
    );
  }
}

export default VehicleTypeList;
