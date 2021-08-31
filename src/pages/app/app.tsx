import DefaultLayout from "../../layout/defaultLayout";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import AddNewDestination from "../AddNewDestination/AddNewDestination";
import AllDestinations from "../AllDestinations/index";
import FavoriteDestination from "../FavoriteDestination/FavoriteDestination";
import { FavoriteContextProvider } from "../../store/favorites-context";
import "./App.css";

function App() {
  debugger;
  return (
    <FavoriteContextProvider>
      <Router>
        <Switch>
          <DefaultLayout>
            <Route path="/" exact>
              <AllDestinations />
            </Route>
            <Route path="/addnew" exact>
              <AddNewDestination />
            </Route>
            <Route path="/favorite" exact>
              <FavoriteDestination />
            </Route>
          </DefaultLayout>
        </Switch>
      </Router>
    </FavoriteContextProvider>
  );
}
export default App;
