import logo from './logo.svg';
import './App.css';
import Top from './Components/Top';
import Intro from './Components/Intro';
import EmailButton from './Components/EmailButton';
import About from './Components/About';
import Blog from './Components/Blog';
import Footer from './Components/Footer';

function App() {
  return (
    <div className="App">
      <Top/>
    <Intro/>
    <EmailButton/>
    <About/>
    <Blog/>
    <Footer/>
    </div>
  );
}

export default App;
