import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Footer from "../../components/Footer";
import ProfileHero from "../../components/ProfileHero";
import { ProductsList } from "./styles";
import ProductCard from "../../components/ProductCards";
import type { Produto } from "../../components/ProductCards";
import ProductModal from "../../components/Modal";
import { useDispatch } from "react-redux";
import { add, open } from "../../store/reducers/cart";
import Cart from "../../components/Cart";


export type Restaurante = {
  id: number
  titulo: string
  tipo: string
  descricao: string
  capa: string
  cardapio: Produto[]
  preco: number
}

const Perfil = () => {
  const { id } = useParams<{ id: string }>()
  const [restaurante, setRestaurante] = useState<Restaurante | null>(null)
  const [loading, setLoading] = useState(true)

  const dispatch = useDispatch()

  const [modalAberta, setModalAberta] = useState(false)
  const [produtoSelecionado, setProdutoSelecionado] = useState<Produto | null>(null)

  useEffect(() => {
    fetch('https://api-ebac.vercel.app/api/efood/restaurantes')
      .then((res) => res.json())
      .then((data: Restaurante[]) => {
        const restauranteSelecionado = data.find(
          (r) => r.id === Number(id)
        )
        setRestaurante(restauranteSelecionado || null)
      })
      .finally(() => setLoading(false))
  }, [id])

  const abrirModal = (produto: Produto) => {
    setProdutoSelecionado(produto)
    setModalAberta(true)
  }

  const fecharModal = () => {
    setModalAberta(false)
    setProdutoSelecionado(null)
  }

  useEffect(() => {
    if (modalAberta) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'auto'
    }

    return () => {
      document.body.style.overflow = 'auto'
    }
  }, [modalAberta])


  const handleAddToCart = (produto: Produto) => {
    dispatch(add(produto))
    dispatch(open())
  }

  if (loading) return <h1>Carregando...</h1>
  if (!restaurante) return null

  return (
    <>
      <ProfileHero restaurante={restaurante} />

      <ProductsList>
        {restaurante.cardapio.map((produto) => (
          <ProductCard
            key={produto.id}
            produto={produto}
            onAddToCart={abrirModal}
          />
        ))}
      </ProductsList>

      {modalAberta && produtoSelecionado && (
        <ProductModal
          produto={produtoSelecionado}
          onClose={fecharModal}
          onAddToCart={handleAddToCart}
        />
      )}
      <Cart />
      <Footer />
    </>
  )
}

export default Perfil
