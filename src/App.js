import 'bootstrap/dist/css/bootstrap.min.css';
import FrontPage from './components/loginpage/FrontPage';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navigation from './components/navigation/Navigation';
import Games from './components/maingamepage/Games';





function App() {
  return (
    <div className="App">
      <Router>
        <Navigation />

        <div className="container">
          <Switch>
            <Route exact path="/">
              <FrontPage />
            </Route>
            <Route path="/games">
              <Games />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
