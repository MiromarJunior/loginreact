import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

function NavBar() {
    return (
        <Navbar bg="light" expand="lg" style={{ marginBottom: 20 }}>
            <Container>
                <Navbar.Brand href="#home">brunolctba</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
            </Container>
        </Navbar>
    );
}

export default NavBar;