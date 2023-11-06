import "../css/style.css"

function Menu(){
    return(
        <nav>
            <ul className="menu">
                <li><a href="/sobre">Sobre</a></li>
                <li><a href="/produtos">Produtos</a></li>
                <li><a href="/login">Login</a></li>
                <li><a href="/cadastrar">Cadastrar produto</a></li>
            </ul>
            
        </nav>

    )
}
export default Menu