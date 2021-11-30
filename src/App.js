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
import CourseDetails from './CourseDetails';

function App() {
  return <Router basename={process.env.PUBLIC_URL}>
    <div id="navbar">
      <div className="header">
        <Link className="header_btn" to="/">
          Home
        </Link>
        <Link className="header_btn" to="/search">
          Search
        </Link>
        <Link className="header_btn" to="/queryOne">
          Top 15 Professors
        </Link>
        <Link className="header_btn" to="/queryTwo">
          Most Reviewed Classes
        </Link>
        <Link className="header_btn" to="/your-reviews">
          Your Reviews
        </Link>
      </div>
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
        <Route path="/your-reviews">
          <Reviews />
        </Route>
        <Route path="/course/:courseNumber">
          <CourseDetails />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
  </Router>;
}

export default App;
