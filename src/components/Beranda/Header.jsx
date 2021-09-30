import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Nav from "react-bootstrap/Nav";
import Countdown from "react-countdown";

export const Header = () => {
    let registrationDate = new Date("October 10, 2021 23:59:59")

    return (
        <Row className="header">
            <Col sm={2}></Col>
            <Col sm={8}>
                <Row>
                    <h1 className="title-header">Ayo Bergabung Bersama Kami dan Kembangkan Teknologi Pemrograman</h1>
                </Row>
                <Row>
                    <h2 className="subtitle-header">Dunia pemrograman sangatlah luas, kebermanfaatannya <br/>
                    tidaklah terhitung jumlahnya saat ini</h2>
                </Row>
                <Row className="button-container">
                    <Nav.Link className="button">DAFTAR ANGGOTA</Nav.Link>
                </Row>
                <Row className="countdown-container">
                    <h3 className="countdown-info">
                        Hitung Mundur menuju Penutupan Registrasi
                    </h3>
                    <h2 className="countdown-header">
                        <Countdown date={registrationDate} />
                    </h2>
                </Row>
            </Col>
            <Col sm={2}></Col>
        </Row>
    )
}