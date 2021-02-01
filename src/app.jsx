import style from './app.module.css';
import Login from './components/login/Login';

function App({ authService }) {
  return (
    <div className={style.login}>
      <Login authService={authService} />
    </div>
  );
}

export default App;
