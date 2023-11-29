import React, { useState } from 'react';
import { Container, Row, Col, Card, Form, Button } from 'react-bootstrap';

const SearchBar = ({ onSearch }) => {
    const [searchQuery, setSearchQuery] = useState('');

    const handleSearch = () => {
        onSearch(searchQuery); // Passes the search query to the parent component
        // searchPlaylists(searchQuery); // This should be triggered when a search is performed

    };
    const Authorize = () => {
        var client_id = '057918093e824c6ab61ae3d1383d439c';
        var client_secret = 'a714f77626f94e4fb8bb1dc0ad0e9f5b';

        const authOptions = {
            method: 'POST',
            headers: {
                'Authorization': 'Basic ' + btoa(client_id + ':' + client_secret),
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            body: 'grant_type=client_credentials'
        };
         console.log("fetching...");


        fetch('https://accounts.spotify.com/api/token', authOptions)
            .then((response) => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json(); // Corrected this line
            })
            .then((data) => {
                console.log("Access Token:", data.access_token);
                sessionStorage.setItem("accessToken", data.access_token);
            })
            .catch((error) => {
                console.error('There has been a problem with your fetch operation:', error);
            });


        // request.post(authOptions, function(error, response, body) {
        //     if (!error && response.statusCode === 200) {
        //         var token = body.access_token;
        //     }
        // });

    }
    // Custom Styles
    const cardStyle = {
        backgroundColor: '#121212', // Spotify dark theme
        color: '#ffffff',
        width: '100vh',
    };

    const buttonStyle = {
        backgroundColor: '#1db954', // Spotify green
        borderColor: '#1db954',
    };

    const formControlStyle = {
        backgroundColor: '#282828', // Slightly lighter black for input
        color: '#ffffff',
        border: '1px solid #333333', // Darker border for contrast
    };

    return (
        <Container className="d-flex justify-content-center align-items-center my-4">
            <Row>
                <Col>
                    <Card style={cardStyle} className="p-4">
                        <Card.Body>
                            <Card.Title>Search</Card.Title>
                            <Form>
                                <Form.Group controlId="formSearch">
                                    <Form.Control
                                        type="text"
                                        placeholder="Enter music genres (e.g., country, metal, hip hop)"
                                        style={formControlStyle}
                                        onChange={(e) => setSearchQuery(e.target.value)}
                                    />
                                </Form.Group>
                                <Button style={buttonStyle} onClick={handleSearch}>
                                    Search
                                </Button>

                                <Button style={buttonStyle} onClick={Authorize}>
                                    Authorize
                                </Button>
                            </Form>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
};

export default SearchBar;
