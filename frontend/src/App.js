import './index.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from "react-toastify";

//Pages
import Login from "./pages/Login/Login";
import Cadastro from "./pages/Cadastro/Cadastro";
import Home from "./pages/Home/Home.jsx"
import RecuperarSenha from './pages/RecuperarSenha/RecuperarSenha';
import Favoritos from './pages/Favoritos/Favoritos';
import Suporte from './pages/Suporte/Suporte';
import Perfil from './pages/Perfil/Perfil.jsx';
import Sobre from './pages/Sobre/Sobre';
import { SearchContextProvider } from './context/SearchContext';

function App() {
  return (
    <div className="App">
    <BrowserRouter>
        <ToastContainer />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/cadastro" element={<Cadastro />} />
          <Route path="/favoritos" element={<Favoritos />} />
          <Route path="/suporte" element={<Suporte />} />
          <Route path="/resetpassword" element={<RecuperarSenha />} />
          <Route path="/sobre" element={<Sobre />} />
          <Route path="/perfil" element={<Perfil />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}


export default App;
