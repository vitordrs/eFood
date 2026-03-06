// import sushi from '../assets/img/sushi.png'
// import massa from '../assets/img/Macarrao.png'
// import pizza from '../assets/img/pizza.png'

// export type Restaurante = {
//   id: number
//   titulo: string
//   tipo: string[]
//   descricao: string
//   capa: string
//   avaliacao: number
//   cardapio: Produto[]
// }

// export type Produto = {
//   id: number
//   nome: string
//   describe: string
//   foto: string
// }

// // export type Restaurante = {
// //   id: number,
// //   titulo: string,
// //   descricao: string,
// //   img: string,
// //   nota: number,
// //   tipos: string[]
// //   cardapio: Produto[]
// // }

// export const restaurantes: Restaurante[] = [
//   {
//     id: 1,
//     titulo: 'Hioki Sushi',
//     descricao: 'Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida.Experimente o Japão sem sair do lar com nosso delivery!',
//     capa: sushi,
//     avaliacao: 4.9,
//     tipo: ['Destaque da semana', 'Japonesa'],
//     cardapio: [
//       {
//         id: 1,
//         nome: 'Sushi',
//         describe: 'Sushis variados preparados com ingredientes frescos e selecionados.',
//         foto: sushi
//       },
//       {
//         id: 2,
//         nome: 'Sushi',
//         describe: 'Sushis variados preparados com ingredientes frescos e selecionados.',
//         foto: sushi
//       },
//       {
//         id: 3,
//         nome: 'Sushi',
//         describe: 'Sushis variados preparados com ingredientes frescos e selecionados.',
//         foto: sushi
//       },
//       {
//         id: 4,
//         nome: 'Sushi',
//         describe: 'Sushis variados preparados com ingredientes frescos e selecionados.',
//         foto: sushi
//       },
//       {
//         id: 5,
//         nome: 'Sushi',
//         describe: 'Sushis variados preparados com ingredientes frescos e selecionados.',
//         foto: sushi
//       },
//       {
//         id: 6,
//         nome: 'Sushi',
//         describe: 'Sushis variados preparados com ingredientes frescos e selecionados.',
//         foto: sushi
//       },
//     ]
//   },
//   {
//     id: 2,
//     titulo: 'La Dolce Vita Trattoria',
//     descricao: 'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
//     capa: massa,
//     avaliacao: 4.8,
//     tipo: ['Italiana'],
//     cardapio: [
//       {
//         id: 1,
//         nome: 'Pizza Marguerita',
//         describe: 'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
//         foto: pizza
//       },
//       {
//         id: 2,
//         nome: 'Pizza Marguerita',
//         describe: 'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
//         foto: pizza
//       },
//       {
//         id: 3,
//         nome: 'Pizza Marguerita',
//         describe: 'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
//         foto: pizza
//       },
//       {
//         id: 4,
//         nome: 'Pizza Marguerita',
//         describe: 'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
//         foto: pizza
//       },
//       {
//         id: 5,
//         nome: 'Pizza Marguerita',
//         describe: 'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
//         foto: pizza
//       },
//       {
//         id: 6,
//         nome: 'Pizza Marguerita',
//         describe: 'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
//         foto: pizza
//       },
//     ]
//   },
//   {
//     id: 3,
//     titulo: 'La Dolce Vita Trattoria',
//     descricao: 'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
//     capa: massa,
//     avaliacao: 4.8,
//     tipo: ['Italiana'],
//     cardapio: [
//       {
//         id: 1,
//         nome: 'Pizza Marguerita',
//         describe: 'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
//         foto: pizza
//       },
//       {
//         id: 2,
//         nome: 'Pizza Marguerita',
//         describe: 'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
//         foto: pizza
//       },
//       {
//         id: 3,
//         nome: 'Pizza Marguerita',
//         describe: 'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
//         foto: pizza
//       },
//       {
//         id: 4,
//         nome: 'Pizza Marguerita',
//         describe: 'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
//         foto: pizza
//       },
//       {
//         id: 5,
//         nome: 'Pizza Marguerita',
//         describe: 'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
//         foto: pizza
//       },
//       {
//         id: 6,
//         nome: 'Pizza Marguerita',
//         describe: 'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
//         foto: pizza
//       },
//     ]
//   },
//   {
//     id: 4,
//     titulo: 'La Dolce Vita Trattoria',
//     descricao: 'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
//     capa: massa,
//     avaliacao: 4.8,
//     tipo: ['Italiana'],
//     cardapio: [
//       {
//         id: 1,
//         nome: 'Pizza Marguerita',
//         describe: 'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
//         foto: pizza
//       },
//       {
//         id: 2,
//         nome: 'Pizza Marguerita',
//         describe: 'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
//         foto: pizza
//       },
//       {
//         id: 3,
//         nome: 'Pizza Marguerita',
//         describe: 'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
//         foto: pizza
//       },
//       {
//         id: 4,
//         nome: 'Pizza Marguerita',
//         describe: 'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
//         foto: pizza
//       },
//       {
//         id: 5,
//         nome: 'Pizza Marguerita',
//         describe: 'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
//         foto: pizza
//       },
//       {
//         id: 6,
//         nome: 'Pizza Marguerita',
//         describe: 'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
//         foto: pizza
//       },
//     ]
//   },
//   {
//     id: 5,
//     titulo: 'La Dolce Vita Trattoria',
//     descricao: 'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
//     capa: massa,
//     avaliacao: 4.8,
//     tipo: ['Italiana'],
//     cardapio: [
//       {
//         id: 1,
//         nome: 'Pizza Marguerita',
//         describe: 'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
//         foto: pizza
//       },
//       {
//         id: 2,
//         nome: 'Pizza Marguerita',
//         describe: 'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
//         foto: pizza
//       },
//       {
//         id: 3,
//         nome: 'Pizza Marguerita',
//         describe: 'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
//         foto: pizza
//       },
//       {
//         id: 4,
//         nome: 'Pizza Marguerita',
//         describe: 'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
//         foto: pizza
//       },
//       {
//         id: 5,
//         nome: 'Pizza Marguerita',
//         describe: 'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
//         foto: pizza
//       },
//       {
//         id: 6,
//         nome: 'Pizza Marguerita',
//         describe: 'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
//         foto: pizza
//       },
//     ]
//   },
//   {
//     id: 6,
//     titulo: 'La Dolce Vita Trattoria',
//     descricao: 'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
//     capa: massa,
//     avaliacao: 4.8,
//     tipo: ['Italiana'],
//     cardapio: [
//       {
//         id: 1,
//         nome: 'Pizza Marguerita',
//         describe: 'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
//         foto: pizza
//       },
//       {
//         id: 2,
//         nome: 'Pizza Marguerita',
//         describe: 'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
//         foto: pizza
//       },
//       {
//         id: 3,
//         nome: 'Pizza Marguerita',
//         describe: 'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
//         foto: pizza
//       },
//       {
//         id: 4,
//         nome: 'Pizza Marguerita',
//         describe: 'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
//         foto: pizza
//       },
//       {
//         id: 5,
//         nome: 'Pizza Marguerita',
//         describe: 'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
//         foto: pizza
//       },
//       {
//         id: 6,
//         nome: 'Pizza Marguerita',
//         describe: 'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
//         foto: pizza
//       },
//     ]
//   },
// ]