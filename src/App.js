import React from 'react'
import './App.css'

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import Navigation from './components/layout/Navigation.js'
import Footer from './components/layout/Footer.js'

import PokemonsList from './components/content/pokemons/Pokemons-list.js'
import PokemonDetails from './components/content/pokemons/Pokemon-dets.js'
import Extras from './components/content/extras/Extras.js'
import About from './components/content/extras/About.js'

import PokemonState from './context/pokemons/pokemonState.js'
import ExtrasState from './context/extras/extrasState.js'


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
