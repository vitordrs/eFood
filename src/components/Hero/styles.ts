import styled from "styled-components";
import fundo from '../../assets/img/fundo.png'

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
  margin-top: 60px;
`
export const Title = styled.h1`
  margin-top: 100px;
  /* margin-bottom: 40px; */
  color: #e66767;
  font-size: 36px;
  font-weight: bold;
  text-align: center;
`