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
    };

    const buttonStyle = {
        backgroundColor: '#1db954', // Spotify green
        borderColor: '#1db954',
        border: '1px solid #333333',
        borderRadius: '20px',
        height: '40px', 
        width: '75px',
    };

    const formControlStyle = {
        // backgroundColor: '#282828', // Slightly lighter black for input
        // color: '#ffffff',
        // border: '1px solid #333333', // Darker border for contrast
        backgroundColor: '#282828',
        color: '#ffffff',
        border: '1px solid #333333',
        borderRadius: '20px', // Adjust the border-radius for rounded corners
        height: '40px', // Adjust the height for a bigger input field
        width: '300px',
        marginRight: '10px',
        paddingLeft: '15px',
    };

    return (
        <div className="d-flex justify-content-center align-items-center my-4">
      <Row>
        <Col>
          <div style={cardStyle}>
            <div>
              <h2>Search</h2>
              <Form>
                <Form.Group controlId="formSearch">
                  <Form.Control
                    type="text"
                    placeholder= "     Enter song title "
                    style={formControlStyle}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                    <Button style={buttonStyle} onClick={handleSearch}>
                    Search
                    </Button>
                </Form.Group>
      
                <br></br>
                <br></br>
                <Button style={buttonStyle} onClick={Authorize}>
                  Authorize
                </Button>
                <br></br>
                <br></br>
              </Form>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default SearchBar;
