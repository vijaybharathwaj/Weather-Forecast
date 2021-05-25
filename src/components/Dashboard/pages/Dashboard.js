import { Box, Container, Grid } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import SearchBar from "material-ui-search-bar";
import React, { Component } from "react";
import { fetchWeather } from "../../api";
import CityCard from "../components/dashboard/City";
import CloudCondition from "../components/dashboard/Cloud";
import TemperatureCard from "../components/dashboard/TempatureCard";
import WeatherCard from "../components/dashboard/WeatherCard";
import NextDaysData from "../components/dashboard/WeeklyData";
import WindCard from "../components/dashboard/Wind";


const useStyles = (theme) => ({
  content: {
    // flexGrow: 1,
    padding: theme.spacing(10),
    marginLeft: theme.spacing(0),
    "@media (max-width: 780px)": {
      padding: theme.spacing(1),
      marginLeft: theme.spacing(0),
      marginTop: theme.spacing(0),
    },
  },
  button: {
    marginTop: theme.spacing(4),
  },
});

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      city: "",
      data: "",
    };
  }

  search = async (e) => {
    const data = await fetchWeather(this.state.city);
    console.log(data);
    this.setState({ data });
  };

  render() {
    const { classes } = this.props;
    return (
      <>    
        <div className={classes.content} style={{ 
  backgroundImage: `url(${process.env.PUBLIC_URL + '/2.jpg'})`,
}}>
          <SearchBar
            value={this.state.value}
            onChange={(newValue) => this.setState({ city: newValue })}
            onKeyPress={(event) => {
              if (event.key === "Enter") {
                this.search();
              }
            }}
          />
          {this.state.data?

          <Box
            style={{ marginTop: "10px" }}
            sx={{
              // backgroundColor: "background.default",
              minHeight: "100%",
              py: 3,
            }}
          >
            <Container maxWidth={false}>
              <Grid container spacing={3}>
                <Grid item lg={3} sm={6} xl={3} xs={12}>
                  <CityCard city={this.state.data} />
                </Grid>
                <Grid item lg={3} sm={6} xl={3} xs={12}>
                  <TemperatureCard data={this.state.data} />
                </Grid>
                <Grid item lg={3} sm={6} xl={3} xs={12}>
                  <WeatherCard data={this.state.data}/>
                </Grid>
                <Grid item lg={3} sm={6} xl={3} xs={12}>
                  <WindCard data={this.state.data} />
                </Grid>
                
                <Grid item lg={4} md={6} xl={3} xs={12}>
                  <CloudCondition sx={{ height: "100%" }} data={this.state.data} />
                </Grid>
                <Grid item lg={8} md={12} xl={9} xs={12}>
                  <NextDaysData data={this.state.data} />
                </Grid>
                {/* <Grid item lg={8} md={12} xl={9} xs={12}>
                  <LinesChart data={this.state.data}/>
                </Grid> */}
              </Grid>
            </Container>
          </Box>:
          console.log()}
        </div>
        <div style={{ 
  backgroundImage: `url(${process.env.PUBLIC_URL + '/2.jpg'})`,
}} />
    
      
      </>
    );
  }
}

export default withStyles(useStyles)(Dashboard);
