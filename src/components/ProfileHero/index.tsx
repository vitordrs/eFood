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
import type { Restaurante } from '../../models/restaurantes'

type Props = {
  restaurante: Restaurante
}

const ProfileHero = ({ restaurante }: Props) => {
  const tipoPrincipal = restaurante.tipos.find(
    (tipo) => tipo !== 'Destaque da semana'
  )

  return (
    <Container>
      <TopHero>
        <TopContent>
          <span>Restaurantes</span>
          <Link to='/'>
            <Logo src={logo} alt='efood' />
          </Link>
          <span>0 Produto(s) no carrinho </span>
        </TopContent>
      </TopHero>

      <HeroPerfil style={{ backgroundImage: `url(${restaurante.img})` }}>
        <HeroContent>
          <Tipo>{tipoPrincipal}</Tipo>
          <Titulo>{restaurante.title}</Titulo>
        </HeroContent>
      </HeroPerfil>
    </Container>
  )
}

export default ProfileHero
