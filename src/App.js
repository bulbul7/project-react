import {  HashRouter, Switch, Route } from "react-router-dom";
import './css/App.css';
import DefaultLayout from "./layout/DefaultLayout";
import Login from "./view/login/Login";



function App() {
  return (

    <HashRouter>
            <Switch>
                <Route exact path="/login" name="Login Page" render={(props) => <Login {...props} />} />
                <Route path="/" name="Home" render={(props) => <DefaultLayout {...props} />} />
            </Switch>
    </HashRouter>
  );
}

export default App;
