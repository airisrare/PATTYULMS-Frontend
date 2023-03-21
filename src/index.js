import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from "./pages/Home"
import Concepts from './pages/Concepts';
import NavBar from './components/NavBar';
import Login from './pages/Login';
import Cart from './pages/Cart';
import Register from './pages/Register';
import ConceptCreate from './pages/ConceptCreate';
import ProductCreate from './pages/ProductCreate';
import EmblemLogo from './components/EmblemLogo';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(

export default function App() {
  return (
    //<React.StrictMode>
    <BrowserRouter>
      <NavBar />
      <EmblemLogo />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="concepts" element={<Concepts />} />
        <Route path="login" element={<Login />} />
        <Route path="cart" element={<Cart />} />
        <Route path="register" element={<Register />} />
        <Route path="conceptCreate" element={<ConceptCreate />} />
        <Route path="productCreate" element={<ProductCreate />} />
      </Routes>
    </BrowserRouter>
    //</React.StrictMode>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
