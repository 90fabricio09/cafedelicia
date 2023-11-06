import "../css/style.css"

function Produtos() {


return (
  <div className="section-produto">
    <div className="produto">
        <img className="img-produto" src="https://cdn.discordapp.com/attachments/973694626420641802/1171090023890821160/Sem_Titulo-1.png?ex=655b6993&is=6548f493&hm=c2ef6d7e82c8e9626fe7ecac669734fb85acd222fa7c148866fc08d62a1383d5&"/>
        <span className="preco-produto">R$ 14,90</span>
        <h2 className="title-produto">Café</h2>
        <a className="btn-produto" href="/">Comprar Agora</a>
    </div>
    <div className="produto">
        <img className="img-produto" src="https://cdn.discordapp.com/attachments/973694626420641802/1171089923512750192/Sem_Titulo-1.png?ex=655b697b&is=6548f47b&hm=f0bdfefb6bcee5e0623219e3e1f7c7500d005f50db4b02d14f2398690e51a06c&"/>
        <span className="preco-produto">R$ 17,99</span>
        <h2 className="title-produto">Chá</h2>
        <a className="btn-produto" href="/">Comprar Agora</a>
    </div>
    <div className="produto">
        <img className="img-produto" src="https://cdn.discordapp.com/attachments/973694626420641802/1171090873610674217/Sem_Titulo-1.png?ex=655b6a5e&is=6548f55e&hm=e16d77b76f149b1b8beadfe8566b203e3a62e1e4a695ccd407410e394969dd58&"/>
        <span className="preco-produto">R$ 25,99</span>
        <h2 className="title-produto">Capuccino</h2>
        <a className="btn-produto" href="/">Comprar Agora</a>
    </div>
    </div>
)}

export default Produtos;