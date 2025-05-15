import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import scifi from "../data/scifi.json";
import fantasy from "../data/fantasy.json";
import history from "../data/history.json";
import romance from "../data/romance.json";
import horror from "../data/horror.json";
import { Col, Container, Row } from "react-bootstrap";
import { Component } from "react";

class BookList extends Component {
  state = {
    collection: scifi,
  };
  render() {
    return (
      <Container>
        <h2> Libri Disponibili </h2>
        <div className="d-flex gap-1 my-2">
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
        <Row xs={1} sm={2} md={3} lg={4} xxl={6} className="g-*">
          {this.state.collection.map((book) => (
            <Col key={book.asin}>
              <Card style={{ width: "18rem" }}>
                <Card.Img variant="top" src={book.img} />
                <Card.Body>
                  <Card.Title>{book.title}</Card.Title>
                  <Card.Text>{book.category}</Card.Text>
                  <Card.Text>{book.price}$</Card.Text>
                  <Button variant="primary">Acquista</Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    );
  }
}

export default BookList;
