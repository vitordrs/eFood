import styled from "styled-components";
import fundo from '../../assets/img/fundo.png'
import { cores } from "../../globalStyles";

export const Container = styled.header`
  background-image: url(${fundo});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  height: 360px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`

export const Logo = styled.img`
  margin-top: 50px;
`
export const Title = styled.h1`
  margin-top: 100px;
  color: ${cores.vermelho};
  font-size: 36px;
  font-weight: bold;
  text-align: center;
  background-color: transparent;
`