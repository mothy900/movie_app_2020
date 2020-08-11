import React from "react";
//import Proptypes from "prop-types";
import axios from "axios";

class App extends React.Component {
  state = {
    isLoading: true,
    movie: [],
  };
  getmovie = async () => {
    const movies = await axios.get("https://yts-proxy.now.sh/list_movies.json");
  };
  async componentDidMount() {
    this.getmovie();
  }
  render() {
    const { isLoading } = this.state;
    return <div>{isLoading ? "Loading..." : "We are ready"}</div>;
  }
}
export default App;
