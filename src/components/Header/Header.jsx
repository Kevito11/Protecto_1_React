
import reactImage2 from '../../assets/tablero-auto.png';
import './Header.css';

const reactTitles2 = 'Íconos del Tablero';



export default function Header() {

  return (
      <header>


        <img src={reactImage2} alt="React logo"/>

        <h1>{reactTitles2}</h1> 
        <p>
          Esto es una lista de algunos de los íconos del tablero de un auto
        </p>
      </header>
  );
}