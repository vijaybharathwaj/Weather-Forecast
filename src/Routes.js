// eslint-disable-next-line
import { BrowserRouter as BrowserRouter, Route } from "react-router-dom";
import LinesChart from './components/Dashboard/components/LineChart';
import Dashboard from './components/Dashboard/pages/Dashboard';
function Routes() {
  return (
    <BrowserRouter>
     
      <Route path="/" exact component={Dashboard}/>
      <Route path="/LineChart" component={LinesChart}/>



 
    </BrowserRouter>
  );
}

export default Routes;
