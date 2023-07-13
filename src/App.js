// import React from "react";
// import Counter, { Footer } from "./Counter.js";
// import { Header as Head } from "./Counter.js";

// // Parent = Class Based React Component
// class App extends React.Component {
//   render() {
//     // diff is a props variable here
//     return (
//       <div>
//         <Head />
//         <Counter diff={1} />
//         <Counter diff={10} />
//         <Footer />
//       </div>
//     );
//   }
// }

// export default App;

//___________________________________

// Controlled Components FORM

// import React from "react";
// import Form from "./Form.js";

// // Parent = Class Based React Component
// class App extends React.Component {
//   render() {
//     // diff is a props variable here
//     return (
//       <div>
//         <Form />
//       </div>
//     );
//   }
// }

// export default App;
//__________________________________
//session 3
//__________________________________
// import React from "react";
// import UserDashboard from "./session1-takehome/UserDashboard";
// import "./styles.css";

// export default function App() {
//   return (
//     <div className="App">
//       <UserDashboard />
//     </div>
//   );
// }

//__________________________________
// import React from "react";
// import CDMountActivity from "./CDMountActivity";

// class App extends React.Component {
//   render() {
//     return (
//       <div>
//         <CDMountActivity />
//       </div>
//     );
//   }
// }

// export default App;

//__________________________________

// import React, { Component } from "react";
// import CDUpdateActivity from "./CDUpdateActivity";

// export default class App extends Component {
//   constructor(props) {
//     super(props);
//     this.state = { userId: 1 };
//   }

//   componentDidUpdate() {
//     console.log("App.js - componentDidUpdate called");
//   }

//   render() {
//     return (
//       <div>
//         <input
//           type="number"
//           value={this.state.userId}
//           onChange={(e) => this.setState({ userId: e.target.value })}
//           min={1}
//         />
//         <CDUpdateActivity userId={this.state.userId} />
//       </div>
//     );
//   }
// }
//__________________________________
// import React from "react";
// import Greeting from "./Greeting";

// function App() {
//   return (
//     <div>
//       <Greeting name={"Raj"} />
//     </div>
//   );
// }

// export default App;
//__________________________________
// Session2-TakeHome
//__________________________________

// import React from "react";
// import DogPics from "./session2-takehome/DogPics";

// export default class App extends React.Component {
//   render() {
//     return (
//       <div>
//         <DogPics />
//       </div>
//     );
//   }
// }

//__________________________________
// Session3-TakeHome
//__________________________________

import React from "react";
import BookAppointment from "./session3-takehome/BookAppointment";

function App() {
  return (
    <>
      <BookAppointment />
    </>
  );
}

export default App;
