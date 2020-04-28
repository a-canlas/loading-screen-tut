import React from "react";
import Loader from "./Loader";
import ShowDetail from "./ShowDetail";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true
    };
  }
  render() {
    let name = "Anastasia";
    let title = "Nerd";
    let birthday = "June 10";
    const details = { name, title, birthday };
    return this.state.isLoading ? <Loader /> : <ShowDetail details={details} />;
  }
}

export default App;
