import {Link} from 'react-router-dom';
import React, {useState, useEffect} from 'react';
import SavedSongs from './SavedSongs';
import './Profile.css';

const LogoutModal = ({ isOpen, onClose, onConfirm }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-container">
        <div className="modal">
          <div className="modal-content">
            <p>Are you sure you want to logout?</p>
            <button className = "confirm" onClick={onConfirm}>Confirm</button>
            <button className="cancel" onClick={onClose}>Cancel</button>
          </div>
        </div>
    </div>
  );
};

export const Profile = () => {
    //Need to fetch user data including username and profile pic
    const [showModal, setShowModal] = useState(false);

      const handleLogout = () => {
        // Show the modal when the user clicks on logout
        setShowModal(true);
      };

      const handleConfirmLogout = () => {
        // Handle the actual logout logic here
        // For now, close the modal
        setShowModal(false);
      };

      const handleCloseModal = () => {
        setShowModal(false);
      };

    return(
        <div className = "profile">
            <img src="https://developer.spotify.com/images/guidelines/design/icon3@2x.png"
            alt = "Profile Pic"
            className="profile-picture"/>

            <h2> Username </h2>

            <button className = "logoutBtn"onClick={handleLogout}>Logout</button>

                  <LogoutModal
                    isOpen={showModal}
                    onClose={handleCloseModal}
                    onConfirm={handleConfirmLogout}
                  />

        </div>
    );
}
//export default Profile;