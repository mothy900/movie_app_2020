import React from "react";
//import Proptypes from "prop-types";

class App extends React.Component {
  state = {
    isLoading: true,
    movie: [],
  };
  componentDidMount() {
    setTimeout(() => {
      this.setState({
        isLoading: false,
      });
    }, 6000);
  }
  render() {
    const { isLoading } = this.state;
    return <div>{isLoading ? "Loading..." : "We are ready"}</div>;
  }
}
export default App;
