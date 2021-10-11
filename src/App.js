import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import LefSide from './components/LeftSide';
import Product from './components/Product';

function App() {
  return (
    <div className="app">
      <Header/>
      <div className="mid-container">
        <LefSide/>
        <Product/>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
