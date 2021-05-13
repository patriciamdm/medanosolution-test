import React from 'react'
import './App.css'

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import Navigation from './components/layout/Navigation'
import Footer from './components/layout/Footer'

import PokemonsList from './components/content/pokemons/Pokemons-list'
import PokemonDetails from './components/content/pokemons/Pokemon-dets'
import Extras from './components/content/extras/Extras'
import About from './components/content/extras/About'

import PokemonState from './context/pokemons/pokemonState'
import ExtrasState from './context/extras/extrasState'


function App() {
  return (
    <PokemonState>
      <ExtrasState>
        <Router>
          <Navigation />
          <main>
            <Switch>
              <Route exact path="/" component={PokemonsList} />
              <Route exact path="/pokemon/:name" render={props => <PokemonDetails {...props}/>} />
              <Route exact path="/contests" component={Extras} />
              <Route exact path="/about" component={About} />
            </Switch>
          </main>
          <Footer />
        </Router>
      </ExtrasState>
    </PokemonState>
  );
}

export default App;
