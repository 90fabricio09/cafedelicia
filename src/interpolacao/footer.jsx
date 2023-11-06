import "../css/style.css"

function Footer() {

  const instagram = "https://cdn.discordapp.com/attachments/1021540396381261985/1100205778943619142/instagram.png"
  const facebook = "https://cdn.discordapp.com/attachments/1021540396381261985/1100205779182682142/facebook.png"
  const youtube = "https://cdn.discordapp.com/attachments/1021540396381261985/1100205778712920084/youtube.png"

return (
  <div className="background-footer">
    <footer className="footer">
      <div className="footer-nome">
        <h2 className="footer-nome-title">Café Delícia</h2>
        <h4 className="footer-nome-descricao">Os melhores cafés de São Paulo!</h4>
        <p className="footer-direitos">© Todos direitos reservados.</p>
      </div>

      <div className="footer-informacoes">
        <h3 className="footer-informacoes-title">Informações</h3>
        <ul>
          <li><a href="/">Início</a></li>
          <li><a href="/sobre">Sobre</a></li>
          <li><a href="/produtos">Produtos</a></li>
          <li><a href="/login">Login</a></li>
          <li><a href="/termos">Cadastrar produtos</a></li>
        </ul>
      </div>

      <div className="footer-contato">
        <h3 className="footer-contato-title">Contato</h3>
        <div className="footer-contato-dados">
          <p className="footer-contato-email-telefone">+55 11 9999-9999</p>
          <p className="footer-contato-email-telefone">contato@cafezinho.com</p>
          {/* colocar um before */}
          <p className="footer-contato-endereco">Rua ABC, 100 - Aclimação</p>
          <p className="footer-contato-cidade">São Paulo - SP</p>
        </div>
      </div>

    </footer>
  </div>
  )
}

export default Footer;