import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import axios from 'axios';

class ShowVideoDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      video: {},
    };
  }

  componentDidMount() {
    // console.log("Print id: " + this.props.match.params.id);
    axios
      .get('http://localhost:8082/api/video' + this.props.match.params.id)

      .then((res) => {
        // console.log("Print-showVideoDetails-API-response: " + res.data);
        this.setState({
          video: res.data,
        });
      })
      .catch((err) => {
        console.log('Error from ShowVideoDetails');
      });
  }

  onDeleteClick(id) {
    axios
      .delete('http://localhost:8082/api/video/' + id)
      .then((res) => {
        this.props.history.push('/');
      })
      .catch((err) => {
        console.log('Error form ShowVideoDetails_deleteClick');
      });
  }

  render() {
    const video = this.state.video;
    let VideoItem = (
      <div>
        <table className='table table-hover table-dark'>
          {/* <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">First</th>
            <th scope="col">Last</th>
            <th scope="col">Handle</th>
          </tr>
        </thead> */}
          <tbody>
            <tr>
              <th scope='row'>1</th>
              <td>Title</td>
              <td>{video.title}</td>
            </tr>
            <tr>
              <th scope='row'>2</th>
              <td>Video Author</td>
              <td>{video.video_id}</td>
            </tr>
            <tr>
              <th scope='row'>3</th>
              <td>Video description</td>
              <td>{video.video_description}</td>
            </tr>
            <tr>
              <th scope='row'>4</th>
              <td>Video Category</td>
              <td>{video.video_Category}</td>
            </tr>
            <tr>
              <th scope='row'>5</th>
              <td>Upload Link</td>
              <td>{video.upload_link}</td>
            </tr>
            <tr>
              <th scope='row'>6</th>
              <td>Video length</td>
              <td>{video.video_length}</td>
            </tr>
          </tbody>
        </table>
      </div>
    );

    return (
      <div className='ShowVideoDetails'>
        <div className='container'>
          <div className='row'>
            <div className='col-md-10 m-auto'>
              <br /> <br />
              <Link
                to='/'
                className='btn btn-outline-warning float-left'>
                Show Video List
              </Link>
            </div>
            <br />
            <div className='col-md-8 m-auto'>
              <h1 className='display-4 text-center'>Video's Record</h1>
              <p className='lead text-center'>View Video's Info</p>
              <hr /> <br />
            </div>
          </div>
          <div>{VideoItem}</div>

          <div className='row'>
            <div className='col-md-6'>
              <button
                type='button'
                className='btn btn-outline-danger btn-lg btn-block'
                onClick={this.onDeleteClick.bind(this, video._id)}>
                Delete Video
              </button>
              <br />
            </div>

            <div className='col-md-6'>
              <Link
                to={`/edit-video/${video._id}`}
                className='btn btn-outline-info btn-lg btn-block'>
                Edit Video
              </Link>
              <br />
            </div>
          </div>
          {/* <br />
            <button type="button" class="btn btn-outline-info btn-lg btn-block">Edit Video</button>
            <button type="button" class="btn btn-outline-danger btn-lg btn-block">Delete Video</button> */}
        </div>
      </div>
    );
  }
}

export default ShowVideoDetails;
