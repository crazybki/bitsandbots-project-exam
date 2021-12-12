import '../src/sass/styles.scss'
import 'bootstrap/dist/css/bootstrap.min.css';
import FrontPage from './components/loginpage/FrontPage';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navigation from './components/navigation/Navigation';
import Games from './components/maingamepage/Games';
import FetchSingleGame from './components/maingamepage/Gamepage/singlegame/FetchSingleGame';
import AddToCart from './components/maingamepage/cartpage/AddToCart';
import CheckoutPage from './components/maingamepage/checkout/CheckoutPage';






function App() {
  return (
    <div className="App">
      <Router>
        <Navigation />

        <div className="app_container">
          <div className="app_container_background">
            <Switch>
              <Route exact path="/">
                <FrontPage />
              </Route>
              <Route path="/games">
                <Games />
              </Route>
              <Route path="/fetchsinglegame/:id">
                <FetchSingleGame />
              </Route>
              <Route path="/addtocart">
                <AddToCart />
              </Route>
              <Route path="/checkoutpage">
                <CheckoutPage />
              </Route>
            </Switch>
          </div>
        </div>
      </Router>
    </div>
  );
}

export default App;
