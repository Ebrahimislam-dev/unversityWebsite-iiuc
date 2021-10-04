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

import About from './components/about/About'
import Contactus from './components/contact/Contactus';
import Footer from './components/footer/Footer';
import Servicesall from './components/servicesall/Servicesall';

function App() {
  return (
    <div className="App">
      {/* Using Router */}
      <Router>
        {/* intializing header */}
        <Header></Header>
        <Switch>
          {/* navbars routes */}
          <Route exact path='/'>
            <Home></Home>
          </Route>
          <Route exact path='/home'>
            <Home></Home>
          </Route>
          <Route exact path='/services'>
            <Servicesall></Servicesall>
          </Route>
          <Route exact path='/about'>
            <About></About>
          </Route>
          <Route exact path='/contact'>
            <Contactus></Contactus>
          </Route>
          {/* not found page route */}
          <Route path="*">
            <Notfound></Notfound>
          </Route>
        </Switch>
        {/* intializing footer */}
        <Footer></Footer>
      </Router>
    </div>



  );
}

export default App;
