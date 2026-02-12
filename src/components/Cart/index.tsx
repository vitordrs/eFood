import { useDispatch, useSelector } from "react-redux";
import { close, remove } from "../../store/reducers/cart";
import type { RootReducer } from "../../store";
import {
  Overlay,
  CartContainer,
  Sidebar,
  Prices,
  TituloProduto,
  CartItem,
  ProductInfo,
  ProductPrice,
  CheckoutButton
} from "./styles";

import lixeira from "../../assets/img/lixeira.png"; // use sua imagem aqui

const Cart = () => {
  const { isOpen, items } = useSelector(
    (state: RootReducer) => state.cart
  )

  const dispatch = useDispatch()

  const closeCart = () => {
    dispatch(close())
  }

  const getTotalPrice = () => {
    return items.reduce((acc, item) => acc + item.preco, 0)
  }


  if (!isOpen) return null

  return (
    <CartContainer>
      <Overlay onClick={closeCart} />
      <Sidebar>
        <ul>
          {items.map((item) => (
            <CartItem key={item.id}>
              <img src={item.foto} alt={item.nome} />

              <ProductInfo>
                <TituloProduto>{item.nome}</TituloProduto>
                <ProductPrice>
                  R$ {item.preco.toFixed(2)}
                </ProductPrice>
              </ProductInfo>

              <button onClick={() => dispatch(remove(item.id))}>
                <img src={lixeira} alt="Remover item" />
              </button>
            </CartItem>
          ))}
        </ul>

        <Prices>
          <p>Valor total</p>
          <p>R$ {getTotalPrice().toFixed(2)}</p>
        </Prices>

        <CheckoutButton>
          Continuar com a entrega
        </CheckoutButton>
      </Sidebar>
    </CartContainer>
  )
}

export default Cart;
