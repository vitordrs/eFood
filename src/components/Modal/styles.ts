import styled from 'styled-components'
import { cores } from '../../globalStyles'

export const Overlay = styled.div`
  position: fixed;
  inset: 0;
  background-color: rgba(0,0,0,0.8);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 10;

  @media (max-width: 768px){
  padding: 16px;
}
`

export const ModalContent = styled.div`
  background-color: ${cores.vermelho};
  max-width: 1024px;
  padding: 32px;
  display: flex;
  gap: 24px;
  position: relative;
  color: ${cores.branca};

  img {
    max-width: 280px;
    object-fit: cover;
  }

  h3 {
    font-size: 18px;
    font-weight: 900;
    margin-bottom: 16px;
  }

  p {
    font-size: 14px;
    line-height: 22px;
    font-weight: 400;
    margin-bottom: 16px;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    width: 90%;
    max-height: 90vh;
    overflow-y: auto;

    h3 {
    font-size: 16px;
    font-weight: 900;
    margin-bottom: 8px;
  }

    p {
      font-size: 12px;
      font-weight: 400;
      margin-bottom: 10px;
    }

    img {
      max-width: 100%;
      width: 100%;
      height: 200px;
      object-fit: cover;
    }
  }

`

export const AddCard = styled.button`
    background-color: ${cores.bege};
    color: ${cores.vermelho};
    border: none;
    font-size: 14px;
    font-weight: 700;
    padding: 8px 16px;
    cursor: pointer;

    /* @media (max-width: 768px){
    width: 100%;
    position: sticky;
    bottom: 0;
    margin-top: 16px;
  } */
`

export const CloseButton = styled.button`
  position: absolute;
  top: 8px;
  right: 8px;
  background: none;
  border: none;
  cursor: pointer;

  img {
    width: 16px;
    height: 16px;
  }
`


