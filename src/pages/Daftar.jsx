import { NavigationBar } from "../components/Navbar";
import { Theme } from "../styles/Theme";
import { ProgramStudi } from "../api/Prodi";
import { Fakultas } from "../api/Fakultas";
import Photo from "../assets/img/form-daftar.svg";
import Modal from "../components/Daftar/Modal";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import SendIcon from '@mui/icons-material/Send';
import { CssBaseline, ThemeProvider, MenuItem, Radio, FormControlLabel, 
    RadioGroup, FormLabel, Typography, TextField, Button, Alert } from '@mui/material';

import { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { Redirect } from "react-router-dom";
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';

export const Daftar = () => {

    const [problem, setProblem] = useState(false);
    const [redirect, setRedirect] = useState(false);
    const [faculty, setFaculty] = useState('');
    
    const validationSchema = Yup.object().shape({
        nama: Yup.string()
            .required('Nama lengkap wajib diisi'),
        jenisKelamin: Yup.string()
            .required('Jenis kelamin wajib diisi'),
        email: Yup.string()
            .required('Alamat surel wajib diisi')
            .email('Alamat surel tidak valid'),
        noWhatsapp: Yup.string()
            .required('Nomor WhatsApp Wajib diisi'),
        nim: Yup.string()
            .required('NIM Wajib diisi'),
        minat: Yup.string()
            .required('Perlu untuk diisi'),
        kodeProdi: Yup.string()
            .required('Program studi wajib diisi'),
        fakultas: Yup.string()
            .required('Fakultas wajib diisi'),
        pernahNgoding: Yup.string()
            .required('Pilihan wajib diisi')
    });

    const {
        register,
        control,
        handleSubmit,
        formState: { errors },
      } = useForm({
        resolver: yupResolver(validationSchema)
    });

    const onSubmit = data => {
        fetch('https://api.kompetegram.com/pengguna', {
            method: 'POST',
            body: JSON.stringify(data),
            headers: { 'Content-Type': 'application/json' },
        })
        .then((response) => {
            if (!response.ok) {
                throw Error(response.statusText);
            }
            return response;
        })
        .then((response) => {
            setRedirect(true);
            console.log('Ok');
        })
        .catch((err) => {
            setProblem(true);
            console.log('Error');
        });

        console.log(JSON.stringify(data, null, 2));
    };

    function handleFakultas(e) {
        const fakultasSelect = e.target.value;
        setFaculty(fakultasSelect);
    }

    const onError = (errors, e) => console.log(errors, e);

    return (
        <>
            <NavigationBar/>
            <ThemeProvider theme={Theme}>
                <CssBaseline/>
                <Row className="page">
                    <Col sm={2}></Col>
                    <Col xs={12} sm={8}>
                    <Card className="card">
                        <Card.Body>
                            <Row>
                                <Col md={6} className="col-kiri">
                                    <h1 className="title-form">Pendaftaran Anggota KOMPETEGRAM</h1>
                                    <h2 className="subtitle-form">Batch 2 - Tahun 2021</h2>
                                    <img className="img" src={Photo} alt=''/>
                                    <h4 className="desc-form">Sebelum mendaftar keanggotaan, pastikan telah memenuhi syarat dan ketentuan yang berlaku berikut</h4>
                                    <Modal/>
                                </Col>
                                <Col xs={12} md={6}>
                                <form onSubmit={handleSubmit(onSubmit, onError)}>
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
                                    <Typography variant="inherit" color="textSecondary">
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
                                        error={errors.jenisKelamin ? true : false}
                                    >
                                        <MenuItem key="Laki-Laki" value="Laki-Laki">Laki-Laki</MenuItem>
                                        <MenuItem key="Perempuan" value="Perempuan">Perempuan</MenuItem>
                                    </TextField>
                                    <TextField
                                        label="Alamat Surel (Email)"
                                        variant="filled"
                                        color="warning"
                                        margin="normal"
                                        size="small"
                                        fullWidth
                                        {...register('email')}
                                        error={errors.email ? true : false}
                                    />
                                    <TextField
                                        label="Nomor Telepon atau WhatsApp"
                                        variant="filled"
                                        color="warning"
                                        margin="normal"
                                        size="small"
                                        fullWidth
                                        {...register('noWhatsapp')}
                                        error={errors.noWhatsapp ? true : false}
                                    />
                                    <TextField
                                        label="Nomor Induk Mahasiswa (NIM)"
                                        variant="filled"
                                        color="warning"
                                        margin="normal"
                                        size="small"
                                        fullWidth
                                        {...register('nim')}
                                        error={errors.nim ? true : false}
                                    />
                                    <TextField
                                        select
                                        color="warning"
                                        label="Fakultas atau Kampus Daerah"
                                        variant="filled"
                                        size="small"
                                        margin="normal"
                                        fullWidth 
                                        {...register('fakultas')}
                                        onChange={(e) => {
                                            handleFakultas(e)
                                            return e.target.value
                                        }}
                                        defaultValue=''
                                    >
                                    {Fakultas().map((item) => (
                                        <MenuItem key={item.nama} value={item.nama}>
                                        {item.nama}
                                        </MenuItem>
                                    ))}
                                    </TextField>
                                    <Typography variant="inherit" color="textSecondary">
                                        {errors.fakultas?.message}
                                    </Typography>
                                    <TextField
                                        select
                                        color="warning"
                                        label="Program Studi"
                                        variant="filled"
                                        size="small"
                                        margin="normal"
                                        fullWidth 
                                        {...register('kodeProdi')}
                                        defaultValue=""
                                        error={errors.kodeProdi ? true : false}
                                    >
                                    {ProgramStudi(faculty)?.map((item) => (
                                        <MenuItem key={item.label} value={item.label}>
                                        {item.value}
                                        </MenuItem>
                                    ))}
                                    </TextField>
                                    <TextField
                                        helperText="Silakan isi (-) jika belum memiliki"
                                        label="Minat dalam bidang pemrograman"
                                        variant="filled"
                                        color="warning"
                                        margin="normal"
                                        size="small"
                                        fullWidth
                                        {...register('minat')}
                                        error={errors.minat ? true : false}
                                    />
                                    <FormLabel component="legend">Apakah anda pernah belajar atau berkutik dalam pemrograman sebelumnya ?</FormLabel>
                                    <Controller
                                        rules={{ required: true }}
                                        control={control}
                                        defaultValue=""
                                        name="pernahNgoding"
                                        render={({ field }) => {
                                            const { onBlur, onChange, value } = field;
                                            return (
                                                <RadioGroup
                                                    row
                                                    value={value}
                                                    onBlur={onBlur}
                                                    onChange={(e) => {
                                                        onChange(e);
                                                        console.log(e.target.value);
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
                                    <Typography variant="inherit" color="textSecondary">
                                        {errors.pernahNgoding?.message}
                                    </Typography>
                                    {problem && <h1>Gagal mengirim</h1>}
                                    <Button
                                        className="button-submit"
                                        variant="contained"
                                        color="warning"
                                        type="submit"
                                        fullWidth
                                        startIcon={<SendIcon />}
                                        style={{ color: '#fff', fontSize: '16px', fontWeight: '500'}}
                                    >
                                        DAFTAR ANGGOTA
                                    </Button>
                                </form>
                                {redirect && <Redirect to="/bergabung"/> }
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