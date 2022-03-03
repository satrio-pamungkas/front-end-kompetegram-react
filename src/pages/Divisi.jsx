import { NavigationBar } from '../components/Navbar';
import { Theme } from "../styles/Theme";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import { CssBaseline, ThemeProvider, TextField, Button, Typography, Alert } from '@mui/material';

import { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import ReCAPTCHA from 'react-google-recaptcha';
import * as Yup from 'yup';

export const Divisi = () => {

    const [problem, setProblem] = useState(null);
    const [data, setData] = useState();
    const [tokenKey, setTokenKey] = useState();
    const [buttonHide, setButtonHide] = useState(true);

    const validationSchema = Yup.object().shape({
        nim: Yup.string()
            .required('Nomor Induk Mahasiswa (NIM) wajib diisi')
            .min(7, 'Minimal adalah 7 digit')
            .max(9, 'Maksimal adalah 9 digit')
    });

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(validationSchema)
    });

    const onSubmit = formData => {
        formData.token = tokenKey;

        fetch('https://api.kompetegram.com/divisi', {
            method: 'POST',
            body: JSON.stringify(formData),
            headers: { 'Content-Type': 'application/json' },
        })
        .then((response) => 
            response.json()
        )
        .then((data) => {
            setProblem(false)
            setData(data.data.pengguna)
        })
        .catch((err) => {
            setProblem(true)
        })

        window.grecaptcha.reset();
        setButtonHide(true);

    }

    const onError = (errors, e) => console.log(errors, e);

    const handleToken = (token) => {
        setTokenKey(token);
        setButtonHide(false);
    }

    return (
        <>
            <NavigationBar/>
            <ThemeProvider theme={Theme}>
                <CssBaseline/>
                <Row className="page">
                    <Col sm={2} lg={3}></Col>
                    <Col style={{ paddingRight: '0px'}} xs={12} sm={8} lg={6}>
                        <Card className="card-divisi">
                            <Card.Body>
                                <Row>
                                    <h2 className="title-divisi">PENGUMUMAN PEMILIHAN DIVISI</h2>
                                    <h4 className="subtitle-divisi">KOMPETEGRAM 2021</h4>
                                    <hr/>
                                    <form className="form" onSubmit={handleSubmit(onSubmit, onError)}>
                                        <TextField
                                            label="Nomor Induk Mahasiswa (NIM)"
                                            variant="filled"
                                            color="warning"
                                            margin="dense"
                                            size="small"
                                            fullWidth
                                            {...register('nim')}
                                            style={{ marginTop: '10px', marginBottom: '20px'}}
                                            error={errors.nim ? true : false}
                                        />
                                        <Typography className="error-message" variant="inherit" color="error">
                                            {errors.nim?.message}
                                        </Typography>
                                        <ReCAPTCHA
                                            sitekey={process.env.REACT_APP_SITE_KEY}
                                            onChange={handleToken}
                                            theme="dark"
                                        />
                                        <Button
                                            disabled={buttonHide}
                                            name="button-submit"
                                            variant="contained"
                                            color="warning"
                                            type="submit"
                                            style={{ marginTop: '20px', marginBottom: '10px' }}
                                        >
                                            LIHAT HASIL
                                        </Button>
                                    </form>
                                </Row>

                                { problem === false && 
                                    <Row>
                                        <Card sx={{ minWidth: 275 }}>
                                            <Alert variant="outlined" severity="success" style={{ paddingTop: '20px'}}>
                                                ANGGOTA KOMPETEGRAM
                                                <hr/>
                                                <Typography className="detail-divisi">
                                                    <strong>Nama:</strong> {data?.nama}
                                                </Typography>
                                                <Typography className="detail-divisi">
                                                    <strong>Divisi:</strong> {data?.divisi}
                                                </Typography>
                                                <Typography className="detail-divisi">
                                                    <strong>Batch Angkatan:</strong> {data?.batch}
                                                </Typography>
                                                <hr/>
                                                <Typography className="info-divisi">
                                                    Silakan tunggu informasi grup masing-masing divisi, jika merasa tidak sesuai ekspetasi atau kemampuan divisinya
                                                    silakan untuk mengajukan <strong>permintaan perpindahan divisi</strong> dengan menghubungi pengurus
                                                </Typography>
                                                <br/>
                                            </Alert>
                                        </Card>
                                    </Row>
                                }

                                { problem === true && 
                                    <Row>
                                        <Card sx={{ minWidth: 275 }}>
                                            <Alert variant="outlined" severity="warning" style={{ paddingTop: '20px'}}>
                                                <Typography className="detail-divisi">
                                                    Nomor Induk Mahasiswa (NIM) <strong>belum mengikuti pemilihan divisi</strong> atau anda <strong>belum terdaftar keanggotaan</strong> KOMPETEGRAM 
                                                    silakan hubungi pengurus untuk melakukan sistem seleksi pemilihan divisi (<i>khusus anggota</i>)
                                                    <br/><br/>
                                                    Jika informasi ini salah, silakan hubungi pengurus untuk memvalidasi kembali
                                                </Typography>
                                                <br/>
                                            </Alert>
                                        </Card>
                                    </Row>
                                }
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col sm={2} lg={3}></Col>
                </Row>
            </ThemeProvider>
        </>
    );
}