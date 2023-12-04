import React, { useState } from 'react';
import SearchBar from './components/SearchBar';
import SearchResults from './components/SearchResults';

const MusicApp = () => {
    const [searchResults, setSearchResults] = useState([]);
    const [isPlaylistVisible, setPlaylistVisibility] = useState(false);
    const [savedSongs, setSavedSongs] = useState([]);



    const addToSavedSongs = (song2save) => {
    //checking if the song is already saved
        if(!savedSongs.some((savedSong) => savedSong.id === song2save.id)){
            setSavedSongs((prevSavedSongs) => [...prevSavedSongs, song2save]);
        }
    }

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

            console.log("Sending request to backend with genre:", genres);
            const response = await fetch(`http://localhost:8080/api/search/${genres}`, {
                method: 'GET',
                headers: headers
            });

            if (!response.ok) {
                throw new Error('Search request failed');
            }
            const data = await response.json();
            console.log("Response from backend:", data); // Log the JSON response
            setSearchResults(data);
            setPlaylistVisibility(true);
        } catch (error) {
            console.error('Error during search:', error);
        }
    };
    // const renderSearchResults = () => {
    //     if (!isPlaylistVisible) return null;
    //
    //     return (
    //         <div>
    //             {searchResults.map((track, index) => (
    //                 <div key={index}>
    //                     <p>Track Name: {track.name}</p>
    //                     {/* Display other track details as needed */}
    //                 </div>
    //             ))}
    //         </div>
    //     );
    // };
    //
    // return (
    //     <div className="text-center p-4" style={{ backgroundColor: '#121212', color: '#ffffff' }}>
    //         <h1 style={{ color: '#1db954' }}>Music Playlist Search</h1>
    //         <SearchBar onSearch={searchPlaylists} />
    //         {renderSearchResults()}
    //     </div>
    // );
    console.log('Saved Songs:', savedSongs);
    return (
       <div>
        <Route path = "/MusicApp" exact>
            <div>
                <h1 >Song Search</h1>
                <SearchBar onSearch={searchPlaylists} />
                <SearchResults
                    playlists={searchResults}
                    isVisible={isPlaylistVisible}
                    addToSavedSongs={addToSavedSongs}
                />
            </div>
        </Route>
        <Route path="/SavedSongs" element={<SavedSongs data={savedSongs} />}>
            <SavedSongs data={savedSongs} />
        </Route>
    </div>
    );
};

export default MusicApp;
