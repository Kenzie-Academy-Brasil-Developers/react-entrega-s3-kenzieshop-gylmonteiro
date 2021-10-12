import { useSelector } from "react-redux";
import CardProducts from "../../components/CardProducts";
import { HomeContainer } from "../../styles";
const Home = () => {
  const products = useSelector((state) => state.products);

  return (
    <HomeContainer>
      {products.map((item) => (
        <CardProducts key={item.id}>{item}</CardProducts>
      ))}
    </HomeContainer>
  );
};

export default Home;
