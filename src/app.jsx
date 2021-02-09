import { BrowserRouter, Switch, Route } from 'react-router-dom';
import style from './app.module.css';
import Login from './components/login/Login';
import Maker from './components/maker/Maker';

function App({ authService, imageService }) {
  return (
    <div className={style.login}>
      <BrowserRouter>
        <Switch>
          <Route path={['/', '/login']} exact>
            <Login authService={authService} />
          </Route>
          <Route path='/maker'>
            <Maker authService={authService} imageService={imageService} />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
