import { NavigationBar } from '../components/Navbar';
import { Theme } from "../styles/Theme";
import Photo from "../assets/img/mail.svg";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import GroupIcon from '@mui/icons-material/Groups';
import { CssBaseline, ThemeProvider, Button, Link, Alert } from '@mui/material';

export const JoinGroup = () => {
    return (
        <>
        <NavigationBar/>
        <ThemeProvider theme={Theme}>
            <CssBaseline/>
            <Row className="page">
                <Col sm={2}></Col>
                <Col style={{ paddingRight: '0px'}} xs={12} sm={8}>
                    <Card className="card-success">
                        <Card.Body>
                            <Row>
                                <Col md={2}>
                                </Col>
                                <Col md={8} className="col-tengah">
                                    <h1 className="title-form">Selamat Anda Berhasil Terdaftar</h1>
                                    <h2 className="subtitle-form">Build a RESTful API with Codeigniter</h2>
                                    <div style={{ textAlign: 'center' }}>
                                        <img className="success-photo" src={Photo} alt=""/>
                                    </div>
                                    <h4 className="desc-form">Selanjutnya, untuk informasi selengkapnya silakan bergabung pada grup WhatsApp berikut !</h4>
                                    <Link underline="none" href="https://chat.whatsapp.com/I5XivX1T1Pj8tFC4HJC86J" target="_blank" rel="noopener noreferrer">
                                        <Button
                                            className="button-join"
                                            variant="contained"
                                            color="warning"
                                            fullWidth
                                            startIcon={<GroupIcon style={{ width: '30', height: '30'}} />}
                                        >
                                            BERGABUNG GRUP WHATSAPP
                                        </Button>
                                    </Link>
                                    <Alert style={{ marginTop: '20px', marginBottom: '30px' }} variant="outlined" severity="warning">Harap tidak menyebarkan link undangan</Alert>
                                </Col>
                                <Col md={2}>
                                </Col>
                            </Row>
                        </Card.Body>
                    </Card>
                </Col>
                <Col sm={2} ></Col>
            </Row>
        </ThemeProvider>
        </>
    );
}