
import './App.css';
import Body from './components/Body';
import Details from './components/Details';
import Features from './components/Feature';
import Nav from './components/Nav';
import Nearby from './components/Nearby';
import Overview from './components/Overview';
import SimiliarProparties from './components/Similar';


function App() {
  return (
    <div className="App">
  <Nav></Nav>
  <Body></Body>
    <Overview></Overview>
    <Details></Details> 
    <Features></Features>
    <Nearby></Nearby>
    <SimiliarProparties></SimiliarProparties>
       </div>
  );
}

export default App;
