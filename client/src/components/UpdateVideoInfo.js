import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import '../App.css';

class UpdateVideoInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      video_id: '',
      video_description: '',
      video_Category: '',
      upload_link: '',
      video_length: '',
    };
  }

  componentDidMount() {
    // console.log("Print id: " + this.props.match.params.id);
    axios
      .get('http://localhost:8082/api/video' + this.props.match.params.id)
      .then((res) => {
        // this.setState({...this.state, video: res.data})
        this.setState({
          title: res.data.title,
          video_id: res.data.video_id,
          video_description: res.data.video_description,
          video_Category: res.data.video_Category,
          upload_link: res.data.upload_link,
          video_length: res.data.video_length,
        });
      })
      .catch((err) => {
        console.log('Error from UpdateVideoInfo');
      });
  }

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = (e) => {
    e.preventDefault();

    const data = {
      title: this.state.title,
      video_id: this.state.video_id,
      video_description: this.state.video_description,
      video_Category: this.state.video_Category,
      upload_link: this.state.upload_link,
      video_length: this.state.video_length,
    };

    axios
      .put(
        'http://localhost:8082/api/video' + this.props.match.params.id,
        data
      )
      .then((res) => {
        this.props.history.push('/show-video/' + this.props.match.params.id);
      })
      .catch((err) => {
        console.log('Error in UpdateVideoInfo!');
      });
  };

  render() {
    return (
      <div className='UpdateVideoInfo'>
        <div className='container'>
          <div className='row'>
            <div className='col-md-8 m-auto'>
              <br />
              <Link
                to='/'
                className='btn btn-outline-warning float-left'>
                Show Video List
              </Link>
            </div>
            <div className='col-md-8 m-auto'>
              <h1 className='display-4 text-center'>Edit Video</h1>
              <p className='lead text-center'>Update Video's Info</p>
            </div>
          </div>

          <div className='col-md-8 m-auto'>
            <form
              noValidate
              onSubmit={this.onSubmit}>
              <div className='form-group'>
                <label htmlFor='title'>Title</label>
                <input
                  type='text'
                  placeholder='Title of the Video'
                  name='title'
                  className='form-control'
                  value={this.state.title}
                  onChange={this.onChange}
                />
              </div>
              <br />

              <div className='form-group'>
                <label htmlFor='video_id'>video id</label>
                <input
                  type='text'
                  placeholder='video id'
                  name='video_id'
                  className='form-control'
                  value={this.state.video_id}
                  onChange={this.onChange}
                />
              </div>

              <div className='form-group'>
                <label htmlFor='video_description'>video description</label>
                <input
                  type='text'
                  placeholder='video description'
                  name='video_description'
                  className='form-control'
                  value={this.state.video_description}
                  onChange={this.onChange}
                />
              </div>

              <div className='form-group'>
                <label htmlFor='video_Category'>video Category</label>
                <input
                  type='text'
                  placeholder='Category of Video'
                  name='video_Category'
                  className='form-control'
                  value={this.state.video_Category}
                  onChange={this.onChange}
                />
              </div>

              <div className='form-group'>
                <label htmlFor='upload_link'>upload link</label>
                <input
                  type='date'
                  placeholder='upload link'
                  name='upload_link'
                  className='form-control'
                  value={this.state.upload_link}
                  onChange={this.onChange}
                />
              </div>
              <div className='form-group'>
                <label htmlFor='video_length'>video length</label>
                <input
                  type='text'
                  placeholder='length of this Video'
                  name='video_length'
                  className='form-control'
                  value={this.state.video_length}
                  onChange={this.onChange}
                />
              </div>

              <button
                type='submit'
                className='btn btn-outline-info btn-lg btn-block'>
                Update Video
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default UpdateVideoInfo;
