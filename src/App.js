import './App.css';
import React from 'react';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import Login from './components/Login';
import Game from './components/Game';
import History from './components/History';
import { Profile } from './components/Profile';

function App() {

    return (
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
                    <History />
                  </Route>
                </Switch>
              </BrowserRouter>
            </div>
    )
}
export default App;