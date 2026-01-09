import { FooterContainer, IconsWrapper, Logo, Icon, Msg } from './styles'
import logo from '../../assets/img/logo.png'
import insta from '../../assets/img/insta.png'
import face from '../../assets/img/facebook.png'
import tt from '../../assets/img/twitter.png'

const Footer = () => (
  <FooterContainer>
    <Logo src={logo} alt="efood" />

    <IconsWrapper>
      <Icon src={insta} alt="Instagram" />
      <Icon src={face} alt="Facebook" />
      <Icon src={tt} alt="Twitter" />
    </IconsWrapper>

    <Msg>
      A efood é uma plataforma para divulgação de estabelecimentos, a
      responsabilidade pela entrega, qualidade dos produtos é toda do
      estabelecimento contratado.
    </Msg>
  </FooterContainer>
)

export default Footer
