import { Badge } from "react-bootstrap";

const CommentsList = (props) => {
  return (
    <div>
      {" "}
      {props.comments.map((comment) => (
        <div key={comment._id}>
          <h6> Commento n. {props.comments.length} </h6>
          <p> {comment.author} </p> <Badge bg="dark">{comment.rate}</Badge>
          <p> {comment.comment}</p>
        </div>
      ))}
    </div>
  );
};

export default CommentsList;
