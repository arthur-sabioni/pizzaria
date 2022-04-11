
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Register from './pages/Register/Register';
import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path='/register' element={<Register />} />
          <Route path='/' element={<Header />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
