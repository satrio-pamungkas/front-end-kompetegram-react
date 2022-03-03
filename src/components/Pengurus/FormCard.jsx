import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import { Typography, Alert } from '@mui/material';
import { useState } from "react";
import { Form } from "./Form";

export const FormCard = () => {
    const [problem, setProblem] = useState(null);
    const [result, setResult] = useState(null)

    const showProblem = (data) => {
        setProblem(data);
    }

    const showResult = (data) => {
        setResult(data);
    }

    return (
        <Card className="card-divisi">
            <Card.Body>
                <h2 className="title-divisi">PENGUMUMAN SELEKSI PENGURUS</h2>
                <h4 className="subtitle-divisi">KOMPETEGRAM 2022</h4>
                <hr/>
                <Form showProblem={showProblem} showResult={showResult}/>
                { problem === false && 
                    <Row>
                        <Card sx={{ minWidth: 275 }}>
                            <Alert variant="outlined" severity="success" style={{ paddingTop: '20px'}}>
                                <strong>SELAMAT BERGABUNG KEPENGURUSAN KOMPETEGRAM 2022 !</strong>
                                <hr/>
                                <Typography className="detail-divisi">
                                    <strong>Nama:</strong> {result?.nama}
                                </Typography>
                                <Typography className="detail-divisi">
                                    <strong>NIM:</strong> {result?.nim}
                                </Typography>
                                <Typography className="detail-divisi">
                                    <strong>Program Studi:</strong> {result?.programstudi}
                                </Typography>
                                <Typography className="detail-divisi">
                                    <strong>Posisi:</strong> {result?.posisi}
                                </Typography>
                                <Typography className="detail-divisi">
                                    <strong>Divisi:</strong> {result?.divisi}
                                </Typography>
                                <hr/>
                                <Typography className="info-divisi">
                                    Silakan tunggu informasi kegiatan onboarding dan training pada grup kepengurusan
                                </Typography>
                                <br/>
                                <Typography className="info-divisi">
                                    Jika merasa tidak nyaman terhadap hasil seleksi ini
                                    silakan untuk berkonsultasi ke <strong>Kak Salman (0819-1000-9635)</strong> atau <strong>Kak Naufal (0882-2438-1926)</strong>
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
                                    Nomor Induk Mahasiswa (NIM) <strong>belum mengikuti tahapan seleksi kepengurusan</strong> atau anda <strong>belum terdaftar kepengurusan</strong> KOMPETEGRAM
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
    );
}