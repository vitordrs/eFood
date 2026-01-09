import styled from "styled-components";
import { cores } from "../../globalStyles";


export const CardContainer = styled.section`
  margin: 80px auto 120px;
  display: flex;
  gap: 80px;
  justify-content: center;
  flex-wrap: wrap;
`

export const CardItem = styled.div`
  width: 472px;
  background-color: ${cores.branca};
  border: 1px solid ${cores.vermelho};
  display: flex;
  flex-direction: column;
`

export const ImgWrp = styled.div`
  position: relative;
    .tags {
    position: absolute;
    top: 16px;
    right: 16px;
    display: flex;
    gap: 12px;
  }
`

export const CardImg = styled.img`
  width: 100%;
  height: 217px;
  object-fit: cover;
`

export const Tag = styled.span`
  background-color: ${cores.vermelho};
  color: ${cores.branca};
  padding: 6px 8px;
  font-size: 12px;
  font-weight: bold;
`

export const CardContent = styled.div`
  padding:16px;
`

export const CardHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom:8px;
`

export const CardTitle = styled.h3`
  font-size: 18px;
  font-weight: bold;
  color: ${cores.vermelho};
`

export const Rating = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
  font-size:18px;
  font-weight:bold;
  color:${cores.vermelho};
`

export const CardDesc = styled.p`
  font-size: 14px;
  line-height: 22px;
  color: ${cores.vermelho};
  margin-bottom: 16px;
`

export const Botao = styled.button`
  background-color: ${cores.vermelho};
  color: ${cores.branca};
  border: none;
  padding: 8px 16px;
  font-weight: bold;
  cursor: pointer;

`