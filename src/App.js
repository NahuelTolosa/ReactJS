import {NavBar} from './Components/NavBar/NavBar';
import {Footer} from './Components/Footer/Footer';
import { Header } from './Components/Header/Header';
import { Main } from './Components/Main/Main';
import './Colors.css';

function App() {

  return (
    <div className="App">
      <NavBar />
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
