import React from 'react';
import './SavedSongs.css';
import SearchResults from './SearchResults';

export const SavedSongs = (props) => {
    const { name, artist } = props;
    const headers = ['Title', 'Artist', 'Length', 'Album', 'Year'];

    return (
        <div>
            <div>
                <h3>Your Saved Songs</h3>
                <table id="library">
                    <thead>
                        <tr>
                            {headers.map((s, idx) => (<th key={idx}>{s}</th>))}
                        </tr>
                    </thead>
                    <tbody>
                        {props.data ? (
                            props.data.map((row, idx) => (
                                <tr key={idx}>
                                    <td>{row.title}</td>
                                    <td>{row.artists}</td>
                                    <td>{row.length}</td>
                                    <td>{row.album}</td>
                                    <td>{row.year}</td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan={headers.length}>
                                    <p>No saved songs available.</p>
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
};
