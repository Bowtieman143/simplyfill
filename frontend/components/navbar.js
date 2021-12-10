import { Container, Navbar, Nav } from 'react-bootstrap'

export default function MainNavbar(props) {
    return (
        <Navbar bg="dark" variant="dark">
            <Container fluid className="px-0">
                <Navbar.Brand href="#home">Navbar</Navbar.Brand>
                <Nav className="me-auto">
                    <Nav.Link href="#home">Home</Nav.Link>
                    <Nav.Link href="#features">Features</Nav.Link>
                    <Nav.Link href="#pricing">Pricing</Nav.Link>
                </Nav>
            </Container>
      </Navbar>
    )
}