import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route, NavLink } from 'react-router-dom';
import './App.scss';
import SiteNav from './components/siteNav/siteNav';
import Logo from './assets/images/logo.svg';
import Home from './pages/home';
import About from './pages/about/about';
import Projects from './pages/projects/projects';

function App() {
  const [open, setOpen] = useState(false);

  const clickHandler = () => {
    setOpen(!open);
  };

  return (
    <div className="App">
      <Router>
        {!open ? (
          <main>
            <header className="header">
              <NavLink exact to="/">
                <img src={Logo} alt="" className="logo" />
              </NavLink>

              <button type="button" className="collapsible" onClick={clickHandler}></button>
            </header>

            <Switch>
              <Route exact path="/">
                <Home />
              </Route>
              <Route path="/about">
                <About />
              </Route>
              <Route path="/projects">
                <Projects />
              </Route>
            </Switch>
          </main>
        ) : (
          <SiteNav parentFunc={clickHandler} />
        )}
      </Router>
    </div>
  );
}

export default App;
