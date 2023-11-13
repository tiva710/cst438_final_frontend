import './History.css';
import React from 'react';


function History(props) {
    const headers = ['Title', 'Artist', 'length', 'Album', 'Year'];  
    return(
        <div> 
            <h3>Your saved Songs</h3>        
            <table id="history" > 
                <thead>
                <tr>
                    {headers.map((s, idx) => (<th key={idx}>{s}</th>))}
                </tr>
                </thead>
                <tbody>
                {props.data.map((row,idx) => (
                        <tr key={idx}>
                        <td>{row.factorA}</td>
                        <td>{row.factorB}</td>
                        <td>{row.attempt}</td>
                        <td>{row.answer}</td>
                        {(row.correct)? (<td>true</td>) :
                                    (<td className="incorrect">false</td>)} 
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
export default History;
