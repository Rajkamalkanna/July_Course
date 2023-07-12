import axios from "axios";
import React, { Component } from "react";

class CDUpdateActivity extends Component {
  constructor(props) {
    super(props);
    this.state = { email: "" };
  }

  fetchEmail = async () => {
    try {
      const response = await axios.get(
        `https://reqres.in/api/users/${this.props.userId}`
      );
      this.setState({
        email: response.data.data.email
      });
    } catch (error) {}
  };
  async componentDidMount() {
    await this.fetchEmail();
  }

  async componentDidUpdate(prevProps, prevState) {
    console.log("Component updated");
    // TODO - Add logic to make API call if userId prop changed
    if (prevProps.userId !== this.state.userId) {
      await this.fetchEmail();
    }
  }

  render() {
    return (
      <div>
        <h2>{this.state.email}</h2>
      </div>
    );
  }
}

export default CDUpdateActivity;
