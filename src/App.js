import logo from './logo.svg';
import './App.css';
import Header from './component/Header';
import Footer from './component/Footer';
import Item from './component/pages/Item';

function App() {
  return (
    <div className="App">
      
      <Header/>
      <Item/>
      <Footer/>
     
    </div>
  );
}

export default App;
