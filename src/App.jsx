import "./App.css";
import MyNav from "./components/MyNav";
import Footer from "./components/Footer";
import Welcome from "./components/Welcome";
import fantasy from "./data/fantasy.json";
import BookList from "./components/BookList";
import scifi from "./data/scifi.json";
import history from "./data/history.json";
import romance from "./data/romance.json";
import horror from "./data/horror.json";
import { Component } from "react";
import { Button } from "react-bootstrap";

// import BookList from "./components/AllTheBooks";

class App extends Component {
  state = {
    collection: scifi,
  };
  render() {
    return (
      <>
        <MyNav brandName="Libreria Alì BlaBla"></MyNav>
        <div className=" container d-flex gap-1 my-3 ">
          <Button variant="primary" onClick={() => this.setState({ collection: scifi })}>
            Scifi
          </Button>
          <Button variant="success" onClick={() => this.setState({ collection: fantasy })}>
            Fantasy
          </Button>
          <Button variant="danger" onClick={() => this.setState({ collection: history })}>
            History
          </Button>
          <Button variant="dark" onClick={() => this.setState({ collection: horror })}>
            Horror
          </Button>
          <Button variant="warning" onClick={() => this.setState({ collection: romance })}>
            Romance
          </Button>
        </div>
        <BookList genre={this.state.collection} />
        <Footer />
      </>
    );
  }
}

export default App;
