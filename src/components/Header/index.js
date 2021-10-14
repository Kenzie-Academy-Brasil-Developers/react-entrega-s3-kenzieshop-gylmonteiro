import Button from "@material-ui/core/Button";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import { useHistory } from "react-router";
import { ShoppingCart } from "@material-ui/icons";
import { useSelector } from "react-redux";
const Header = () => {
  const history = useHistory();
  const cart = useSelector((state) => state.cart);

  const itemAccumulator = cart.length;
  const sendTo = (path) => {
    history.push(path);
  };
  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <Button color="inherit" onClick={() => sendTo("/")}>
            Produtos
          </Button>

          <Button color="inherit" onClick={() => sendTo("/cart")}>
            Carrinho de Compras <ShoppingCart /> {itemAccumulator}
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Header;
