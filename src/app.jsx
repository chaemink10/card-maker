import { BrowserRouter, Switch, Route } from 'react-router-dom';
import style from './app.module.css';
import Login from './components/login/Login';
import Maker from './components/maker/Maker';

function App({ FileInput, authService, DBService }) {
  return (
    <div className={style.login}>
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Switch>
          <Route path={['/', '/login']} exact>
            <Login authService={authService} />
          </Route>
          <Route path='/maker'>
            <Maker
              authService={authService}
              FileInput={FileInput}
              DBService={DBService}
            />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
