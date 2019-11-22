import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Container } from '@material-ui/core';

import CourseCard from '../components/CourseCard';

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

  const [courseState] = useState({
    courseTitle: '',
    courseCode: '',
    courseDescription: '',
    numOfCourse: 5
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
