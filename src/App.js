import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Heroes from './components/Heroes';
import ItemListContainer from './components/ItemListContainer';

function App() {
  return (
    <div>
      <Navbar />
      <Heroes />
      <ItemListContainer greeting = {"PRODUCTOS DESTACADOS"} />
      <Footer />
    </div>
  );
}

export default App;
