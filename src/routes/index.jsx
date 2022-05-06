import { Switch, Route } from "react-router-dom";
import { Home } from "../pages/Home";
import { Carts } from "../pages/Cart";

const Routes = () => {
  return (
    <Switch>
      <Route exact path = "/">
        <Home/>
      </Route>
      <Route exact path = "/cart">
        <Carts/>
      </Route>
    </Switch>
  )
}

export default Routes