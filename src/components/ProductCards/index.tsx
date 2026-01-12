import { Produtos, BotaoAdd, Describe, FotoProduto, TituloProduto } from './styles'
import type { Produto } from '../../models/restaurantes'

type Props = {
  produto: Produto
}

const ProductCard = ({ produto }: Props) => (
  <Produtos>
    <FotoProduto src={produto.foto} alt={produto.nome} />
    <TituloProduto>{produto.nome}</TituloProduto>
    <Describe>{produto.describe}</Describe>
    <BotaoAdd>Adicionar ao carrinho</BotaoAdd>
  </Produtos>
)

export default ProductCard