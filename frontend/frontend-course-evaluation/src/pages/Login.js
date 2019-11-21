import React from 'react';
import { Route, Link } from 'react-router-dom';
import {
  Grid,
  Avatar,
  Button,
  CssBaseline,
  TextField,
  Paper,
  Typography
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

function Login() {
  const useStyles = makeStyles(theme => ({
    root: {
      height: '100vh'
    },
    image: {
      backgroundImage: 'url(https://source.unsplash.com/random)',
      backgroundRepeat: 'no-repeat',
      backgroundColor: theme.palette.grey[50],
      backgroundSize: 'cover',
      backgroundPosition: 'center'
    },
    paper: {
      margin: theme.spacing(8, 4),
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center'
    },
    avatar: {
      margin: theme.spacing(1),
      backgroundColor: theme.palette.secondary.main
    },
    form: {
      width: '100%',
      marginTop: theme.spacing(1)
    },
    submit: {
      margin: theme.spacing(3, 0, 2)
    }
  }));

  const classes = useStyles();
  return (
    <div>
      <Grid container component='main' className={classes.root}>
        <CssBaseline />
        <Grid item xs={false} sm={4} md={7} className={classes.image} />
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <div className={classes.paper}>
            <Avatar className={classes.avatar}></Avatar>
            <Typography component='h1' variant='h5'>
              Sign in
            </Typography>
            <form className={classes.form} noValidate>
              <TextField
                variant='outlined'
                margin='normal'
                required
                fullWidth
                id='studentId'
                label='Student ID'
                name='stdID'
                autoComplete='studentId'
                autoFocus
              />
              <TextField
                variant='outlined'
                margin='normal'
                required
                fullWidth
                name='stdPin'
                label='PIN'
                type='password'
                id='stdPin'
                autoComplete='stdPin'
              />
              <Link to='/evaluation'>
                <Button
                  type='submit'
                  fullWidth
                  variant='contained'
                  color='primary'
                  className={classes.submit}
                >
                  Login
                </Button>
              </Link>
            </form>
          </div>
        </Grid>
      </Grid>
    </div>
  );
}

export default Login;
