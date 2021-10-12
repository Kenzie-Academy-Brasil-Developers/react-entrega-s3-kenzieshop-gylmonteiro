import { CardContainer } from "../../styles";
import Button from "@material-ui/core/Button";
const CardProducts = ({
  children: { description, id, image, price, title },
  children,
}) => {
  return (
    <CardContainer>
      <h3>{title}</h3>
      <img src={image} alt={title} />
      <h4>{price}</h4>
      <p>{description}</p>
      <Button>Adicionar</Button>
    </CardContainer>
  );
};

export default CardProducts;
