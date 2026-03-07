import styled from "styled-components";

export const List = styled.section`
  margin-top: 80px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 80px;
  max-width: 1024px;
  margin-left: auto;
  margin-right: auto;

  @media (max-width: 1023px){
    grid-template-columns: repeat(2, 350px);
    gap: 40px;
    padding: 0 16px;
    justify-content: center;
  }

  @media(max-width: 768px) {
    display: block;
  }
`