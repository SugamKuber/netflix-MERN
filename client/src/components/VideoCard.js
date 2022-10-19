import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

const BookCard = (props) => {
  const video = props.video;

  return (
    <div className='card-container'>
      <img
        src='#'
        alt='video'
      />
      <div className='desc'>
        <h2>
          <Link to={`/show-video/${video._id}`}>{video.title}</Link>
        </h2>
        
        <p>{video.video_description}</p>
      </div>
    </div>
  );
};

export default BookCard;
