import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import axios from 'axios';

class CreateVideo extends Component {
  constructor() {
    super();
    this.state = {
      title: '',
      video_id: '',
      video_description: '',
      video_Category: '',
      upload_link: '',
      video_length: '',
    };
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
      .post('http://localhost:8082/api/video', data)
      .then((res) => {
        this.setState({
          title: '',
          video_id: '',
          video_description: '',
          video_Category: '',
          upload_link: '',
          video_length: '',
        });
        this.props.history.push('/');
      })
      .catch((err) => {
        console.log('Error in CreateVideo!');
      });
  };

  render() {
    return (
      <div className='CreateVideo'>
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
              <h1 className='display-4 text-center'>Add Video</h1>
              <p className='lead text-center'>Create new video</p>

              <form
                noValidate
                onSubmit={this.onSubmit}>
                <div className='form-group'>
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
                  <input
                    type='text'
                    placeholder='video_id'
                    name='video_id'
                    className='form-control'
                    value={this.state.video_id}
                    onChange={this.onChange}
                  />
                </div>

                <div className='form-group'>
                  <input
                    type='text'
                    placeholder='video_description'
                    name='video_description'
                    className='form-control'
                    value={this.state.video_description}
                    onChange={this.onChange}
                  />
                </div>

                <div className='form-group'>
                  <input
                    type='text'
                    placeholder='video Category'
                    name='video_Category'
                    className='form-control'
                    value={this.state.video_Category}
                    onChange={this.onChange}
                  />
                </div>

                <div className='form-group'>
                  <input
                    type='text'
                    placeholder='upload link'
                    name='upload_link'
                    className='form-control'
                    value={this.state.upload_link}
                    onChange={this.onChange}
                  />
                </div>
                <div className='form-group'>
                  <input
                    type='text'
                    placeholder='video length'
                    name='video_length'
                    className='form-control'
                    value={this.state.video_length}
                    onChange={this.onChange}
                  />
                </div>

                <input
                  type='submit'
                  className='btn btn-outline-warning btn-block mt-4'
                />
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default CreateVideo;
