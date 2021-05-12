import React from 'react'
import './App.css'

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import Navigation from './components/layout/Navigation'
import Footer from './components/layout/Footer'

import Pokemons from './components/content/Pokemons'
import Generations from './components/content/Generations'
import Evolutions from './components/content/Evolutions'

function App() {
  return (
    <Router>
      <Navigation />
      <main>
        <Switch>
          <Route exact path="/" component={Pokemons} />
          <Route exact path="/generations" component={Generations} />
          <Route exact path="/evolutions" component={Evolutions} />
        </Switch>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
