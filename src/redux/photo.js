import { photosRef } from '../firebase';
// import { store } from '../store';
import axios from 'axios';
import snapshotToArray from '../utils/snapshotToArray';

// ACTIONS
const GOT_PHOTOS = 'GOT_PHOTOS';
const ADD_PHOTO = 'ADD_PHOTO';

// CREATORS
const gotPhotos = allPhotos => ({
  type: 'GOT_PHOTOS',
  allPhotos,
})
const addPhoto = photo => ({
  type: 'ADD_PHOTO',
  payload: photo
})

// THUNKS
export const fetchInitialPhotos = () => async dispatch => {
  try {
    photosRef.on('value', snapshot => {
      dispatch(gotPhotos(snapshotToArray(snapshot)))
    })
  } catch (error) {
    console.error(error);
  }
}
export const uploadPhoto = file => async dispatch => {
  try {
    console.log('🚯', file)
    JSON.parse( JSON.stringify(file) )
    photosRef.push().set(file)
    // const dataToSend = new FormData();
    // dataToSend.append('file', file);
    // // dataToSend.append('upload_preset', 'photoblog')
    
    // const res = await axios.post('https://api.cloudinary.com/v1_1/calamityadam/image/upload', dataToSend);
    // const file = await res.json();
  } catch (error) {
    console.error(error)
  }
}

// HANDLERS
const handlers = {
  [GOT_PHOTOS]: (state, {allPhotos}) => ({
    ...state,
    allPhotos,
  }),
  [ADD_PHOTO]: (state, {payload}) => ({
    ...state,
    allPhotos: [...state.allPhotos, payload]
  })
};

// INITIAL STATE
const initialState = {
  allPhotos: [],
  selectedPhoto: {},
}

// REDUCER
const photoReducer = (state = initialState, action) => {
  if (handlers.hasOwnProperty(action.type)) {
    return handlers[action.type](state, action);
  }
  return state;
};

export default photoReducer
