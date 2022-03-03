import { ThemeProvider, TextField, Button, Typography, CircularProgress } from '@mui/material';
import { Theme } from "../../styles/Theme";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import ReCAPTCHA from 'react-google-recaptcha';
import * as Yup from 'yup';

export const Form = ({ showProblem, showResult }) => {
    const [buttonHide, setButtonHide] = useState(true);
    const [loading, setLoading] = useState(false);

    const API_KEY = process.env.REACT_APP_API_KEY;

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

    const onSubmit = (formData) => {
        setLoading(true);

        fetch('https://ktg-pengurus.azurewebsites.net/api/pengurus/hasil', {
            method: 'POST',
            body: JSON.stringify(formData),
            headers: { 'Content-Type': 'application/json', 'ApiKey': API_KEY },
        })
        .then((response) => {
            if (!response.ok) {
                return response.text().then(text => {throw new Error(text)})
            }
            return response.json();
        })
        .then((data) => {
            showProblem(false);
            showResult(data);
            setLoading(false);
        })
        .catch((err) => {
            showProblem(true);
            showResult(null);
            setLoading(false);
        })

        window.grecaptcha.reset();
        setButtonHide(true);
    }

    const onError = (errors, e) => console.log(errors, e);

    const handleToken = (token) => {
        setButtonHide(false);
    }

    return (
        <ThemeProvider theme={Theme}>
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
                {loading && <CircularProgress color="warning" style={{ marginRight: '32px', marginBottom: '-16px' }}/> }
                <Button
                    disabled={buttonHide}
                    name="button-submit"
                    variant="contained"
                    color="warning"
                    type="submit"
                    style={{ marginTop: '20px', marginBottom: '10px' }}
                >
                    LIHAT HASIL SELEKSI
                </Button>
            </form>
        </ThemeProvider>
    );
}