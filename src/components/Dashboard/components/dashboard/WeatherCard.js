import {
  Avatar,
  Box,
  Card,
  CardContent,
  Grid,
  // LinearProgress,
  Typography
} from '@material-ui/core';
import { orange } from '@material-ui/core/colors';

import { makeStyles } from '@material-ui/core/styles';

import { WiCloudy } from "weather-icons-react";

const TasksProgress = (props) => {
  const useStyles = makeStyles({
    root: {
      background:'linear-gradient(to right top, #c4e5ea, #bfdade, #b9cfd3, #b4c5c7, #aebabc)',
      borderRadius: 3,
      border: 0,
      color: 'white',
      height: '100%',
      padding: '0 30px',
      // boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    },
    label: {
      textTransform: 'capitalize',
    },
  });
  const classes = useStyles();
 
  return (
  <Card
    sx={{ height: '100%' }}
    {...props}
    classes={{
      root: classes.root, 
      label: classes.label, 
    }}
  >
    <CardContent>
      <Grid
        container
        spacing={3}
        sx={{ justifyContent: 'space-between' }}
      >
        <Grid item>
          <Typography
            color="textSecondary"
            gutterBottom
            variant="h6"
          >
            Weather
          </Typography>
          <Typography
            color="textPrimary"
            
          >
            {props.data.list[0].weather[0].description.toUpperCase()}
          </Typography>
        </Grid>
        <Grid item>
          <Avatar
            sx={{
              backgroundColor: orange[600],
              height: 56,
              width: 56
            }}
          >
            <WiCloudy color='#3f51b5' />
          </Avatar>
        </Grid>
      </Grid>
      <Box sx={{ pt: 3 }}>
        {/* <LinearProgress
          value={75.5}
          variant="determinate"
        /> */}
      </Box>
    </CardContent>
  </Card>)
};

export default TasksProgress;
