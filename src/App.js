import { Routes, Route } from 'react-router-dom';
import './App.css';
import HomePage from './components/HomePage/HomePage';
import Store from './components/Store/Store'



function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/browse' element={<Store/>}/>
      </Routes>
      
    </div>
  );
}

export default App;
