import CardList from "../CardList";
import { restaurantes } from "../../models/restaurantes";
import { List } from './styles'

const Cards = () => (
  <List>
    {restaurantes.map((restaurante) => (
      <CardList key={restaurante.id} restaurante={restaurante} />
    ))}
  </List>
)

export default Cards