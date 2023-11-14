import React, {useState} from 'react';

function Problem(props) {
 
  const [attempt, setAttempt] = useState('');
  const [message, setMessage] = useState('');

  const onChangeAttempt = (e) => {
    console.log("onChangeAttempt "+e.target.value);
    setAttempt(e.target.value);
  }



  const handleSubmit = (e) => {
    if (/^[0-9]+$/.test(attempt)) {
      props.postAttempt(attempt);
    } else {
      setMessage("Your answer is not a valid integer.");
    }
  }

  const handleNext = (e) => {
    props.fetchProblem();
  }

    const msg = (props.message!=='') ? props.message : message;
    const {a, b} = props.factors;
    return (
      <div className="App">
       <h3>Search Spotify</h3>

      <table>
        <tbody>
        <tr><td>
       <label htmlFor="attempt"></label>
       </td><td>
       <input type="text" name="attempt" value={attempt} 
              onChange={onChangeAttempt} />
       </td></tr>
 
       </tbody>
       </table>
       
       <br/>
       <button id="submit" onClick={handleSubmit}>Search</button>
       <br/>
       
       <h3 id="message">{msg}</h3>
      </div>
    )
}
export default Problem;
