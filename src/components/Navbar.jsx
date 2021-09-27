import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";
import Logo from "../assets/img/LogoKTGHorizontal.svg";
import { useHistory } from "react-router-dom";

export const NavigationBar = () => {
    let history = useHistory();

    const daftar = () => {
        history.push('/daftar');
    };

    const beranda = () => {
        history.push('/');
    };

    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container className="navbar-beranda">
                <Navbar.Brand onClick={beranda}>
                    <Image className="logo" src={Logo} fluid/>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="">BERANDA</Nav.Link>
                        <Nav.Link href="">TENTANG</Nav.Link>
                        <Nav.Link href="">KEGIATAN</Nav.Link>
                        <Nav.Link href="">KONTAK</Nav.Link>
                    </Nav>
                    <Nav className="masuk-daftar">
                        <Nav.Link href="">MASUK</Nav.Link>
                        <Nav.Link className="button-daftar" onClick={daftar}>DAFTAR</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}