import { NavigationBar } from '../components/Navbar';
import { Theme } from "../styles/Theme";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import { CssBaseline, ThemeProvider, TextField, Button, Alert, Typography } from '@mui/material';

import { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';

export const Divisi = () => {

    const [problem, setProblem] = useState(null);
    const [data, setData] = useState()

    const validationSchema = Yup.object().shape({
        nim: Yup.string()
            .required('Nomor Induk Mahasiswa (NIM) wajib diisi')
            .min(7, 'Minimal adalah 7 digit')
            .max(9, 'Maksimal adalah 9 digit')
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
        fetch(`https://api.kompetegram.com/divisi/${data.nim}`, {
            method: 'GET',
            headers: { 'Content-Type': 'application/json' },
        })
        .then((response) => response.json())
        .then((data) => {
            console.log(data);
            setProblem(false);
            setData(data.data.pengguna);
        })
        .catch((err) => {
            console.log(err);
            setProblem(true);
        })
    }

    const onError = (errors, e) => console.log(errors, e);

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
                                    <h1>Hello</h1>
                                    <form className="form" onSubmit={handleSubmit(onSubmit, onError)}>
                                        <TextField
                                            label="Nomor Induk Mahasiswa (NIM)"
                                            variant="filled"
                                            color="warning"
                                            margin="dense"
                                            size="small"
                                            fullWidth
                                            {...register('nim')}
                                            error={errors.nim ? true : false}
                                        />
                                        <Typography className="error-message" variant="inherit" color="error">
                                            {errors.nim?.message}
                                        </Typography>
                                        <Button
                                            name="button-submit"
                                            variant="contained"
                                            color="warning"
                                            type="submit"
                                        >
                                            LIHAT HASIL
                                        </Button>
                                    </form>
                                </Row>
                                <Row>
                                { problem === false && <Typography>Ada</Typography> }
                                { problem === true && <Typography>TIdak Ada</Typography> }
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