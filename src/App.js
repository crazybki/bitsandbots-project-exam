import '../src/sass/styles.scss'
import 'bootstrap/dist/css/bootstrap.min.css';
import FrontPage from './components/loginpage/FrontPage';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navigation from './components/navigation/Navigation';
import Games from './components/maingamepage/Games';
import FetchSingleGame from './components/maingamepage/Gamepage/singlegame/FetchSingleGame';
import CartContext from './components/Context/CartContext';




function App() {
  return (
    <div className="App">
      <CartContext>
        <Router>
          <Navigation />

          <div className="app_container">
            <Switch>
              <Route exact path="/">
                <FrontPage />
              </Route>
              <div className="app_container_background">
                <Route path="/games">
                  <Games />
                </Route>
                <Route path="/fetchsinglegame/:id">
                  <FetchSingleGame />
                </Route>
              </div>
            </Switch>
          </div>
        </Router>
      </CartContext>
    </div>
  );
}

export default App;
