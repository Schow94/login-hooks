import React, { useState, useContext } from 'react';

import { NameContext } from './context/NameContext';

import Appbar from '@material-ui/core/Appbar';
import withStyles from '@material-ui/core/styles/withStyles';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

const styles = theme => ({
  root: {
    flexGrow: 1
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    flexGrow: 1
  },
  signInButton: {
    backgroundColor: 'white'
  },
  signOutButton: {
    backgroundColor: 'red'
  }
});

// Need googleAPI for converting coordinates to location}

function Navbar(props) {
  const { classes } = props;
  const { name, changeName } = useContext(NameContext);

  const logOut = () => {
    changeName('');
  };

  return (
    <div className={classes.root}>
      <Toolbar position="fixed">
        <IconButton
          edge="start"
          className={classes.menuButton}
          color="inherit"
          aria-label="menu"
        >
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" className={classes.title}>
          {name ? `Welcome, ${name}` : null}
        </Typography>
        {name ? (
          <Button
            className={classes.signOutButton}
            backgroundColor="primary"
            onClick={logOut}
          >
            Log Out
          </Button>
        ) : (
          <Button className={classes.signInButton} backgroundColor="primary">
            Login
          </Button>
        )}
      </Toolbar>
    </div>
  );
}

export default withStyles(styles)(Navbar);
