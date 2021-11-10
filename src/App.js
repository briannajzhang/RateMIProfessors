import './App.css';
import LoginPage from './containers/LoginPage';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';
import Home from './Home';
import Search from './Search';
import AdvancedQueryOne from './AdvOne';
import AdvancedQueryTwo from './AdvTwo';
import Reviews from './Reviews';


function App() {
  // return (
  //   <LoginPage />
  // );
  return <Router basename={process.env.PUBLIC_URL}>
    <div id="navbar">
        <Link to="/">
          Home
        </Link>
        <Link to="/search">
          Search
        </Link>
        <Link to="/queryOne">
          Advanced Query 1
        </Link>
        <Link to="/queryTwo">
          Advanced Query 2
        </Link>
        <Link to="/reviews">
          Reviews
        </Link>
      </div>
      <br />

      <Switch>
        <Route path="/login">
          <LoginPage />
        </Route>
        <Route path="/queryOne">
          <AdvancedQueryOne />
        </Route>
        <Route path="/queryTwo">
          <AdvancedQueryTwo />
        </Route>
        <Route path="/search">
          <Search />
        </Route>
        <Route path="/reviews">
          <Reviews />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
  </Router>;
}

export default App;
