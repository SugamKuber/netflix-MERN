import React, { Component } from 'react';
import '../App.css';
import axios from 'axios';
import { Link } from 'react-router-dom';
import VideoCard from './VideoCard';

class ShowVideoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      videos: [],
    };
  }

  componentDidMount() {
    axios
      .get('http://localhost:8082/api/video')
      .then((res) => {
        this.setState({
          videos: res.data,
        });
      })
      .catch((err) => {
        console.log('Error from ShowVideoList');
      });
  }

  render() {
    const videos = this.state.videos;
    console.log('PrintVideos: ' + videos);
    let videoList;

    if (!videos) {
      videoList = 'there is no video record!';
    } else {
      videoList = videos.map((video, k) => (
        <VideoCard
          video={video}
          key={k}
        />
      ));
    }

    return (
      <div className='ShowVideoList'>
        <div className='container'>
          <div className='row'>
            <div className='col-md-12'>
              <br />
              <h2 className='display-4 text-center'>Videos List</h2>
            </div>

            <div className='col-md-11'>
              <Link
                to='/create-video'
                className='btn btn-outline-warning float-right'>
                + Add New Video
              </Link>
              <br />
              <br />
              <hr />
            </div>
          </div>

          <div className='list'>{videoList}</div>
        </div>
      </div>
    );
  }
}

export default ShowVideoList;
