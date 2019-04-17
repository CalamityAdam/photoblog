import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { withStyles } from '@material-ui/core';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

const styles = {
  root: {
    flexGrow: 1,
    display: 'flex',
    position: 'fixed',
    margin: '0 4em',
    padding: '10px',
    width: 'calc(100vw - 8em)',
    color: '#fff',
    borderRadius: '0 0 1em 1em',
    zIndex: 2,
  }
};

const Navbar = ({ classes }) => {
  
  return (
      <div className={classes.root}>
        <AppBar position="static" color="default">
          <Typography variant="h6" color="inherit">
            <Link to="/photos">
              Photos
            </Link>
          </Typography>
          <Typography variant="h6" color="inherit">
            <Link to="/">
              other stuff?
            </Link>
          </Typography>
        </AppBar>
      </div>
  );
};

Navbar.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(Navbar);
