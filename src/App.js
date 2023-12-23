import './App.css';
import Header from './components/Header';
import List from './components/List';
import Navbar from './components/Navbar';
import { ParallaxProvider } from 'react-scroll-parallax';



function App() {
  return (
    <div>
      <Navbar/>
    
      <Header/>
      <div className='container'>
        <List/>
      </div>
    </div>
  );
}

export default App;
