import { Container, Logo, Title } from './styles'
import logo from '../../assets/img/logo.png'

const Hero = () => (
  <Container>
    <Logo src={logo} alt="efood" />
    <Title>
      Viva experiências gastronômicas <br />
      no conforto da sua casa
    </Title>
  </Container>
)

export default Hero