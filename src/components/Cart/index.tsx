import { useState } from 'react'
import { useNavigate } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { close, remove } from "../../store/reducers/cart"
import type { RootReducer } from "../../store"

import {
  Overlay,
  CartContainer,
  Sidebar,
  Prices,
  TituloProduto,
  CartItem,
  ProductInfo,
  ProductPrice,
  CheckoutButton,
  EmptyCart
} from "./styles"

import lixeira from "../../assets/img/lixeira.png"

import DeliveryForm from '../DeliveryForm'
import PaymentForm from '../PaymentForm'
import Confirmation from '../Confirmation'

const Cart = () => {

  const { isOpen, items } = useSelector(
    (state: RootReducer) => state.cart
  )

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const [step, setStep] = useState<'cart' | 'delivery' | 'payment' | 'confirmation'>('cart')
  const [orderId, setOrderId] = useState('')

  const closeCart = () => {
    dispatch(close())
    setStep('cart')
  }

  const handleFinish = () => {
    dispatch(close())
    setStep('cart')
    navigate('/')
  }

  const getTotalPrice = () => {
    return items.reduce((acc, item) => acc + item.preco, 0)
  }

  if (!isOpen) return null

  return (
    <CartContainer>
      <Overlay onClick={closeCart} />

      <Sidebar>

        {step === 'cart' && (

          <>
            {items.length === 0 ? (

              <EmptyCart>
                <p>Seu carrinho está vazio 🛒</p>
                <p>Adicione alguns pratos para continuar.</p>
              </EmptyCart>

            ) : (

              <>
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

                <CheckoutButton onClick={() => setStep('delivery')}>
                  Continuar com a entrega
                </CheckoutButton>
              </>
            )}
          </>
        )}

        {step === 'delivery' && (
          <DeliveryForm
            onContinue={() => setStep('payment')}
            onBack={() => setStep('cart')}
          />
        )}

        {step === 'payment' && (
          <PaymentForm
            items={items}
            total={getTotalPrice()}
            onBack={() => setStep('delivery')}
            onSuccess={(id: string) => {
              setOrderId(id)
              setStep('confirmation')
            }}
          />
        )}

        {step === 'confirmation' && (
          <Confirmation
            orderId={orderId}
            onFinish={handleFinish}
          />
        )}

      </Sidebar>
    </CartContainer>
  )
}

export default Cart