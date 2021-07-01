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
    <div className="App flex-column">    
      <Router>
        <header className="App-header">
          <TopNav/>
        </header>
        <main>
          <Switch>
            <Route exact path="/">
              <Redirect to="/home"/>
            </Route>
            <Route path="/home" component={HomePage}/>
            <Route path="/experience" component={ExperiencePage}/>
            <Route path="/about" component={AboutMePage}/>
          </Switch>
        </main>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
