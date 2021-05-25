import {
  Box,
  Card,
  CardHeader,

  Divider,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow
} from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';
import PerfectScrollbar from "react-perfect-scrollbar";

const LatestOrders = (props) => {
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
 return(
  <Card {...props}
  {...props}classes={{
    root: classes.root, 
    label: classes.label, 
  }}>
    <CardHeader title="Predicted Weather" />
    <Divider />
    <PerfectScrollbar>
      <Box sx={{ minWidth: 800 }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>DATE</TableCell>
              <TableCell>TEMPERATURE</TableCell>
              <TableCell>WEATHER</TableCell>
              <TableCell>WIND SPEED</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {props.data.list.map((key) => (
              <TableRow hover key={key}>
                {key.dt_txt.substring(11) === "00:00:00" ? (
                  <>
                    <TableCell>{key.dt_txt.substring(0,10)}</TableCell>
                    <TableCell>
                     {Math.round(key.main.temp) + "°c"}
                      
                    </TableCell>
                    <TableCell>
                      {/* {moment(order.createdAt).format('DD/MM/YYYY')} */}
                      {key.weather[0].description.toUpperCase()}
                    </TableCell>
                    <TableCell>
                      {key.wind.speed}
                    </TableCell>
                  </>
                ) : (
                  console.log()
                )}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Box>
    </PerfectScrollbar>
    <Box
      sx={{
        display: "flex",
        justifyContent: "flex-end",
        p: 2,
      }}
    ></Box>
  </Card>
 )};

export default LatestOrders;
