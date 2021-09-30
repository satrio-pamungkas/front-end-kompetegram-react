import { NavigationBar } from "../components/Navbar";

import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { createTheme, CssBaseline, ThemeProvider, MenuItem, Radio, FormControlLabel, RadioGroup, FormLabel, Typography } from '@mui/material';

import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import { useForm, Controller } from "react-hook-form";

import { useState, useEffect } from "react";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";

import { institusi, Programstudi } from "../data/Prodi";

export const Daftar = () => {
    const theme = createTheme({
        palette: {
            mode: 'dark',
            warning: {
                main: '#FF7315'
            }
        },
    });

    const [error, setError] = useState('');
    
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
        minat: Yup.string(),
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
        formState: { errors }
      } = useForm({
        resolver: yupResolver(validationSchema)
    });

    const onSubmit = data => {
        fetch('https://kompetegram.parentgenmaster.masuk.id/pengguna', {
            method: 'POST',
            body: JSON.stringify(data),
            headers: { 'Content-Type': 'application/json' },
        });

        console.log(JSON.stringify(data, null, 2));
    };

    function handleFakultas(e) {
        console.log("Selected fakultas", e.target.value);
        // const fakultasSelect = e.target.value;
        // const prodiSelect = fakultasSelect !== "" ? institusi[fakultasSelect] : "";
        // setSelectedCountry(fakultasSelect);
        // setCities(prodiSelect);
        // setSelectedCity("");
    }

    const onError = (errors, e) => console.log(errors, e);

    return (
        <>
            <NavigationBar/>
            <ThemeProvider theme={theme}>
                <CssBaseline/>
                <Row style={{ marginRight: '0px'}}>
                    <Col sm={2} md={3}></Col>
                    <Col xs={12} sm={8} md={6}>
                    <Card style={{ backgroundColor: '#121212' }}>
                        <Card.Body>
                            <Card.Title>Pendaftaran Anggota KOMPETEGRAM</Card.Title>
                            <Row>
                                <Col>
                                    <Card.Text>
                                        Silakan isi formulir berikut
                                    </Card.Text>
                                </Col>
                                <Col xs={12}>
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
                                        label="Alamat Surel"
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
                                        label="Nomor Induk Mahasiswa"
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
                                        label="Fakultas"
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
                                    {institusi.map((option) => (
                                        <MenuItem key={option.fakultas} value={option.fakultas}>
                                        {option.fakultas}
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
                                        defaultValue=''
                                        error={errors.kodeProdi ? true : false}
                                    >
                                    {Programstudi().map((option) => (
                                        <MenuItem key={option.kode} value={option.kode}>
                                        {option.nama}
                                        </MenuItem>
                                    ))}
                                    </TextField>
                                    <TextField
                                        label="Minat dalam pemrograman (opsional)"
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
                                            const { name, onBlur, onChange, value } = field;
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
                                    <Button
                                        variant="contained"
                                        color="warning"
                                        type="submit"
                                    >
                                        DAFTAR
                                    </Button>
                                </form>
                                </Col>
                            </Row>
                        </Card.Body>
                    </Card>
                    </Col>
                    <Col sm={2} md={3} ></Col>
                </Row>
            </ThemeProvider>
        </>
    );
}