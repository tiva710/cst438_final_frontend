// import './App.css';
// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// import MusicApp from './MusicApp';
// import { SavedSongs } from './components/SavedSongs'
// import { Profile } from './components/Profile';

// const base_uri = 'http://localhost:3000';
// const spotify_api_client = process.env.REACT_APP_SPOTIFY_API_CLIENT_ID;
// const redirectUrl = `https://github.com/tiva710/cst438_final_frontend/issues`;
// const scope = 'user-read-private user-read-email';

// const authorizationEndpoint = "https://accounts.spotify.com/authorize";
// const tokenEndpoint = "https://accounts.spotify.com/api/token";

// const userTokens = {
//     get accessToken() { fetch(`${base_uri}/somethingsomething`).then(data => { return data.json() }) },
//     get refreshToken() { fetch(`${base_uri}/somethingsomethingelse`).then(data => { return data.json() }) }
//     // todo expires_in field
//     // todo expires field
//     // todo setters for above
// };

// async function redirectSpotifyOAuth() {
//     const string_pattern = process.env.REACT_APP_CODE_VERIFIER;
//     const hashed_values = await crypto.subtle.digest('SHA-256', new TextEncoder().encode(string_pattern));

//     const code_challenge_base64 = btoa(String.fromCharCode(...new Uint8Array(hashed_values)))
//         .replace(/=/g, '')
//         .replace(/\+/g, '-')
//         .replace(/\//g, '_');

//     window.localStorage.setItem('react_code_challenge', code_challenge_base64);

//     const auth_uri = new URL(authorizationEndpoint);
//     const param = {
//         response_type: 'code',
//         client_id: spotify_api_client,
//         scope: scope,
//         code_challenge_method: 'S256',
//         code_challenge: code_challenge_base64,
//         redirect_uri: redirectUrl,
//     }

//     auth_uri.search = new URLSearchParams(param).toString();
//     window.location.href = auth_uri.toString(); // redirects to spotify auth server for login
// }

// function App() {
//     // redirectSpotifyOAuth(); DO NOT UNCOMMENT
//     // console.log(spotify_api_client);

//     return (
//         // <div>
//         //     <MusicApp />
//         // </div>
//       <Router>
//       <div className="App">
//         <nav>
//         <a href="/MusicApp">Search</a>
//         <a href="/SavedSongs">Saved Songs</a>
//         <a href="/Profile">Profile</a>
//       </nav> 

//       <main>
//           <Switch>
//             <Route path="/MusicApp" component={MusicApp} />
//             <Route path="/Profile" component={Profile} />
//             <Route path="/SavedSongs" component={SavedSongs} />
//             <Route path="/" component={MusicApp} />
//           </Switch>
//         </main>
//       </div>
//       </Router>
//     );
    
// }


// export default App;

// export default App;
import './App.css';
import React from 'react';
import Login from './login';

function App() {

    return (
      <div className="App">
        <Login />
      </div>
    )
}
export default App;