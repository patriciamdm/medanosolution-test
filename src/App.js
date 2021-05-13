import React from 'react'
import './App.css'

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import Navigation from './components/layout/Navigation'
import Footer from './components/layout/Footer'

import PokemonsList from './components/content/pokemons/Pokemons-list'
import PokemonDetails from './components/content/pokemons/Pokemon-dets'
import Generations from './components/content/Generations'
import Evolutions from './components/content/Evolutions'

import PokemonState from './context/pokemons/pokemonState'

function App() {
  return (
    <PokemonState>
      <Router>
        <Navigation />
        <main>
          <Switch>
            <Route exact path="/" component={PokemonsList} />
            <Route exact path="/pokemon/:name" render={props => <PokemonDetails {...props}/>} />
            <Route exact path="/generations" component={Generations} />
            <Route exact path="/evolutions" component={Evolutions} />
          </Switch>
        </main>
        <Footer />
      </Router>
    </PokemonState>
  );
}

export default App;
