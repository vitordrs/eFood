import { Link } from 'react-router-dom'
import {
  Container,
  TopHero,
  HeroPerfil,
  TopContent,
  HeroContent,
  Logo,
  Tipo,
  Titulo
} from './styles'

import logo from '../../assets/img/logo.png'
import { useDispatch, useSelector } from 'react-redux'
import type { RootReducer } from '../../store'
import { open } from '../../store/reducers/cart'

type Restaurante = {
  titulo: string
  tipo: string
  capa: string
}

type Props = {
  restaurante: Restaurante
}

const ProfileHero = ({ restaurante }: Props) => {
  const { items } = useSelector((state: RootReducer) => state.cart)

  const dispatch = useDispatch()

  return (
    <Container>
      <TopHero>
        <TopContent>
          <span>Restaurantes</span>

          <Link to='/'>
            <Logo src={logo} alt='efood' />
          </Link>
          <span onClick={() => dispatch(open())}>
            {items.length} Produto(s) no carrinho
          </span>
        </TopContent>
      </TopHero>

      <HeroPerfil
        style={{ backgroundImage: `url(${restaurante.capa})` }}
      >
        <HeroContent>
          <Tipo>{restaurante.tipo}</Tipo>
          <Titulo>{restaurante.titulo}</Titulo>
        </HeroContent>
      </HeroPerfil>
    </Container>
  )
}

export default ProfileHero