import React from "react";

export default class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: "something"
    };
  }

  handleChange = (event) => {
    this.setState({
      data: event.target.value
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    alert("A name was submitted: " + this.state.data);
  };

  render() {
    return (
      <div>
        <p>{this.state.data}</p>
        <form onSubmit={this.handleSubmit}>
          <label>
            Data:
            <input
              type="text"
              name="data"
              value={this.state.data}
              onChange={this.handleChange}
            />
          </label>

          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}
