import styled from "styled-components";
import { cores } from "../../globalStyles";

export const Produtos = styled.div`
  background-color: ${cores.vermelho};
  color: ${cores.bege};
  padding: 8px;
  display: flex;
  flex-direction:column;
`

export const FotoProduto = styled.img`
  width: 100%;
  height: 167px;
  object-fit: cover;
`

export const TituloProduto = styled.h3`
  font-size: 16px;
  font-weight: 900;
  margin: 8px;
`

export const Describe = styled.p`
  font-size: 14px;
  font-weight: 400;
  margin-bottom: 8px;
`

export const BotaoAdd = styled.button`
  background-color: ${cores.bege};
  color: ${cores.vermelho};
  border: none;
  padding: 4px;
  font-size: 14px;
  font-weight: bold;
  cursor: pointer;
`