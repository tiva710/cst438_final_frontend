import React, { useState }  from 'react';
import './SearchResults.css'
import { Container, Row, Col, Card, Button } from 'react-bootstrap';

const SearchResults = ({ playlists, isVisible, addToSavedSongs }) => {
    const [song2save, setSong2save] = useState(null);

    if (!isVisible) {
        return null;
    }

    // Custom Styles

    const cardStyle = {
        backgroundColor: '#121212', // Spotify dark theme
        color: '#ffffff',
    };

    const buttonStyle = {
        color: '#ffffff',
        borderColor: '#1db954',
        backgroundColor: 'transparent',
        marginBottom: '10px',
    };


    return (
        <Container className="mt-4 d-flex align-items-center">
            <Row>
                <Col>
                    <Card style={cardStyle} className="p-4">
                        <Card.Body className="d-flex flex-column align-items-center">
                            <h2>Results</h2>
                            <table id="results">
                                <thead>
                                    <tr>
                                        <th>Name</th>
                                        <th>Artist</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                {playlists
                                    .filter((playlist) => playlist.album.album_type === 'single')
                                    .map((playlist) => (
                                        <tr key={playlist.id}>
                                        <td>{playlist.name}</td>
                                        <td>{playlist.album.artists[0].name}</td>
                                        <td>
                                            <Button id = "addBtn"
                                            style={buttonStyle}
                                            variant="outline-light"
                                            onClick={() => {
                                                 const updatedSong2save = ({
                                                    id: playlist.id,
                                                    title: playlist.name,
                                                    artists: [playlist.album.artists[0].name],
                                                    length: playlist.length,
                                                    album: playlist.album,
                                                    year: playlist.year
                                                });
                                                setSong2save(updatedSong2save);
                                                addToSavedSongs(updatedSong2save);
                                                console.log(
                                                `Clicked plus button for playlist: ${playlist.name}`
                                                )

                                            }}
                                            >
                                            +
                                            </Button>
                                        </td>
                                        </tr>
                                    ))}

                                </tbody>
                            </table>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
};

export default SearchResults;
