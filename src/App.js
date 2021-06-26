import logo from './logo.svg';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import './App.css';
import TopNav from './components/nav/TopNav';
import Footer from './components/footer/Footer';
import HomePage from './pages/Home';
import AboutMePage from './pages/AboutMe';
import ExperiencePage from './pages/Experience';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Router>
          <TopNav/>
          <Switch>
            <Route exact path="/">
              <Redirect to="/home"/>
            </Route>
            <Route path="/home" component={HomePage}/>
            {/* <Route path="/" component={AboutMePage}/> */}
            <Route path="/experience" component={ExperiencePage}/>
            <Route path="/about" component={AboutMePage}/>
          </Switch>
          <Footer/>
        </Router>
      </header>
    </div>
  );
}

export default App;
