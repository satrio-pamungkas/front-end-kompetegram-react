import { NavigationBar } from '../components/Navbar';
import { Theme } from "../styles/Theme";
import Photo from "../assets/img/mail.svg";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import GroupIcon from '@mui/icons-material/Groups';
import Twib from "@mui/icons-material/InsertPhoto";
import { CssBaseline, ThemeProvider, Button, Link, Alert } from '@mui/material';

export const Success = () => {
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
                                    <h2 className="subtitle-form">KOMPETEGRAM Batch 2 - Tahun 2021</h2>
                                    <div style={{ textAlign: 'center' }}>
                                        <img className="success-photo" src={Photo} alt=""/>
                                    </div>
                                    <h4 className="desc-form">Selanjutnya, silakan bergabung pada grup WhatsApp berikut !</h4>
                                    <Link underline="none" href="https://chat.whatsapp.com/KdZfAOoc2kBAQwLU0ZIRsr" target="_blank" rel="noopener noreferrer">
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
                                    <h4 className="desc-form">Terakhir, bersifat <b>OPSIONAL</b>. Untuk memeriahkan dan menambah semangat anggota baru dalam kegiatan registrasi, kami telah
                                        menyediakan TWIBBON yang dapat diunggah di akun Instagram masing-masing dan tag @kompetegram</h4>
                                    <Link underline="none" href="https://twb.nz/ktg-batch-2" target="_blank" rel="noopener noreferrer">
                                        <Button
                                            className="button-twibbon"
                                            variant="contained"
                                            color="warning"
                                            fullWidth
                                            startIcon={<Twib style={{ width: '25', height: '25'}} />}
                                        >
                                            PASANG TWIBBON (OPSIONAL)
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