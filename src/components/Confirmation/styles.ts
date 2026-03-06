import styled from "styled-components"
import { cores } from "../../globalStyles"

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`

export const Title = styled.h3`
  font-size: 16px;
  font-weight: 700;
  color: ${cores.bege};
  margin-bottom: 16px;
`

export const Text = styled.p`
  font-size: 14px;
  line-height: 22px;
  font-weight: 400;
  color: ${cores.bege};
`

export const Button = styled.button`
  margin-top: 24px;
  background-color: ${cores.bege};
  color: ${cores.vermelho};
  padding: 8px 16px;
  font-size: 14px;
  font-weight: 700;
  border: none;
  cursor: pointer;
  `