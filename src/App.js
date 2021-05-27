import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import Home from './Components/Home';
import Login from './Components/login';
import Welcome from './Components/Welcome';
import History from './Components/History';

function App() {
  return (
    <div className="App">
      <div className="container">
        <BrowserRouter>
          <Switch>
            <Route path="/login" exact={true} component={Login} />
            <Route path="/home" exact={true} component={Home} />
            <Route path="/welcome" exact={true} component={Welcome} />
            <Route path="/history" exact={true} component={History} />
            <Route path='/' component={Login} />
          </Switch>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
