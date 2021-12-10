import './App.scss';
import { Beranda } from './pages/Beranda';
import { Daftar } from './pages/Daftar';
import { Divisi } from './pages/Divisi';
import { Webinar } from './pages/Webinar';
import { JoinGroup } from './pages/JoinGroup';
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
                    <Route path="/webinar" component={Webinar} />
                    <ProtectedRoute path="/bergabung" component={JoinGroup} />
                    <Route path="/" component={Beranda} />
                </Switch>
            </BrowserRouter>
        </>
    );
}

