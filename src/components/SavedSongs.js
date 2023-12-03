import React from 'react';
import './SavedSongs.css';
import SearchResults from './SearchResults';

export const SavedSongs = (props) => {
    const { name, artist } = props;



//   const headers = ['Title', 'Artist', 'Length', 'Album', 'Year'];

  return (
    <div>
      <h2>Your Saved Songs</h2>
       <p>Song: {name}</p>
      <p>Artist: {artist}</p>

      {/* {props.data.length > 0 ? (
        <table id="library">
          <thead>
            <tr>
              {headers.map((s, idx) => (
                <th key={idx}>{s}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {props.data.map((row, idx) => (
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
      ) : (
        <p>Saved songs is empty.</p>
      )} */}
    </div>
  );
};
