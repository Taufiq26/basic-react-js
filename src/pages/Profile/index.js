import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './profile.css';
import './gallery.css';

function Profile() {
  const [publisher, setPublisher] = useState('Gwetaufiq');
  const [followers, setFollowers] = useState(0);
  const [following, setFollowing] = useState(0);
  const [posts, setPosts] = useState(0);
  const [postsData, setPostsData] = useState([]);

  const [imageTitle, setImageTitle] = useState('');
  const [imageDescription, setImageDescription] = useState('');
  const [imageLink, setImageLink] = useState('');

  const getPostsData = () => {
    axios.get('https://gallery-api.baradeveloper.com/public/posts')
      .then(response => {
        setPostsData(response.data.posts);
      })
      .catch(error => {
        console.error('Error fetching user data:', error);
      });
  };

  const submitImage = () => {
    const newPost = {
      title: imageTitle,
      description: imageDescription,
      image_link: imageLink,
      publisher: publisher,
    };
    axios.post('https://gallery-api.baradeveloper.com/public/post', newPost, {
      headers: {
        'Content-Type': 'application/json'
      }})
      .then(response => {
        alert('Image submitted successfully!');
        getPostsData();
      })
      .catch(error => {
        console.error('Error submitting image:', error);
      });
  }

  useEffect(() => {
    getPostsData();
  }, []);

  return (
    <>
      <div className="profile-page">
        <div className="profile-header">
          <h1>{publisher}</h1>
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
        
        <div className="container mb-4">
          <div className="row">
            <div className="col-4">
              <label htmlFor="title">Judul:</label>
              <input type="text" id="title" placeholder="Judul gambar" className="form-control" onChange={(e) => setImageTitle(e.target.value)} />
            </div>
            <div className="col-4">
              <label htmlFor="description">Deskripsi:</label>
              <input type="text" id="description" placeholder="Deskripsi gambar" className="form-control" onChange={(e) => setImageDescription(e.target.value)} />
            </div>
            <div className="col-4">
              <label htmlFor="image_link">Link Gambar:</label>
              <input type="text" id="image_link" placeholder="Link gambar" className="form-control" onChange={(e) => setImageLink(e.target.value)} />
            </div>
          </div>
          <button className="btn btn-primary mt-3 w-100" onClick={() => submitImage()}>Submit</button>
        </div>

        <Link className="btn btn-secondary" to="/">
          {"Go Back"}
        </Link>
      </div>

      <div className="pinterest-grid m-5">
        {postsData.map((post, index) => (
          <div className="pinterest-item" key={index}>
            <img src={post.image_link} alt={`Image ${post.title} ${index + 1}`} />
            <div className="title">{post.title}</div>
            <div className="author">{post.publisher}</div>
          </div>
        ))}
      </div>
    </>
  );
}
export default Profile;