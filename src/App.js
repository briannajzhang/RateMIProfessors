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
  // return (
  //   <LoginPage />
  // );
  return <Router basename={process.env.PUBLIC_URL}>
    <div id="navbar">
        <Link className="border-2 border-gray-400 h-8 px-2 rounded-lg" to="/">
          Home
        </Link>
        <Link className="border-2 border-gray-400 h-8 px-2 rounded-lg" to="/search">
          Search
        </Link>
        <Link className="border-2 border-gray-400 h-8 px-2 rounded-lg" to="/queryOne">
          Top 15 Professors
        </Link>
        <Link className="border-2 border-gray-400 h-8 px-2 rounded-lg" to="/queryTwo">
          Most Reviewed Classes
        </Link>
        <Link className="border-2 border-gray-400 h-8 px-2 rounded-lg" to="/your-reviews">
          Your Reviews
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
