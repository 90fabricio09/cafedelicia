import "../css/style.css"

function SobreConent() {

    const urlImg1 = "https://cdn.discordapp.com/attachments/973694626420641802/1171093786630303794/img.png?ex=655b6d14&is=6548f814&hm=46a0e9f523f6492bd2779085fbe458e6d5d9d68f2237da2fd157663018d81bc4&"

return (
  <section className="content-sobre">
    <h1 className="title-sobre">Sobre Nós</h1>

    <div className="main">
        <p>O Café Delícia oferece diversas opções de cafés, desde o tradicional espresso até os mais elaborados, como o cappuccino italiano, o latte doce de leite, o mocha Nutella e o woodyccino caramelo. Além disso, você pode experimentar o Japanese Drip Coffee, um café coado com a técnica japonesa de extração do café especial. O Cold Brew, um café extraído a frio pelo método Kyoto de gotejamento, também é uma ótima pedida para os dias mais quentes.</p>
        <img className="img-sobre" src={urlImg1}/>
        <p className="texto2-sobre">A cafeteria Café Delícia é um lugar aconchegante e charmoso, onde você pode saborear um café de qualidade, acompanhado de doces, salgados, tapiocas, crepiocas, omeletes e muito mais. A cafeteria tem uma decoração inspirada no filme Toy Story, com bonecos, quadros e objetos que remetem à animação. O ambiente é divertido e descontraído, ideal para um lanche com os amigos ou uma pausa no trabalho.</p>
    </div>
  </section>
  )
}

export default SobreConent;