import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./App.css";
import Loader from "react-loader-spinner";
import Home from "./Components/Home";
import Login from "./Components/login";
import Welcome from "./Components/Welcome";
import History from "./Components/History";
import { MyContext } from "./Context/MyContext";
import React from "react";

function App() {
  const [context, setContext] = React.useState({
    loading: false,
    opacity: "1",
  });
  return (
    <MyContext.Provider value={[context, setContext]}>
      <div className="App">
        {context.loading && (
          <div className="loadingSpinner">
            <Loader type={"TailSpin"} color={"Black"} height={80} width={80} />
          </div>
        )}

        <div className="container" style={{ opacity: context.opacity }}>
          <BrowserRouter>
            <Switch>
              <Route path="/login" exact={true} component={Login} />
              <Route path="/home" exact={true} component={Home} />
              <Route path="/welcome" exact={true} component={Welcome} />
              <Route path="/history" exact={true} component={History} />
              <Route path="/" component={Login} />
            </Switch>
          </BrowserRouter>
        </div>
      </div>
    </MyContext.Provider>
  );
}

export default App;
