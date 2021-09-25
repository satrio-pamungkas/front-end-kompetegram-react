import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";

export const NavigationBar = () => {
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container className="navbar-beranda">
                <Navbar.Brand href="#home">
                    <Image src="../assets/img/LogoKTGHorizontal.svg" fluid/>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#features">BERANDA</Nav.Link>
                        <Nav.Link href="#pricing">TENTANG</Nav.Link>
                        <Nav.Link href="#pricing">PENGURUS</Nav.Link>
                        <Nav.Link href="#pricing">KEGIATAN</Nav.Link>
                        <Nav.Link href="#pricing">KONTAK</Nav.Link>
                    </Nav>
                    <Nav>
                        <Nav.Link href="#deets">More deets</Nav.Link>
                        <Nav.Link eventKey={2} href="#memes">
                            Dank memes
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}