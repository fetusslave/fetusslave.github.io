//import background from './background.png';
import './App.css';
import Header from './Header';
import Home from './Home';
import Contact from './Contact';
import { MainContainer } from './Content';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <Header />
      <MainContainer>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </MainContainer>
    </>
  );
}

export default App;
