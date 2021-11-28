import {NavBar} from './Components/NavBar/NavBar';
import {Footer} from './Components/Footer/Footer';
import {ItemCount} from './Components/ItemCount/ItemCount';

function App() {

  return (
    <div className="App">
      <NavBar />
      <ItemCount stock = '10'/>
      <Footer />
    </div>
  );
}

export default App;
