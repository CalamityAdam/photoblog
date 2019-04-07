import React, { useState } from 'react';
import { connect } from 'react-redux';
import { uploadPhoto } from '../redux';

const Photo = ({ postPhoto }) => {
  const [ name, setName ] = useState('');
  
  const handleSubmit = (event) => {
    event.preventDefault();
    postPhoto({name: name})
    setName('')
  }
    
  return (
    <div>
      hello from photo.js
      <form onSubmit={handleSubmit}>
      <label htmlFor="name">Name: </label>
        <input 
          type="text"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};


const mapDispatch = dispatch => ({
  postPhoto: photo => dispatch(uploadPhoto(photo))
})

export default connect(null, mapDispatch)(Photo);
