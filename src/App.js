import './App.css';
import './reset.css'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";


import HomePage from './pages/HomePage'
import Header from './components/Header'
import Categories from './pages/Categories'
import Items from './pages/Items'
import Cart from './pages/Cart'
import Test from './pages/Test'

function App() {
  return (
    <div>
      <Router>
        <Header />
          <Switch>

            <Route exact path="/">
              <HomePage />
            </Route>

            <Route path="/categories">
              <Categories />
            </Route>

            <Route path="/items/:cat_id">
              <Items />
            </Route>

            <Route path="/cart">
              <Cart />
            </Route>

            <Route path="/test">
              <Test />
            </Route>

          </Switch>
      </Router>
    </div>
  );
}

export default App;
