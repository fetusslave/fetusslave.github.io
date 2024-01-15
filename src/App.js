import logo from './logo.svg';
import './App.css';
import Header from './Header';
import Home from './Home'
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  );
}

export default App;
