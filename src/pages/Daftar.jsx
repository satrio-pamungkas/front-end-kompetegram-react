import { NavigationBar } from "../components/Navbar";

import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { createTheme, CssBaseline, ThemeProvider, MenuItem } from '@mui/material';

import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import { useForm, Controller } from "react-hook-form";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";

import { prodi } from "../data/Prodi";

export const Daftar = () => {
    const theme = createTheme({
        palette: {
            mode: 'dark',
        },
    });

    const validationSchema = Yup.object().shape({
        nama: Yup.string()
            .required('Wajib diisi'),
        email: Yup.string()
            .required('Wajib diisi')
            .email('Alamat surel tidak valid'),
        noWhatsapp: Yup.string()
            .required('Wajib diisi'),
        nim: Yup.string()
            .required('Wajib diisi'),
        minat: Yup.string()
            .required('Wajib diisi'),
        prodi: Yup.string()
            .required('Wajib diisi'),
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
        console.log(JSON.stringify(data, null, 2));
    };

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
                            <Card.Title>Card Title</Card.Title>
                            <Row>
                                <Col>
                                    <Card.Text>
                                        Some quick example text to build on the card title and make up the bulk of
                                        the card's content.
                                    </Card.Text>
                                </Col>
                                <Col>
                                <form onSubmit={handleSubmit(onSubmit, onError)}>
                                    <TextField
                                        label="Nama Lengkap"
                                        variant="filled"
                                        color="warning"
                                        margin="dense"
                                        size="small"
                                        fullWidth
                                        {...register('nama')}
                                    />
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
                                    />
                                    <TextField
                                        label="Nomor Induk Mahasiswa"
                                        variant="filled"
                                        color="warning"
                                        margin="normal"
                                        size="small"
                                        fullWidth
                                        {...register('nim')}
                                    />
                                    <Controller
                                        render={
                                            ({ field }) => 
                                            <TextField
                                                {...field}
                                                select
                                                color="warning"
                                                label="Program Studi"
                                                variant="filled"
                                                size="small"
                                                margin="normal"
                                                fullWidth 
                                            >
                                            {prodi.map((option) => (
                                                <MenuItem key={option.value} value={option.value}>
                                                {option.label}
                                                </MenuItem>
                                            ))}
                                            </TextField>
                                        }
                                        control={control}
                                        name="prodi"
                                        defaultValue=""

                                    />
                                    <TextField
                                        label="Minat yang akan dituju"
                                        variant="filled"
                                        color="warning"
                                        margin="normal"
                                        size="small"
                                        fullWidth
                                        {...register('minat')}
                                    />
                                    <Button
                                        variant="contained"
                                        color="primary"
                                        type="submit"
                                    >
                                        Register
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