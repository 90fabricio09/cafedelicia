import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from 'react-bootstrap/Carousel';

function UncontrolledExample() {

  const urlImg1 = "https://cdn.discordapp.com/attachments/973694626420641802/1171091787713101916/Sem_Titulo-2.png?ex=655b6b38&is=6548f638&hm=4b6e5d95571049a1508368e7d762d42d75658ebdcfb75c9a8d20dbf6c0076af1&"
  const urlImg2 = "https://cdn.discordapp.com/attachments/973694626420641802/1171092088885096488/Sem_Titulo-2.png?ex=655b6b7f&is=6548f67f&hm=364a01136a3a13cc36501ea395ac3525a3078c311f2b955133ae47d8fafbca42&"
  const urlImg3 = "https://cdn.discordapp.com/attachments/973694626420641802/1171092474895269970/Sem_Titulo-2.png?ex=655b6bdb&is=6548f6db&hm=6e860a08199377139b484e97faa9fbfd5e8f2854b270858b191dd7200a722ef0&"

  return (
    <Carousel>
      <Carousel.Item>
        <img width={1920} height={600} src={urlImg1}/>
      </Carousel.Item>
      <Carousel.Item>
        <img width={1920} height={600} src={urlImg2}/>
      </Carousel.Item>
      <Carousel.Item>
        <img width={1920} height={600} src={urlImg3}/>
      </Carousel.Item>
    </Carousel>
  )
}

export default UncontrolledExample;