import { Overlay, ModalContent, CloseButton, AddCard } from './styles'
import type { Produto } from '../ProductCards'
import closeIcon from '../../assets/img/close.png'

type Props = {
  produto: Produto
  onClose: () => void
  onAddToCart: (produto: Produto) => void
}

const ProductModal = ({ produto, onClose, onAddToCart }: Props) => {
  return (
    <Overlay onClick={onClose}>
      <ModalContent onClick={(e) => e.stopPropagation()}>
        <CloseButton onClick={onClose}>
          <img src={closeIcon} alt="Fechar" />
        </CloseButton>

        <img src={produto.foto} alt={produto.nome} />

        <div>
          <h3>{produto.nome}</h3>
          <p>{produto.descricao}</p>
          <p><strong>Porção:</strong> {produto.porcao}</p>
          <p><strong>Preço:</strong> R$ {produto.preco.toFixed(2)}</p>

          <AddCard
            onClick={() => {
              onAddToCart(produto)
              onClose()
            }}
          >
            Adicionar ao carrinho
          </AddCard>
        </div>
      </ModalContent>
    </Overlay>
  )
}

export default ProductModal
