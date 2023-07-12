import axios from "axios";
import React, { Component } from "react";

class CDMountActivity extends Component {
  constructor(props) {
    super(props);

    this.state = { email: "" };
  }
  componentDidMount = async () => {
    try {
      const response = await axios.get("https://reqres.in/api/users/1");
      this.setState({
        email: response.data.data.email
      });
    } catch (error) {}
  };
  render() {
    return (
      <div>
        <h2>{this.state.email}</h2>
      </div>
    );
  }
}

export default CDMountActivity;
