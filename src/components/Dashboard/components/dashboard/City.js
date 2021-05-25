import {
  Avatar,
  // Box,
  Card,
  CardContent,
  Grid,
  Typography
} from '@material-ui/core';
// import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';

import { red } from '@material-ui/core/colors';
import { LocationCity } from '@material-ui/icons';

import { makeStyles } from '@material-ui/core/styles';

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

const Budget = (props) => {

  const classes = useStyles();
  return(
    

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
            City
          </Typography>
          <Typography
            color="textPrimary"
            variant="h5"
          >
            { props.city.city.name?
          props.city.city.name.toUpperCase() +
         "("+ props.city.city.country+")" : console.log()}
           
          </Typography>
        </Grid>
        <Grid item>
          <Avatar
            sx={{
              backgroundColor: red[600],
              height: 56,
              width: 56
            }}
          >
            <LocationCity />
          </Avatar>
        </Grid>
      </Grid>
      
    </CardContent>
  </Card>
  )
    };

export default Budget;
