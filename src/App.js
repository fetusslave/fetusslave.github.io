import background from './background.png';
import './App.css';
import Header from './Header';
import Home from './Home'
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <Header />
      <div className="container min-vh-100" style={{backgroundImage: `url(${background})`}}>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
