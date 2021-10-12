import Button from "@material-ui/core/Button";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
const Header = () => {
  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <Button color="inherit">Produtos</Button>
          <Button color="inherit">Carrinho de Compras</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Header;
