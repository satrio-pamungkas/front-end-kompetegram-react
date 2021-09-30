import './App.scss';
import { Beranda } from './pages/Beranda';
import { Daftar } from './pages/Daftar';
import { Success } from './pages/Success';
import { BrowserRouter,
        Switch,
        Route } from 'react-router-dom';

export const App = () => {
    return (
        <>
            <BrowserRouter>
                <Switch>
                    <Route path="/daftar">
                        <Daftar/>
                    </Route>
                    <Route path="/bergabung">
                        <Success/>
                    </Route>
                    <Route path="/">
                        <Beranda/>
                    </Route>
                </Switch>
            </BrowserRouter>
        </>
    );
}

