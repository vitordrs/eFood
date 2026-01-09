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

import type { Restaurante } from '../../models/restaurantes'

type Props = {
  restaurante: Restaurante
}

const CardList = ({ restaurante }: Props) => (
  <CardItem>
    <ImgWrp>
      <CardImg src={restaurante.img} alt={restaurante.title} />

      <div className="tags">
        {restaurante.tipos.map((tipo) => (
          <Tag key={tipo}>{tipo}</Tag>
        ))}
      </div>
    </ImgWrp>

    <CardContent>
      <CardHeader>
        <CardTitle>{restaurante.title}</CardTitle>
        <Rating>
          {restaurante.nota} <span>⭐</span>
        </Rating>
      </CardHeader>

      <CardDesc>{restaurante.desc}</CardDesc>

      <Botao>Saiba mais</Botao>
    </CardContent>
  </CardItem>

)

export default CardList
