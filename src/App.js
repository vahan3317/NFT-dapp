import Nav from './components/Nav';
import Mint from './components/Mint';
import './App.css';
import BuyTokens from './components/BuyTokens';
import {Routes,Route,Link} from 'react-router-dom'
import OwnerOf from './components/OwnerOf';
import TransferFrom from './components/TransferFrom';


function App() {
  return (
    <div className="App text-gray-300  ">
      
      <Nav />
      <Routes>
      <Route path='/' element={<Mint />} />  
      <Route path='/buy' element={<BuyTokens />} /> 
      <Route path='/ownerOf' element={<OwnerOf />} /> 
      <Route path='/transferFrom' element={<TransferFrom />} /> 
      </Routes>   
   </div>
   
  );
}

export default App;
