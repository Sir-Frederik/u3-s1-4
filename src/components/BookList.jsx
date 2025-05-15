import { Component } from "react";
import { Container, FormControl, Row } from "react-bootstrap";
import SingleBook from "./SingleBook";

class BookList extends Component {
  state = {
    searchQuery: "",
  };

  render() {
    return (
      <Container>
        <h2>Libri Disponibili</h2>

        <FormControl
          className="w-50 my-4"
          type="text"
          placeholder="Cerca un titolo di un libro"
          value={this.state.searchQuery}
          onChange={(e) => this.setState({ searchQuery: e.target.value })}
        />

        <Row xs={1} sm={2} md={3} lg={4} xxl={6} className="g-*">
          {this.props.genre
            .filter((book) => book.title.toLowerCase().includes(this.state.searchQuery.toLowerCase()))
            .map((book) => (
              <SingleBook key={book.asin} book={book} />
            ))}
        </Row>
      </Container>
    );
  }
}

export default BookList;
