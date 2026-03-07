import styled from "styled-components";


export const ProductsList = styled.div`
  max-width: 1024px;
  margin: 56px auto;
  padding: 0 16px;

  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 32px;

  @media (max-width: 768px){
    display: flex;
    flex-direction: column;
  }
`
