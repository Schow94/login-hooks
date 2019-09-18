import React, { useState, useContext } from 'react';

import { NameContext } from './context/NameContext';
import TodoApp from './TodoApp';

import Card from '@material-ui/core/Card';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import withStyles from '@material-ui/core/styles/withStyles';
import Container from '@material-ui/core/Container';

// Hook - Input
function useInputState(initialVal) {
  const [value, setValue] = useState('');

  const handleChange = e => {
    setValue(e.target.value);
  };
  const reset = () => {
    setValue('');
  };

  return [value, handleChange, reset];
}

// Hook - Toggle
//Don't need this toggle hook anymore
function useToggleState(initialVal = false) {
  const [isFormOn, setIsFormOn] = useState(initialVal);

  const toggleForm = () => {
    setIsFormOn(!isFormOn);
  };

  return [isFormOn, toggleForm];
}

// Component - Form
function Form(props) {
  //3 hooks (1 for input, 1 for form, & 1 keeping track of name)
  const { classes } = props;
  const [value, handleChange, reset] = useInputState('');
  const { name, changeName } = useContext(NameContext);
  const [setIsFormOn, toggleForm] = useToggleState(true);

  const handleSubmit = e => {
    e.preventDefault();
    changeName(value);
    reset();
    toggleForm();
  };

  return (
    <>
      {!name ? (
        <Container className={classes.main} component="main" maxWidth="xs">
          <CssBaseline />
          <Card className={classes.paper}>
            <Typography component="h1" variant="h5">
              {name ? null : `Sign In`}
            </Typography>

            <Avatar className={classes.avatar}>
              <LockOutlinedIcon />
            </Avatar>
            <form className={classes.form} noValidate onSubmit={handleSubmit}>
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="name"
                label="Name"
                value={value}
                name="name"
                autoComplete="off"
                autoFocus
                onChange={handleChange}
              />
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="off"
              />
              <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Remember me"
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                className={classes.submit}
              >
                Sign In
              </Button>
            </form>
          </Card>
          <Box mt={8}></Box>
        </Container>
      ) : (
        <Container>
          <Typography
            className={classes.welcome}
            maxWidth="m"
            variant="h3"
          >{`Good evening, ${name}`}</Typography>
          <TodoApp />
        </Container>
      )}
    </>
  );
}

const styles = theme => ({
  '@global': {
    body: {
      backgroundColor: theme.palette.common.white
    }
  },

  paper: {
    marginTop: theme.spacing(1),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: 20
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1)
  },
  submit: {
    margin: theme.spacing(3, 0, 2)
  },
  welcome: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    fontSize: '5em',
    marginTop: '2em'
  }
});

export default withStyles(styles)(Form);
