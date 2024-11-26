import logo from './logo.svg';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CadastrarImovel } from './Paginas/CadastrarImovel/CadastrarImovel';
// import './App.css';
import TelaInicial from './Paginas/TelaInicial/TelaInicial';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<TelaInicial />} />
        <Route path="/cadastrar-imovel" element={<CadastrarImovel />} />
      </Routes>
    </Router>
    
  );
}

export default App;
