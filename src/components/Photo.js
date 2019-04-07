import React from 'react';
import { connect } from 'react-redux';
import { uploadPhoto } from '../redux';

class Photo extends React.Component {
  state = {
    name: ''
  }
  
  handleChange = event => {
    const {
      target: { name, value },
    } = event
    this.setState({
      [name]: value,
    })
  }
  handleSubmit = (event) => {
    event.preventDefault();
    this.props.postPhoto(this.state)
    this.setState({
      name: '',
    })
  }
  
  render() {
    
    return (
      <div>
      hello from photo.js
      <form onSubmit={this.handleSubmit}>
      <label htmlFor="name">Name: </label>
        <input 
          type="text"
          name="name"
          value={this.state.name}
          onChange={this.handleChange}
        />
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}
};

const mapDispatch = dispatch => ({
  postPhoto: photo => dispatch(uploadPhoto(photo))
})

export default connect(null, mapDispatch)(Photo);
