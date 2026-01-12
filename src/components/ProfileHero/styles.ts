import styled from "styled-components";
import { cores } from "../../globalStyles";
import fundo from '../../assets/img/fundo.png'

export const Container = styled.section`
  width: 100%;
  font-size: 18px;
  font-weight: 900;
  color: ${cores.vermelho};
`

export const TopHero = styled.div`
  background-image: url(${fundo});
  background-size: cover;
  height: 186px;
  display: flex;
  align-items: center;
`

export const TopContent = styled.div`
  width: 100%;
  max-width: 1024px;
  margin: 0 auto;
  padding: 0 16px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const Logo = styled.img`
  height: 40px;
  cursor: pointer;
`

export const HeroPerfil = styled.div`
  height: 280px;
  background-size: cover;
  background-position: center;
  position: relative;
  display: flex;
  align-items: flex-end;

  &::after {
    content: '';
    position: absolute;
    inset: 0;
    background-color: rgba(0, 0, 0, 0.6);
  }
`

export const HeroContent = styled.div`
  position: relative;
  z-index: 1;
  max-width: 1024px;
  margin-left: 170px;
`

export const Tipo = styled.span`
  display: block;
  font-size: 32px;
  font-weight: 100;
  color: ${cores.branca};
  margin-top: 24px;
  margin-bottom: 156px;
`

export const Titulo = styled.h1`
  font-size: 32px;
  font-weight: 900;
  color: ${cores.branca};
  margin-bottom: 32px;
`