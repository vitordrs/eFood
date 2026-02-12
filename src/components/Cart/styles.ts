import styled from "styled-components";
import { cores } from "../../globalStyles";

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #000;
  opacity: 0.7;
`

export const CartContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: flex-end;
  z-index: 1;;
`

export const Sidebar = styled.aside`
  background-color: ${cores.vermelho};
  padding: 32px 16px;
  max-width: 360px;
  width: 100%;
  height: 100vh;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  z-index: 1;
`
export const CartItem = styled.li`
  display: flex;
  background-color: ${cores.bege};
  padding: 8px;
  margin-bottom: 16px;
  position: relative;

  img{
    width: 80px;
    height: 80px;
    object-fit: cover;
    margin-right: 8px;
  }

  button{
    position: absolute;
    right: 8px;
    bottom: 8px;
    background: none;
    border: none;
    cursor: pointer;

    img{
      width: 16px;
      height: 16px;
    }
  }
`

export const ProductInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`
export const TituloProduto = styled.h3`
  font-weight: 900;
  font-size: 18px;
  color: ${cores.vermelho};
  margin-bottom: 16px;
`

export const ProductPrice = styled.p`
  font-size: 14px;
  font-weight: 400;
  color: ${cores.vermelho};
`

export const Prices = styled.div`
  margin-top: 24px;
  margin-bottom:16px;
  display: flex;
  justify-content: space-between;

  p{
    font-size: 14px;
    font-weight: 700;
    color: ${cores.bege};
  }
`

export const CheckoutButton = styled.button`
  width: 100%;
  background-color: ${cores.bege};
  color: ${cores.vermelho};
  padding: 12px;
  font-size: 14px;
  font-weight: 700;
  border: none;
  cursor: pointer;
`


