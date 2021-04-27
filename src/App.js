import './App.css';
import './reset.css'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";


import HomePage from './pages/HomePage'
import NavBar from './components/NavBar'
import Categories from './pages/Categories'
import Items from './pages/Items'
import Cart from './pages/Cart'

function App() {
  return (
    <div>
      <Router>
        <NavBar />
          <Switch>

            <Route exact path="/">
              <HomePage />
            </Route>

            <Route path="/categories">
              <Categories />
            </Route>

            <Route path="/items">
              <Items />
            </Route>

            <Route path="/cart">
              <Cart />
            </Route>

          </Switch>
      </Router>
    </div>
  );
}

export default App;
