
import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { uploadPhoto } from '../redux';
import Styled from 'styled-components';

const Section = Styled.div`
  /* padding-top: 4em; */
  box-sizing: border-box;
  position: relative;
  width: 100vw;
  overflow: hidden;
  height: 150vh;
  display: flex;
  justify-content: center;
  background-color: orange;
`;

const Photo = (props) => {
  const [ image, setImage ] = useState({});

  const handleSubmit = (event) => {
    console.log('submit clicked');
    event.preventDefault();
    props.postPhoto(image);
  };
  const handleChange = (event) => {
    event.preventDefault();
    console.log('changed');
    const files = event.target.files;
    console.log('files from change: ', files);
    // the image is at event.target.files[0]
    setImage(files[0]);
  };
    
  return (
    <Section>
      hello from photo.js
      <form  onSubmit={handleSubmit} disabled={true} >
      <label htmlFor="file">Image</label>
        <input 
          type="file"
          id="file"
          name="name"
          placeholder="Upload an image"
          required
          onChange={handleChange}
          disabled={props.loading}
        />
        <button type="submit" disabled={props.loading}>
          Upload{props.loading ? 'ing' : ''}
        </button>
      </form>
    </Section>
  );
};

const mapState = state => {
  return { loading: state.photo.uploading };
};
const mapDispatch = dispatch => ({
  postPhoto: photo => dispatch(uploadPhoto(photo))
});

export default connect(mapState, mapDispatch)(Photo);











