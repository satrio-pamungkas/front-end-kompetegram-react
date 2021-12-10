import { NavigationBar } from "../components/Navbar";
import Modal from "../components/Webinar/Modal";
import { Theme } from "../styles/Theme";
import Poster from '../assets/img/Poster.png';

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import SendIcon from '@mui/icons-material/Send';
import { CssBaseline, ThemeProvider, MenuItem, Radio, FormControlLabel,
    RadioGroup, FormLabel, Typography, TextField, Button, Alert, Link, CircularProgress } from '@mui/material';

import { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';

export const Webinar = () => {
    const [problem, setProblem] = useState(false);
    const [redirect, setRedirect] = useState(false);
    const [loading, setLoading] = useState(false);
    
    const validationSchema = Yup.object().shape({
        nama: Yup.string()
            .required('Nama lengkap wajib diisi'),
        jenisKelamin: Yup.string()
            .required('Jenis kelamin wajib diisi'),
        email: Yup.string()
            .required('Email wajib diisi')
            .email('Alamat surel tidak valid'),
        noWhatsapp: Yup.string()
            .required('Nomor WhatsApp wajib diisi'),
        institusi: Yup.string()
            .required('Institusi atau Universitas wajib diiisi'),
        profesi: Yup.string()
            .required('Profesi wajib diisi'),
        domisili: Yup.string()
            .required('Domisili atau wilayah wajib diisi'),
        tauBlockchain: Yup.string()
            .required('Pilihan wajib diiisi')
    });

    const onSubmit = formData => {
        setLoading(true);

        fetch('https://api.kompetegram.com/webinar-umum', {
            method: 'POST',
            body: JSON.stringify(formData),
            headers: { 'Content-Type': 'application/json' },
        })
        .then((response) => {
            if (!response.ok) {
                return response.text().then(text => {throw new Error(text)})
            }
            return response.json();
        })
        .then((data) => {
            setRedirect(true);
            setProblem(false);
            setLoading(false);
            sessionStorage.setItem('Submitted','true');
        })
        .catch((err) => {
            setProblem(true);
            setLoading(false);
            console.log('Error');
        });
    };

    const {
        register,
        control,
        handleSubmit,
        formState: { errors },
      } = useForm({
        resolver: yupResolver(validationSchema)
    });

    const onError = (errors, e) => console.log(errors, e);

    return (
        <>
            <NavigationBar/>
            <ThemeProvider theme={Theme}>
                <CssBaseline/>
                <Row className="page">
                    <Col sm={2}></Col>
                    <Col style={{ paddingRight: '0px' }} xs={12} sm={8}>
                        <Card className="card">
                            <Card.Body>
                                <Row>
                                    <Col md={6} className="col-kiri" style={{ textAlign: 'center' }}>
                                        <h1 className="title-form">Pendaftaran Peserta</h1>
                                        <h2 className="subtitle-form">Build a RESTful API with Codeigniter</h2>
                                        <img src={Poster} alt="poster" style={{ width: '300px', marginBottom: '20px' }}/>
                                        <Modal/>
                                    </Col>
                                    <Col xs={12} md={6} className="col-kanan">
                                        <form className="form" onSubmit={handleSubmit(onSubmit, onError)}>
                                            <TextField
                                                label="Nama Lengkap"
                                                variant="filled"
                                                color="warning"
                                                margin="dense"
                                                size="small"
                                                fullWidth
                                                {...register('nama')}
                                                error={errors.nama ? true : false}
                                            />
                                            <Typography className="error-message" variant="inherit" color="error">
                                                {errors.nama?.message}
                                            </Typography>

                                            <TextField
                                                select
                                                color="warning"
                                                label="Jenis Kelamin"
                                                variant="filled"
                                                size="small"
                                                margin="normal"
                                                fullWidth
                                                {...register('jenisKelamin')}
                                                defaultValue=''
                                            >
                                                <MenuItem key="laki-laki" value="Laki-Laki">Laki-Laki</MenuItem>
                                                <MenuItem key="perempuan" value="Perempuan">Perempuan</MenuItem>
                                            </TextField>
                                            <Typography className="error-message" variant="inherit" color="error">
                                                {errors.jenisKelamin?.message}
                                            </Typography>

                                            <TextField
                                                label="Alamat Surel (e-mail)"
                                                variant="filled"
                                                color="warning"
                                                margin="dense"
                                                size="small"
                                                fullWidth
                                                {...register('email')}
                                                error={errors.email ? true : false}
                                            />
                                            <Typography className="error-message" variant="inherit" color="error">
                                                {errors.email?.message}
                                            </Typography>

                                            <TextField
                                                label="No WhatsApp"
                                                variant="filled"
                                                color="warning"
                                                margin="dense"
                                                size="small"
                                                fullWidth
                                                {...register('noWhatsapp')}
                                                error={errors.noWhatsapp ? true : false}
                                            />
                                            <Typography className="error-message" variant="inherit" color="error">
                                                {errors.noWhatsapp?.message}
                                            </Typography>

                                            <TextField
                                                label="Institusi atau Universitas"
                                                variant="filled"
                                                color="warning"
                                                margin="dense"
                                                size="small"
                                                fullWidth
                                                {...register('institusi')}
                                                error={errors.institusi ? true : false}
                                            />
                                            <Typography className="error-message" variant="inherit" color="error">
                                                {errors.institusi?.message}
                                            </Typography>

                                            <TextField
                                                label="Profesi atau Jabatan"
                                                variant="filled"
                                                color="warning"
                                                margin="dense"
                                                size="small"
                                                fullWidth
                                                {...register('profesi')}
                                                error={errors.profesi ? true : false}
                                            />
                                            <Typography className="error-message" variant="inherit" color="error">
                                                {errors.profesi?.message}
                                            </Typography>

                                            <TextField
                                                label="Wilayah atau Domisili"
                                                variant="filled"
                                                color="warning"
                                                margin="dense"
                                                size="small"
                                                fullWidth
                                                {...register('domisili')}
                                                error={errors.domisili ? true : false}
                                            />
                                            <Typography className="error-message" variant="inherit" color="error">
                                                {errors.domisili?.message}
                                            </Typography>

                                            <FormLabel className="pertanyaan-ngoding" component="legend">Apakah anda sudah mengetahui mengenai RESTful API ? 
                                            <i className="desc">Sebagai survei awal peserta</i></FormLabel>
                                            <Controller
                                                rules={{ required: true }}
                                                control={control}
                                                defaultValue=""
                                                name="tauBlockchain"
                                                render={({ field }) => {
                                                    const { onBlur, onChange, value } = field;
                                                    return (
                                                        <RadioGroup
                                                            row
                                                            value={value}
                                                            onBlur={onBlur}
                                                            onChange={(e) => {
                                                                onChange(e);
                                                            }}
                                                        >
                                                            <FormControlLabel
                                                                value="Ya"
                                                                control={<Radio color="warning" />}
                                                                label="Ya"
                                                            />
                                                            <FormControlLabel
                                                                value="Tidak"
                                                                control={<Radio color="warning" />}
                                                                label="Tidak"
                                                            />
                                                        </RadioGroup>
                                                    );
                                                }}
                                            />
                                            <Typography className="error-message" variant="inherit" color="error">
                                                {errors.tauBlockchain?.message}
                                            </Typography>

                                            {problem && 
                                            <Alert className="fail-alert" variant="filled" severity="error">
                                                Gagal mendaftar, silakan ulangi atau daftar melalui link alternatif <Link href="https://forms.gle/hg8HURnW3V3XWufA9" target="_blank" rel="noopener noreferrer">berikut</Link>
                                            </Alert>}
                                            
                                            {loading &&
                                                <CircularProgress color="warning" />
                                            }   

                                            <Button
                                                className="button-submit"
                                                variant="contained"
                                                color="warning"
                                                type="submit"
                                                fullWidth
                                                startIcon={<SendIcon />}
                                            >
                                                DAFTAR PESERTA
                                            </Button>

                                        </form>
                                        {redirect && (window.location.pathname = "/bergabung") }
                                    </Col>
                                </Row>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col sm={2}></Col>
                </Row>
            </ThemeProvider>
        </>
    );
}