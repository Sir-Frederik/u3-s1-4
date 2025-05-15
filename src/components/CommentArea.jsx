import { Component } from "react";
import CommentsList from "./CommentsList";

class CommentArea extends Component {
  state = {
    comments: [],
  };
  fetchComments = async () => {
    const response = await fetch("https://striveschool-api.herokuapp.com/api/comments/" + this.props.id, {
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2ODI2MjIyYjFlYmU4MjAwMTUwOWYzNzciLCJpYXQiOjE3NDczMjk1ODAsImV4cCI6MTc0ODUzOTE4MH0.gpPi8dByz-QvYcsX-AurC0_k6BO-cePZgsOj1vQ3guk",
      },
    });
    if (response.ok) {
      const comments = await response.json();
      //   console.log(comments);
      this.setState({ comments });
      // scritto comments una sola volta xkè omonime. altrimenti:" comments: comments"
    }
  };

  componentDidMount() {
    this.fetchComments();
  }
  render() {
    return (
      <div>
        <h6 className="mt-2">Commenti : </h6>
        <CommentsList comments={this.state.comments} />
      </div>
    );
  }
}
export default CommentArea;
