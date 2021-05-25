import {
  Avatar,
  Card,
  CardContent,
  Grid,
  Typography
} from '@material-ui/core';
import { indigo } from '@material-ui/core/colors';
import { WiDayWindy } from "weather-icons-react";
import { makeStyles } from '@material-ui/core/styles';

const TotalProfit = (props) => {
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
  <Card {...props}
  classes={{
    root: classes.root, 
    label: classes.label, 
  }}>
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
            Wind Speed
          </Typography>
          <Typography
            color="textPrimary"
            variant="h5"
          >
           {props.data.list[0].wind.speed}
          </Typography>
        </Grid>
        <Grid item>
          <Avatar
            sx={{
              backgroundColor: indigo[600],
              height: 56,
              width: 56
            }}
          >
            <WiDayWindy color="#3f51b5" />
          </Avatar>
        </Grid>
      </Grid>
    </CardContent>
  </Card>
)};

export default TotalProfit;
