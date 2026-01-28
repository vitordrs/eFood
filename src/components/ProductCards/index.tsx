import {
  Produtos,
  BotaoAdd,
  Describe,
  FotoProduto,
  TituloProduto
} from './styles'

export type Produto = {
  id: number
  nome: string
  descricao: string
  foto: string
  preco: number
  porcao: string
}

type Props = {
  produto: Produto
  onAddToCart: (produto: Produto) => void
}

const ProductCard = ({ produto, onAddToCart }: Props) => {
  return (
    <Produtos>
      <FotoProduto src={produto.foto} alt={produto.nome} />
      <TituloProduto>{produto.nome}</TituloProduto>
      <Describe>{produto.descricao}</Describe>
      <BotaoAdd onClick={() => onAddToCart(produto)}>
        Adicionar ao carrinho
      </BotaoAdd>
    </Produtos>
  )
}

export default ProductCard
