const CommentsList = (props) => {
  return (
    <div>
      {" "}
      {props.comments.map(() => (
        <p> Elemento:</p>
      ))}
    </div>
  );
};

export default CommentsList;
