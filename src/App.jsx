import { CORE_CONCEPTS } from './data.js';
import Header from './components/Header/Header.jsx';
import CoreConcepts from './components/CoreConcepts/CoreConcepts.jsx';


function App() {
  return (

    <div>
      <Header />
      <section id="coreConcepts">
        <h2>Simbolos del tablero</h2>
        <div>
          {CORE_CONCEPTS.map((concepItem) =>
            <CoreConcepts key={concepItem.title} {...concepItem} />)  }
        </div>
      </section>
      <main>
        <h2> Si no confías, no hay confianza</h2>
      </main>
    </div>

  )
}
export default App;