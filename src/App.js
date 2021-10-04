import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Header from './components/header/Header';
import Notfound from './components/notfound/Notfound';
import Home from './components/home/Home';
import Services from './components/services/Services'
import About from './components/about/About'
import Contactus from './components/contact/Contactus';
import Footer from './components/footer/Footer';

function App() {
  return (
    <div className="App">
      <Router>
        <Header></Header>
        <Switch>

          <Route exact path='/'>
            <Home></Home>
          </Route>
          <Route exact path='/home'>
            <Home></Home>
          </Route>
          <Route exact path='/services'>
            <Services></Services>
          </Route>
          <Route exact path='/about'>
            <About></About>
          </Route>
          <Route exact path='/contact'>
            <Contactus></Contactus>
          </Route>
          <Route path="*">
            <Notfound></Notfound>
          </Route>
        </Switch>
        <Footer></Footer>
      </Router>
    </div>



  );
}

export default App;
