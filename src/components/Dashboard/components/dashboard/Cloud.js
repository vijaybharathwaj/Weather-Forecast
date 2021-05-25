
import {
  Box,
  // Button,
  Card,
  CardHeader,
  Divider,

  List,
  ListItem,

  ListItemIcon,
  // ListItemAvatar,
  ListItemText,
} from "@material-ui/core";

import { makeStyles } from '@material-ui/core/styles';



const LatestProducts = (props) => {
  const useStyles = makeStyles({
    root: {
      background:'#959FA0',
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
  <Card {...props}classes={{
    root: classes.root, 
    label: classes.label, 
  }}>
    <CardHeader title="Weather Situation" />
    <Divider />
    <List>
      {props.data.list.map((key) => (
       
          key.dt_txt.substring(11) === "12:00:00" ? (
            <>
            <ListItem key={key}>
              <ListItemIcon>
                <img
                  src={`https://openweathermap.org/img/wn/${key.weather[0].icon}@2x.png`}
                  alt={key.weather[0].description}
                  style={{
                    height: 48,
                    width: 48,
                  }}
                />
              </ListItemIcon>
              <ListItemText primary={key.weather[0].description + "("+ key.dt_txt.substring(0,10) + ")"} />
              </ListItem>
            </>
          ) : (
            console.log()
          )
       
      ))}
    </List>
    <Divider />
    <Box
      sx={{
        display: "flex",
        justifyContent: "flex-end",
        p: 2,
      }}
    ></Box>
  </Card>
)};

export default LatestProducts;
