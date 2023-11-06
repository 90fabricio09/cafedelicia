import Menu from "./menu"
import Footer from "../interpolacao/footer"
import SobreContent from "../interpolacao/content-sobre"
import "../css/style.css"

function Sobre(){

    const logo = "https://cdn.discordapp.com/attachments/810935222819618857/1113074530685038653/Group_1_3.png"

    return(
        <div>
            <header className="header">
            <a href="/" className="coff"><img src="https://cdn.discordapp.com/attachments/973694626420641802/1171101178415816734/logo.png?ex=655b73f6&is=6548fef6&hm=f30b69ba147777617462514537d1cf317a41c96515febbb4c9952c523050a42c&" alt="" /></a>
                <Menu/>
            </header>
            <br />
            <SobreContent/>
            <br />
            <Footer/>
        </div>
    )

}

export default Sobre