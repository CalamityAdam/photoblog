import { photosRef } from '../firebase';
// import { store } from '../store';
import axios from 'axios';
import snapshotToArray from '../utils/snapshotToArray';

// ACTIONS
const GOT_PHOTOS = 'GOT_PHOTOS';
const ADD_PHOTO = 'ADD_PHOTO';
const UPLOAD_STARTED = 'UPLOAD_STARTED';
const UPLOAD_FINISHED = 'UPLOAD_FINISHED';

// CREATORS
const gotPhotos = allPhotos => ({
  type: GOT_PHOTOS,
  allPhotos,
})
const addPhoto = photo => ({
  type: ADD_PHOTO,
  payload: photo
})
const uploadStarted = () => ({
  type: UPLOAD_STARTED,
})
const uploadComplete = () => ({
  type: UPLOAD_FINISHED,
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
export const uploadPhoto = imageFile => async dispatch => {
  try {
    dispatch(uploadStarted());
    const imageData = new FormData();
    imageData.append('file', imageFile);
    imageData.append('upload_preset', 'photoblog');
    const { data } = await axios.post('https://api.cloudinary.com/v1_1/calamityadam/image/upload', imageData)
    
    /**
     * cloudinary images format:
     * image: responseFile.secure_url,
     * largeImage: responseFile.eager[0].secure_url
     */
    
    console.log('📷', data)
    // JSON.parse( JSON.stringify(file) )
    photosRef.push().set(data)
    dispatch(uploadComplete());
    // TODO: remove file from `uploadingPhoto`
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
    allPhotos: [...state.allPhotos, payload],
  }),
  [UPLOAD_STARTED]: (state) => ({
    ...state,
    uploading: true,
  }),
  [UPLOAD_FINISHED]: (state) => ({
    ...state,
    uploading: false,
  })
};

// INITIAL STATE
const initialState = {
  allPhotos: [],
  selectedPhoto: {},
  photoToUpload: {},
  uploading: false,
}

// REDUCER
const photoReducer = (state = initialState, action) => {
  if (handlers.hasOwnProperty(action.type)) {
    return handlers[action.type](state, action);
  }
  return state;
};

export default photoReducer
