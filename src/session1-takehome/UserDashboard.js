import React from "react";
import axios from "axios";

class UserDashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userData: null,
      error: false,
      showLable: false
    };
  }

  handleClick = async (id) => {
    try {
      const response = await axios.get(`https://reqres.in/api/users/${id}`);
      this.setState({
        userData: response.data.data,
        error: false,
        showLable: false
      });
    } catch (error) {
      this.setState({
        userData: null,
        error: true,
        showLable: true
      });
    }
  };

  render() {
    const { userData, error, showLable } = this.state;

    return (
      <div className="container">
        <div className="buttons">
          <button onClick={() => this.handleClick(1)}>1</button>
          <button onClick={() => this.handleClick(2)}>2</button>
          <button onClick={() => this.handleClick(3)}>3</button>
          <button onClick={() => this.handleClick(100)}>100</button>
        </div>
        {showLable && (
          <ul className="list">
            <li className="list-item">Email</li>
            <li className="list-item">Name</li>
          </ul>
        )}

        {userData && (
          <div className="user-data">
            <p className="email">Email: {userData.email}</p>
            <p className="name">
              Name: {`${userData.first_name} ${userData.last_name}`}
            </p>
            <img src={userData.avatar} alt="Avatar" className="avatar" />
          </div>
        )}

        {error && <div className="alert">{alert("Failed to Fetch Data")}</div>}

        {!userData && !error && (
          <img
            src="https://example.com/placeholder-image.jpg"
            alt="Not Available"
            className="placeholder-image"
          />
        )}
      </div>
    );
  }
}

export default UserDashboard;
