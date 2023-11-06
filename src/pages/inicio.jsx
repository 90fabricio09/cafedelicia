import "../css/style.css"
import Menu from "./menu"
import UncontrolledExample from "../interpolacao/Slide"
import Produtos from "../interpolacao/produtos-inicio"
import Footer from "../interpolacao/footer"


function Inicio(){

    const logo = "https://cdn.discordapp.com/attachments/810935222819618857/1113074530685038653/Group_1_3.png"

    return(
        <div>
            <header className="header">
            <a href="/" className="coff"><img src="https://cdn.discordapp.com/attachments/973694626420641802/1171101178415816734/logo.png?ex=655b73f6&is=6548fef6&hm=f30b69ba147777617462514537d1cf317a41c96515febbb4c9952c523050a42c&" alt="" /></a>
                <Menu/>
            </header>
            <UncontrolledExample/>
            <br />
            <h1 className="produtosnss"><b>Nossos produtos</b></h1>
            <br />
            <Produtos/>
            <br />
            <Footer/>
        </div>
    )

}

export default Inicio;