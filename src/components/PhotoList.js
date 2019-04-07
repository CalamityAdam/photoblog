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
                  {photo.name}
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
