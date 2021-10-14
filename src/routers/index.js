import Header from "../components/Header";
import Home from "../pages/Home";
import Cart from "../pages/Cart";
import { Route, Switch } from "react-router-dom";
const Routers = () => {
  return (
    <div>
      <Switch>
        <Route exact path="/">
          <Header />
          <Home />
        </Route>
        <Route path="/cart">
          <Header />
          <Cart />
        </Route>
      </Switch>
    </div>
  );
};

export default Routers;
