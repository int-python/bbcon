import "./App.css";
import Home from "./Components/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Success from "./Components/Success";
import Failure from "./Components/Failure";
import Cancel from "./Components/Cancel";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/payments" component={Home} />
          <Route exact path="/payments/success" component={Success} />
          <Route exact path="/payments/failure" component={Failure} />
          <Route exact path="/payments/cancel" component={Cancel} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
