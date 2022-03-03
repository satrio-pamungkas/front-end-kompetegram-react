import { ThemeProvider } from '@emotion/react';
import { NavigationBar } from '../components/Navbar';
import { FormCard } from '../components/Pengurus/FormCard';
import { Theme } from "../styles/Theme";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { CssBaseline } from '@mui/material';

export const Pengurus = () => {
    return (
        <>
            <NavigationBar/>
            <ThemeProvider theme={Theme}>
                <CssBaseline/>
                <Row className="page">
                    <Col sm={2} lg={3}></Col>
                    <Col style={{ paddingRight: '0px'}} xs={12} sm={8} lg={6}>
                        <FormCard/>
                    </Col>
                    <Col sm={2} lg={3}></Col>
                </Row>
            </ThemeProvider>
        </>
    );
}