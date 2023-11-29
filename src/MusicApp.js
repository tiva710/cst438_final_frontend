import React, { useState } from 'react';
import SearchBar from './components/SearchBar';
import PlaylistDisplay from './components/PlaylistDisplay';

const MusicApp = () => {
    const [searchResults, setSearchResults] = useState([]);
    const [isPlaylistVisible, setPlaylistVisibility] = useState(false);

    const searchPlaylists = async (genres) => {
// Retrieve the access token from sessionStorage
        const accessToken = sessionStorage.getItem('accessToken');
        if (!accessToken) {
            console.error("Access token not found in session storage");
            return;
        }
        console.log("Access Token: ", accessToken);
        try {
            const headers = new Headers({
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${accessToken}`
            });

            const response = await fetch(`http://localhost:8080/api/search/${genres}`, {
                method: 'GET',
                headers: headers
            });

            if (!response.ok) {
                throw new Error('Search request failed');
            }
            const data = await response.json();
            setSearchResults(data); // Update the state with the received data
            setPlaylistVisibility(true); // Show the playlist display
        } catch (error) {
            console.error('Error during search:', error);
        }
    };


    return (
        <div className="text-center p-4" style={{ backgroundColor: '#121212', color: '#ffffff' }}> {/* Spotify dark theme */}
            <h1 style={{ color: '#1db954' }}>Music Playlist Search</h1> {/* Spotify green for the title */}
            <SearchBar onSearch={searchPlaylists} />
            <PlaylistDisplay playlists={searchResults} isVisible={isPlaylistVisible} />
        </div>
    );
};

export default MusicApp;
