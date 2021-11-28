import {NavBar} from './Components/NavBar/NavBar';
import {Footer} from './Components/Footer/Footer';
import { ItemListContainer } from './Components/ItemListContainer/ItemListContainer';
import {ItemCount} from './Components/ItemCount/ItemCount';

function App() {

  return (
    <div className="App">
      <NavBar />
      <ItemListContainer />
      <ItemCount initial={0} stock = {10}/>
      <Footer />
    </div>
  );
}

export default App;
