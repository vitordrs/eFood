# E-Food

 Aplicação web de delivery desenvolvida para estudos de **React e arquitetura de aplicações modernas.**
O projeto consome uma API para listar restaurantes e permite realizar um fluxo completo de compra, incluindo carrinho, formulário de entrega, pagamento e confirmação do pedido.
---

## Deploy

 [Veja online](https://e-food-vitor.vercel.app/)
---

## Funcionalidades

- Listagem de restaurantes consumindo API
- Página individual de cada restaurante
- Modal com detalhes dos pratos
- Adição e remoção de itens do carrinho
- Fluxo completo de Checkout:
    - Carrinho
    - Endereço de entrega
    - Pagamento
    - Confirmação de pedido
- Validação de formulários
- Interface responsiva.
Focada em proporcionar uma melhor experiência ao usuário.
---

## Tecnologias utilizadas

![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)
![Redux](https://img.shields.io/badge/redux-%23593d88.svg?style=for-the-badge&logo=redux&logoColor=white)
![Styled Components](https://img.shields.io/badge/styled--components-%23DB7093.svg?style=for-the-badge&logo=styled-components&logoColor=white)
![Formik](https://img.shields.io/badge/Formik-%23172B4D.svg?style=for-the-badge&logo=formik&logoColor=white)
![Yup](https://img.shields.io/badge/Yup-%23F28E2B.svg?style=for-the-badge&logo=yup&logoColor=white)
![React Router](https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white)
![RestAPI](https://img.shields.io/badge/api-rest-blue?style=for-the-badge)
---
## Preview

 Interface inspirada em aplicações de delivery, com foco em experiência do usuário e organização de componentes.
---
![interação da home](./src/assets/preview/interação-inicial.gif)
---
![add cart](./src/assets/preview/adicionando_ao_carrinho.gif)
---
![removendo do carrinho](./src/assets/preview/removendo_do_carrinho.gif)
---
![Carrinho vazio](./src/assets/preview/carrinho_vazio.gif)
---
![Realizando compra](./src/assets/preview/fazendo_compra.gif)
---
---

### Como executar o projeto
- Clone o repositorio:
  - git clone https://github.com/vitordrs/eFood.git
- Entre na pasta do projeto:
  - cd eFood
- Instale as dependências:
 - npm install
- Execute o projeto:
 - npm run dev
O projeto ficará disponível em:
*http://localhost:5173*
*(ou na porta configurada do seu ambiente)*
---

### Estrutura do projeto
```
src
 ├─ components
 ├─ pages
 ├─ store
 │   └─ reducers
 ├─ assets
 ├─ globalStyles
 └─ App.tsx
```

- **components** → componentes reutilizáveis
- **pages** → páginas principais da aplicação
- **store** → gerenciamento de estado com Redux
- **assets** → imagens e recursos
- **globalStyles** → estilos globais

---

### Objetivo do projeto
Este projeto foi desenvolvido como parte dos estudos em **desenvolvimento front-end com React**, com foco em:
- componentização
- gerencimento de estado
- consumo de API
- validação de formulários
- organização de código
Layout responsivo para smartphone e tablet
---
##  Desafios encontrados

Alguns dos principais desafios durante o desenvolvimento foram:
- Estruturar corretamente o fluxo de checkout entre carrinho, entrega, pagamento e confirmação
- Gerenciar o estado global do carrinho utilizando Redux Toolkit
- Implementar validação eficiente dos formulários de entrega e pagamento
- Ajustar a responsividade da aplicação para diferentes tamanhos de tela

---
## Autor
Desenvolvido por **Vitor dos Reis Soares**
---
**Projeto desenvolvido para fins educacionais**
