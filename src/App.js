import './App.css';
import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Login from './components/Login';
import Game from './components/Game';
import SavedSongs from './components/SavedSongs';
import { Profile } from './components/Profile';

function App() {

    return (
//      <div className="App">
//        <Login />
//      </div>
        <div className="App">
              <BrowserRouter>
                <Switch>
                  <Route exact path="/">
                    <Login />
                  </Route>
                  <Route path="/game">
                    <Game />
                  </Route>
                  <Route path="/profile">
                    <Profile />
                  </Route>
                  <Route path="/history">
                    <SavedSongs />
                  </Route>
                </Switch>
              </BrowserRouter>
            </div>
    )
}
export default App;