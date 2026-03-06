import * as S from "./styles"

type Props = {
  orderId: string
  onFinish: () => void
}

const Confirmation = ({ orderId, onFinish }: Props) => {
  return (
    <S.Container>
      <S.Title>Pedido Realizado - {orderId}</S.Title>
      <S.Text>
        Estamos felizes em informar que seu pedido já está
        em processo de preparação e em breve será entregue
        no endereço fornecido.
      </S.Text> <br />
      <S.Text>
        Estamos felizes em informar que seu pedido já está
        em processo de preparação e em breve será entregue
        no endereço fornecido.
      </S.Text> <br />
      <S.Text>
        Lembre-se da importância de higienizar as mãos após o recebimento do pedido, garantindo assim sua segurança e bem-estar durante a refeição.
      </S.Text> <br />
      <S.Text>
        Esperamos que desfrute de uma deliciosa e agradável experiência gastronômica. Bom apetite!
      </S.Text>
      <S.Button onClick={onFinish} >Concluir</S.Button>
    </S.Container>
  )
}

export default Confirmation