import {NavBar} from './Components/NavBar/NavBar';
import {Footer} from './Components/Footer/Footer';

function App() {

  const saludo = "Hola Main";
  const texto = "Un texto"

  return (
    <div className="App">
      <NavBar />
      
      <Footer />
    </div>
  );
}

export default App;
