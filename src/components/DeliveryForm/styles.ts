import styled from "styled-components";
import { cores } from "../../globalStyles";

type InputProps = {
  hasError?: boolean
}

type FieldProps = {
  flex?: number
}

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  width: 100%;

  .error{
    color: ${cores.branca};
    font-size: 12px;
  }
`

export const Row = styled.div`
  display: flex;
  gap: 8px;
  width: 100%;
`

export const Field = styled.div<FieldProps>`
  display: flex;
  flex-direction: column;
  flex: ${(props) => props.flex || 1};
  min-width: 0;
`

export const Label = styled.label`
  font-size: 14px;
  font-weight: 700;
  color: ${cores.bege};
  margin-bottom: 8px;
`

export const Title = styled.h3`
  font-size: 16px;
  font-weight: 700;
  color: ${cores.bege};
  margin-bottom: 16px;
`

export const Input = styled.input<InputProps>`
  width: 100%;
  box-sizing: border-box;
  padding: 8px;
  background-color:${(props) => (props.hasError ? cores.vermelho : cores.bege)};
  border: ${(props) => (props.hasError ? `1px solid ${cores.bege}` : "none")};
  outline: none;
  cursor: text;
`

export const BackButton = styled.button`
  margin-top: 24px;
  width: 100%;
  background-color: ${cores.bege};
  color: ${cores.vermelho};
  padding: 8px 16px;
  font-size: 14px;
  font-weight: 700;
  border: none;
  cursor: pointer;
  `