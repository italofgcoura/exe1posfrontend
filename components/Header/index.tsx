import Menu from "../Menu";
import { HeaderComponent, HeaderContainer } from "./styles";
export default function Header() {
  return (
    <HeaderComponent>
      <HeaderContainer>
        <Menu />
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '40px' }}>
          <img src='https://imgflip.com/s/meme/Doge.jpg'
            width={150}
            style={{ borderRadius: '50%' }}
          />
          <div>
            <h1>Italo Coura</h1>
            <p>Coloque aqui sua biografia resumida.Coloque aqui sua biografia resumida.Coloque aqui sua biografia resumida.Coloque aqui sua biografia resumida.Coloque aqui sua biografia resumida.Coloque aqui sua biografia resumida.Coloque aqui sua biografia resumida.Coloque aqui sua biografia resumida.Coloque aqui sua biografia resumida.Coloque aqui sua biografia resumida.Coloque aqui sua biografia resumida.Coloque aqui sua biografia resumida.</p>
          </div>
        </div>
      </HeaderContainer>
    </HeaderComponent>
  )
}