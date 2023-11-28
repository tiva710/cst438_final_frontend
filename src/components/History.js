import './History.css';
import React from 'react';


function History(props) {
    const headers = ['Title', 'Artist', 'Length', 'Album', 'Year'];
    return(
        <div> 
            <h3>Your Saved Songs</h3>
            <table id="library" >
                <thead>
                <tr>
                    {headers.map((s, idx) => (<th key={idx}>{s}</th>))}
                </tr>
                </thead>
                <tbody>
                {props.data.map((row,idx) => (
                        <tr key={idx}>
                        <td>{row.title}</td>
                        <td>{row.artists}</td>
                        <td>{row.length}</td>
                        <td>{row.album}</td>
                        <td>{row.year}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
export default History;
