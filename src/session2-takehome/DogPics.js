import React, { Component } from "react";
import axios from "axios";

class DogPics extends Component {
  constructor(props) {
    super(props);
    this.state = {
      breed: "random", // Default breed is set to "random"
      imageUrl: "" // Empty image URL initially
    };
  }

  componentDidMount() {
    this.fetchRandomImg(); // Fetch a random dog image on component mount
  }

  fetchRandomImg = async () => {
    try {
      let response;
      if (this.state.breed === "random") {
        // Fetch a random dog image if the selected breed is "random"
        response = await axios.get("https://dog.ceo/api/breeds/image/random");
      } else {
        // Fetch a random dog image of the selected breed
        response = await axios.get(
          `https://dog.ceo/api/breed/${this.state.breed}/images/random`
        );
      }
      this.setState({
        imageUrl: response.data.message // Update the state with the fetched image URL
      });
    } catch (error) {
      alert("Fetch to failed API"); // Show an error message if the API request fails
    }
  };

  handleBreedChange = (event) => {
    const selectedBreed = event.target.value;
    this.setState(
      {
        breed: selectedBreed // Update the state with the selected breed
      },
      () => {
        this.fetchRandomImg(); // Call the fetchRandomImg function after updating the state
      }
    );
  };

  handleNextClick = () => {
    this.fetchRandomImg(); // Fetch a new random dog image or breed-specific image on "Next" button click
  };

  render() {
    const { breed, imageUrl } = this.state;
    return (
      <div>
        <h2>Dogs Cute Pictures:</h2>
        <label>
          Select the breed:
          <select value={breed} onChange={this.handleBreedChange}>
            <option value="random">Random</option>
            <option value="beagle">Beagle</option>
            <option value="boxer">Boxer</option>
            <option value="dalmatian">Dalmatian</option>
            <option value="husky">Husky</option>
          </select>
        </label>
        <br />
        <img
          src={imageUrl}
          alt="dogs pics"
          style={{ width: "350px", height: "300px" }}
        />
        <br />
        <button onClick={this.handleNextClick}>Next</button>
      </div>
    );
  }
}

export default DogPics;
