import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';

const PlaylistDisplay = ({ playlists, isVisible }) => {
    if (!isVisible) {
        return null;
    }

    // Custom Styles
    const spotifyTheme = {
        backgroundColor: '#1db954', // Spotify green
        borderColor: '#1db954',
    };

    const cardStyle = {
        backgroundColor: '#121212', // Spotify dark theme
        color: '#ffffff',
        width: '100%',
    };

    const buttonStyle = {
        color: '#ffffff',
        borderColor: '#1db954',
        backgroundColor: 'transparent',
        marginBottom: '10px',
    };

    return (
        <Container className="mt-4">
            <Row>
                <Col>
                    <Card style={cardStyle} className="p-4">
                        <Card.Body className="d-flex flex-column align-items-center">
                            <Card.Title>Playlists</Card.Title>
                            <ul className="list-unstyled">
                                {playlists.map((playlist) => (
                                    <li key={playlist.id} className="mb-2">
                                        <Button
                                            style={buttonStyle}
                                            variant="outline-light"
                                            onClick={() => console.log(`Clicked playlist: ${playlist.name}`)}
                                            onMouseOver={(e) => e.target.style.backgroundColor = '#1db954'}
                                            onMouseOut={(e) => e.target.style.backgroundColor = 'transparent'}
                                        >
                                            {playlist.name}
                                        </Button>
                                    </li>
                                ))}
                            </ul>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
};

export default PlaylistDisplay;
