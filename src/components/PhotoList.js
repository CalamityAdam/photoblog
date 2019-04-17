import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import IconButton from '@material-ui/core/IconButton';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import { fetchInitialPhotos } from '../redux';

const styles = theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
  },
  gridList: {
    flexWrap: 'nowrap',
    // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
    transform: 'translateZ(0)',
  },
  title: {
    color: theme.palette.primary.light,
  },
  titleBar: {
    background:
      'linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
  },
});

const PhotoList = ({ allPhotos, fetchPhotos, classes }) => {
  useEffect(() => {
    // this replaces componentDidMount
    fetchPhotos()
  }, [allPhotos.length])
  return (
    <div className={classes.root}>
      hello from photoList
        {allPhotos.length && (
      <GridList className={classes.gridList } cols={2.5}>
            {allPhotos.map((photo) => {
              return (
                <GridListTile key={photo.secure_url}>
                  <img src={photo.secure_url} alt={photo.original_filename} />
                  <GridListTileBar
                    title={photo.original_filename}
                    classes={{
                      root: classes.titleBar,
                      title: classes.title,
                    }}
                    actionIcon={
                      <IconButton>
                        <StarBorderIcon className={classes.title} />
                      </IconButton>
                    }
                  />
                </GridListTile>
              )
            })}
      </GridList>
        )}
      
      
    </div>
  )
}

const mapState = state => ({
  allPhotos: state.photo.allPhotos
})

const mapDispatch = dispatch => ({
  fetchPhotos: () => dispatch(fetchInitialPhotos())
})

PhotoList.propTypes = {
  classes: PropTypes.object.isRequired,
  allPhotos: PropTypes.array.isRequired,
  fetchPhotos: PropTypes.func.isRequired,
}

export default withStyles(styles)(connect(mapState, mapDispatch)(PhotoList))
