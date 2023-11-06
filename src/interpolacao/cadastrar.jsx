import "../css/style.css"

function Log() {


return (
  <div className="section-login">
    <div class = "boxprodutos">
      <div class ="inbox">
        <h1>Cadastrar produto</h1>
        <form>
          <input type="name" id="name" name="name" placeholder="Nome do produto"></input>
          <input type="name" id="descricao" name="descricao" placeholder="Descrição"></input>
          <input type="name" id="sobremesa" name="sobremesa" placeholder="Sobremesa"></input>
          <input type="name" id="validade" name="validade" placeholder="Data validade"></input>
          <input type="name" id="estoque" name="estoque" placeholder="Quantidade de estoque"></input>
          <button tittle="solid" type="submit" class="btn-login" >Enviar</button>
        </form>
      </div>
    </div>
  </div>
  )
}

export default Log;