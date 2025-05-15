import { Alert, Container } from "react-bootstrap";

function Welcome({ alertColor = "info", alertContent = "Welcome", textContent }) {
  return (
    <>
      <Container>
        <Alert variant={alertColor}> {alertContent}</Alert>
        <p> {textContent}</p>
      </Container>
    </>
  );
}
export default Welcome;
