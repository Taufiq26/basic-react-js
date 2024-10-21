import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './profile.css';
import './gallery.css';

function Profile() {
  const [followers, setFollowers] = useState(0);
  const [following, setFollowing] = useState(0);
  const [posts, setPosts] = useState(0);

  return (
    <>
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
                <span
                  className="btn btn-outline-primary suptag" 
                  onClick={() => setFollowers(followers+100)}>
                    +100
                </span>
              </div>
              <div className="col-4 text-center">
                <p>Following</p>
                <p>{following}</p>
                <span
                  className="btn btn-outline-primary suptag" 
                  onClick={() => setFollowing(following+100)}>
                    +100
                </span>
              </div>
              <div className="col-4 text-center">
                <p>Posts</p>
                <p>{posts}</p>
                <span
                  className="btn btn-outline-primary suptag" 
                  onClick={() => setPosts(posts+1)}>
                    +1
                </span>
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

      <div class="pinterest-grid m-5">
        <div class="pinterest-item">
          <img src="https://i.pinimg.com/474x/90/7e/6c/907e6c32258c0b593844a8fec7bac6ef.jpg" alt="Image 1" />
          <div class="title">Warrior & His Robot</div>
          <div class="author">
            Hawthorne Entertainment
          </div>
        </div>
        <div class="pinterest-item">
          <img src="https://i.pinimg.com/enabled/474x/ac/bb/1a/acbb1a45ca75704eebc1f5a4aa5b6da1.jpg" alt="Image 1" />
          <div class="title">Warrior & His Robot</div>
          <div class="author">
            Hawthorne Entertainment
          </div>
        </div>
        <div class="pinterest-item">
          <img src="https://i.pinimg.com/enabled/474x/53/bf/b0/53bfb0bfe399636ffd402cd17f50247a.jpg" alt="Image 1" />
          <div class="title">Warrior & His Robot</div>
          <div class="author">
            Hawthorne Entertainment
          </div>
        </div>
        <div class="pinterest-item">
          <img src="https://i.pinimg.com/474x/99/a4/5f/99a45fd961c35f5a5560d107d6ea96c0.jpg" alt="Image 1" />
          <div class="title">Warrior & His Robot</div>
          <div class="author">
            Hawthorne Entertainment
          </div>
        </div>
        <div class="pinterest-item">
          <img src="https://i.pinimg.com/enabled/474x/1c/20/7c/1c207c7be2861d33f75fba2126d245ca.jpg" alt="Image 1" />
          <div class="title">Warrior & His Robot</div>
          <div class="author">
            Hawthorne Entertainment
          </div>
        </div>
        <div class="pinterest-item">
          <img src="https://i.pinimg.com/enabled/474x/65/5b/9e/655b9ec3a86ea71b9eb4f2a0da0a1661.jpg" alt="Image 1" />
          <div class="title">Warrior & His Robot</div>
          <div class="author">
            Hawthorne Entertainment
          </div>
        </div>
        <div class="pinterest-item">
          <img src="https://i.pinimg.com/enabled/474x/7b/e8/2d/7be82d991425fbc5cdef63e2c27de674.jpg" alt="Image 1" />
          <div class="title">Warrior & His Robot</div>
          <div class="author">
            Hawthorne Entertainment
          </div>
        </div>
        <div class="pinterest-item">
          <img src="https://i.pinimg.com/enabled/474x/83/c0/c0/83c0c0ad657695a3053cff3da19d42e3.jpg" alt="Image 1" />
          <div class="title">Warrior & His Robot</div>
          <div class="author">
            Hawthorne Entertainment
          </div>
        </div>
        <div class="pinterest-item">
          <img src="https://i.pinimg.com/enabled/474x/e7/ea/7d/e7ea7d4df756d8e783247687ff64f0cd.jpg" alt="Image 1" />
          <div class="title">Warrior & His Robot</div>
          <div class="author">
            Hawthorne Entertainment
          </div>
        </div>
        <div class="pinterest-item">
          <img src="https://i.pinimg.com/474x/1f/13/8a/1f138a6e79e9693ca43f7f75f96d43e2.jpg" alt="Image 1" />
          <div class="title">Warrior & His Robot</div>
          <div class="author">
            Hawthorne Entertainment
          </div>
        </div>
        <div class="pinterest-item">
          <img src="https://i.pinimg.com/474x/e4/96/63/e49663623792148f3554a38b9cc97a11.jpg" alt="Image 1" />
          <div class="title">Warrior & His Robot</div>
          <div class="author">
            Hawthorne Entertainment
          </div>
        </div>
        <div class="pinterest-item">
          <img src="https://i.pinimg.com/enabled/474x/1a/46/cd/1a46cd40d473a74a1aa329b98c1bac2c.jpg" alt="Image 1" />
          <div class="title">Warrior & His Robot</div>
          <div class="author">
            Hawthorne Entertainment
          </div>
        </div>
      </div>
    </>
  );
}

export default Profile;