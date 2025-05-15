import Card from "react-bootstrap/Card";

import { Button, Col } from "react-bootstrap";
import { Component } from "react";
import CommentArea from "./CommentArea";

class SingleBook extends Component {
  state = {
    selected: false,
  };
  render() {
    return (
      <Col>
        <Card
          onClick={() => this.setState({ selected: !this.state.selected })}
          className="book-cover d-flex flex-column"
          style={{ borderWidth: 2, borderStyle: "solid", borderColor: this.state.selected ? "red" : "" }}
        >
          {/* mi salvo lo stato opposto dfi quello che trova, con !this.state.selected  */}
          <Card.Img variant="top" src={this.props.book.img} onClick={() => this.setState({ selected: !this.state.selected })} />
          <Card.Body variant="secondary">
            <Card.Title>{this.props.book.title} </Card.Title>
            <Card.Text>{this.props.book.category}</Card.Text>
            <Card.Text>{this.props.book.price}$</Card.Text>
            <Button variant="primary">Acquista</Button>
            {this.state.selected && <CommentArea />}
            {/* cortocircuito: se lo stato è falso, non si mette il componente */}
          </Card.Body>
        </Card>
      </Col>
    );
  }
}
export default SingleBook;
