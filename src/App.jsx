import './App.scss';
import { Beranda } from './pages/Beranda';
import { Daftar } from './pages/Daftar';
import { Success } from './pages/Success';
import { Divisi } from './pages/Divisi';
import ProtectedRoute from './services/ProtectedRoute';
import { BrowserRouter,
        Switch,
        Route } from 'react-router-dom';

export const App = () => {
    return (
        <>
            <BrowserRouter>
                <Switch>
                    <Route path="/daftar" component={Daftar} />
                    <Route path="/divisi" component={Divisi} />
                    <ProtectedRoute path="/bergabung" component={Success} />
                    <Route path="/" component={Beranda} />
                </Switch>
            </BrowserRouter>
        </>
    );
}

