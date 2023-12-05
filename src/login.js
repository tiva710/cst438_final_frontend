import React, {useState} from 'react';
//import Profile from './Profile';
import { BrowserRouter, Switch,Route } from 'react-router-dom'; // Import BrowserRouter
//import SavedSongs from './SavedSongs';
import SearchBar from './components/SearchBar'; 
import SearchResults from './components/SearchResults'; 
import MusicApp from './MusicApp';

function Login() {
    const[user, setUser] = useState({username:'', password:''});
    const[isAuthenticated, setAuth] = useState(false);

    const onChange = (event) => {
        setUser({...user, [event.target.name] : event.target.value});
    }

    const login = () => {
        fetch('http://localhost:8082/login', {
            method:'POST',
            headers: {'Content-Type':'application/json' },
            body: JSON.stringify(user)
        })
        .then(res => { 
            const jwtToken = res.headers.get('Authorization');
            if (jwtToken !== null) {
                sessionStorage.setItem("jwt", jwtToken);
                setAuth(true);
            }
        })
        .catch(err => console.log(err));
    }

    

    if (isAuthenticated) {
        return  <BrowserRouter>
                 <div>
                   <Switch>
                   <Route path="/MusicApp" component={MusicApp} />
            
             <Route path="/" component={MusicApp} />
                   </Switch>
                 </div>
               </BrowserRouter>
    } else {
        return (
            <div className="App">
            <table>
            <tbody>
            <tr><td>
            <label htmlFor="username">UserName</label>
            </td><td>
            <input type="text" name="username" value={user.username} onChange={onChange} />
            </td></tr>
            <tr><td>
            <label htmlFor="password">Password</label>
            </td><td>
            <input type="text" name="password" value={user.password} onChange={onChange} />
            </td></tr>
            </tbody>
            </table>
            
            <br/>
            <button id="submit" onClick={login}>Login</button>
            
                </div>
        );
    }
}
export default Login;