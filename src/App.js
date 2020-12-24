import './App.css';
import {BrowserRouter as Router,Switch,Route}  from "react-router-dom";
import Home from "./components/Home/Home";
import UpdatePage from './components/UpdatePage';
import RestaurantDetailsPage from './components/RestaurantDetailsPage';
import { RestaurantContextAPI } from './context/RestaurantContextAPI';

function App() {
  return (
      <RestaurantContextAPI>
        <div className="container">
          <Router>
            <Switch>
              <Route exact path="/"  component={Home}/>
              <Route exact path="/restaurants/:id/update"  component={UpdatePage}/>
              <Route exact path="/restaurants/:id"  component={RestaurantDetailsPage}/>
            </Switch>
          </Router>
        </div>
      </RestaurantContextAPI>
  );
}

export default App;
