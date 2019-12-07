import React, { useState, useEffect } from 'react';

import axios from 'axios';

import { makeStyles } from '@material-ui/core/styles';
import { Grid, Container } from '@material-ui/core';

import CourseCard from '../components/CourseCard/CourseCard';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary
  }
}));

function Evaluation() {
  const classes = useStyles();

  const [courseState, setCourseState] = useState({
    courseTitle: '',
    courseCode: '',
    courseDescription: '',
    numOfCourse: 5
  });

  useEffect(() => {
    axios.get('http://localhost:5000/courses').then(courses => {
      console.log(courses);
    });
  });

  return (
    <div className={classes.root}>
      <h2>Select the course card to make your evaluation</h2>
      <Grid container spacing={3}>
        <Container>
          <Grid item xs={12} sm={6}>
            <CourseCard
              courseTitle={courseState.courseTitle}
              courseCode={courseState.courseCode}
              courseDescription={courseState.courseDescription}
            />
          </Grid>
        </Container>
      </Grid>
    </div>
  );
}

export default Evaluation;
