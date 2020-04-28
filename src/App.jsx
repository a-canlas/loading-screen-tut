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

  sleep = milliseconds => {
    return new Promise(resolve => setTimeout(resolve, milliseconds));
  };

  wait = async (milliseconds = 2000) => {
    await this.sleep(milliseconds);
    this.setState({
      name: "Anastasia",
      login: "matcha",
      location: "California",
      isLoading: false
    });
  };

  componentDidMount() {
    this.wait();
  }

  render() {
    let name = "Anastasia";
    let location = "California";
    let login = "matcha";
    const details = { name, location, login };
    return this.state.isLoading ? <Loader /> : <ShowDetail details={details} />;
  }
}

export default App;
