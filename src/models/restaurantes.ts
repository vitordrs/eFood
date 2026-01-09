import sushi from '../assets/img/sushi.png'
import massa from '../assets/img/Macarrao.png'

export type Restaurante = {
  id: number,
  title: string,
  desc: string,
  img: string,
  nota: number,
  tipos: string[]
}

export const restaurantes: Restaurante[] = [
  {
    id: 1,
    title: 'Hioki Sushi',
    desc: 'Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida.Experimente o Japão sem sair do lar com nosso delivery!',
    img: sushi,
    nota: 4.9,
    tipos: ['Destaque da semana', 'Japonesa']
  },
  {
    id: 2,
    title: 'La Dolce Vita Trattoria',
    desc: 'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    img: massa,
    nota: 4.8,
    tipos: ['Italiana']
  },
  {
    id: 3,
    title: 'La Dolce Vita Trattoria',
    desc: 'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    img: massa,
    nota: 4.8,
    tipos: ['Italiana']
  },
  {
    id: 4,
    title: 'La Dolce Vita Trattoria',
    desc: 'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    img: massa,
    nota: 4.8,
    tipos: ['Italiana']
  },
  {
    id: 5,
    title: 'La Dolce Vita Trattoria',
    desc: 'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    img: massa,
    nota: 4.8,
    tipos: ['Italiana']
  },
  {
    id: 6,
    title: 'La Dolce Vita Trattoria',
    desc: 'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    img: massa,
    nota: 4.8,
    tipos: ['Italiana']
  },
]