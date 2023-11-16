import './SavedSongs.css';
import React from 'react';


function SavedSongs(props) {
    const headers = ['Title', 'Artist', 'length', 'Album', 'Year'];  
    return(
        <div> 
            <h2>Library</h2>        
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
                        <td>{row.artist}</td>
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
export default SavedSongs;
