import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './profile.css';

function Profile() {
  const [followers, setFollowers] = useState(0);
  const [following, setFollowing] = useState(0);
  const [posts, setPosts] = useState(0);

  return (
    <div className="profile-page">
      <div className="profile-header">
        <h1>John Doe</h1>
        <p>Software Engineer</p>
      </div>
      <div className="profile-picture-container">
        <img src="https://via.placeholder.com/150" alt="Profile Picture" className="profile-picture" />
      </div>
      <div className="profile-content">
        <div className="profile-stats">
          <div className="row">
            <div className="col-4 text-center">
              <p>Followers</p>
              <p>{followers}</p>
            </div>
            <div className="col-4 text-center">
              <p>Following</p>
              <p>{following}</p>
            </div>
            <div className="col-4 text-center">
              <p>Posts</p>
              <p>{posts}</p>
            </div>
          </div>
        </div>
        <div className="profile-info">
          <h2>About Me</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet nulla auctor, vestibulum magna sed, convallis ex.</p>
        </div>
      </div>
      <Link className="btn btn-secondary" to="/">
        {"Go Back"}
      </Link>
    </div>
  );
}

export default Profile;