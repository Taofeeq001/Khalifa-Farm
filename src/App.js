import logo from './logo.svg';
import './App.css';
import Main from './Components/Main';
import { BrowserRouter, Route, Routes, route} from 'react-router-dom';
import Aboutp2 from './Components2/Aboutp2';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element= {<Main />} />  
        <Route path='/about' element={<Aboutp2 />} />
      </Routes>
    </BrowserRouter>
    // <div className="App">
      
    // </div>
  );
}

export default App;
