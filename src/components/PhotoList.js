import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchInitialPhotos } from '../redux'

export class PhotoList extends Component {
  componentDidMount() {
    console.log(this.props)
    this.props.fetchPhotos()
  }
  render() {
    return (
      <div>
        hello from photoList
        {this.props.allPhotos.length && (
          <div>
            {this.props.allPhotos.map((photo) => {
              return (
                <div key={photo.key}>
                  <img 
                    alt={photo.original_filename} 
                    src={photo.secure_url} 
                    width='500'
                  />
                </div>
              )
            })}
          </div>
        )}
      </div>
    )
  }
}

const mapState = state => ({
  allPhotos: state.photo.allPhotos
})

const mapDispatch = dispatch => ({
  fetchPhotos: () => dispatch(fetchInitialPhotos())
})

export default connect(mapState, mapDispatch)(PhotoList)
