import React from "react";
import Loader from "./Loader";
import ShowDetail from "./ShowDetail";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      login: "",
      location: "",
      isLoading: true
    };
  }

  /* Non-fetch methods */

  // Sets an async Timeout by instantiating a new Promise object
  sleep = milliseconds => {
    return new Promise(resolve => setTimeout(resolve, milliseconds));
  };

  // The await keyword causes the code to pause at that line leaving the other code in application to execute
  wait = async milliseconds => {
    await this.sleep(milliseconds);
    this.setState({
      name: "Redwulf",
      login: "beach-bum-wulf",
      location: "California",
      isLoading: false
    });
  };

  /* Fetch method using GitHub API */

  getGitHubInfo() {
    fetch("https://api.github.com/users/a-canlas")
      .then(data => data.json())
      .then(data => {
        this.setState({
          name: data.name,
          location: data.location,
          login: data.login,
          isLoading: false
        });
      })
      .catch(err => console.log(err));
  }

  componentDidMount() {
    this.wait(2000);
    // this.getGitHubInfo();
  }

  render() {
    let { name, login, location } = this.state;
    const details = { name, location, login };
    return this.state.isLoading ? <Loader /> : <ShowDetail details={details} />;
  }
}

export default App;
