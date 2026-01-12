import { useParams } from "react-router-dom";
import { restaurantes } from "../../models/restaurantes";
import Footer from "../../components/Footer";
import ProfileHero from "../../components/ProfileHero";
import { ProductsList } from "./styles";
import ProductCard from "../../components/ProductCards";

const Perfil = () => {
  const { id } = useParams()
  const restaurante = restaurantes.find(
    (r) => r.id === Number(id)
  )

  if (!restaurante) return null


  return (
    <>
      <ProfileHero restaurante={restaurante} />
      <ProductsList>
        {restaurante.cardapio.map((produto) => (
          <ProductCard
            key={produto.id}
            produto={produto} />
        ))}
      </ProductsList>

      <Footer />
    </>
  )
}

export default Perfil
