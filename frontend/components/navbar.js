import { Container, Navbar, Nav } from "react-bootstrap";

export default function MainNavbar(props) {
  return (
    <Navbar bg="dark" variant="dark">
      <Container fluid className="px-3">
        <Navbar.Brand href="#home">
          <img
            alt=""
            src="/logo.png"
            width="140"
            className="d-inline-block align-top"
          />
        </Navbar.Brand>
        <Nav className="ml-auto">
          
        </Nav>
      </Container>
    </Navbar>
  );
}
