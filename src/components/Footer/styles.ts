import styled from 'styled-components'
import { cores } from '../../globalStyles'

export const FooterContainer = styled.footer`
  background-color: ${cores.bege};
  margin-top: 160px;
  padding: 40px 0;

  display: flex;
  flex-direction: column;
  align-items: center;
`

export const Logo = styled.img`
  margin-bottom: 32px;
`

export const IconsWrapper = styled.div`
  display: flex;
  gap: 8px;
  margin-bottom: 32px;
`

export const Icon = styled.img`
  cursor: pointer;
`

export const Msg = styled.p`
  max-width: 480px;
  text-align: center;
  font-size: 10px;
  color: ${cores.vermelho};
`