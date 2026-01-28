import {
  CardItem,
  ImgWrp,
  CardImg,
  Tag,
  CardContent,
  CardHeader,
  CardTitle,
  Rating,
  CardDesc,
  Botao
} from './styles'

import { Link } from 'react-router-dom'
import type { Restaurante } from '../../models/restaurantes'

type Props = {
  restaurante: Restaurante
}

const CardList = ({ restaurante }: Props) => (
  <CardItem>
    <ImgWrp>
      <CardImg
        src={restaurante.capa}
        alt={restaurante.titulo}
      />

      <div className="tags">
        <Tag>{restaurante.tipo}</Tag>
      </div>
    </ImgWrp>

    <CardContent>
      <CardHeader>
        <CardTitle>{restaurante.titulo}</CardTitle>
        <Rating>
          {restaurante.avaliacao} <span>⭐</span>
        </Rating>
      </CardHeader>

      <CardDesc>{restaurante.descricao}</CardDesc>

      <Link to={`/restaurante/${restaurante.id}`}>
        <Botao>Saiba mais</Botao>
      </Link>
    </CardContent>
  </CardItem>
)

export default CardList
