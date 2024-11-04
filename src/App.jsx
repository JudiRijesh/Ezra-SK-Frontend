// App.jsx
import './App.css';
import { Routes, Route, Navigate } from 'react-router-dom';
import { AuthContextProvider } from './context/auth.context';
import HomePage from './Pages/HomePage';
import ContactPage from './Pages/ContactPage';
import Sidebar from './Pages/Sidebar';
import AboutPage from './Pages/AboutPage';
import HelpProgramPage from './Pages/HelpProgramPage';
import HelpProfessionals from './Pages/HelpProfessionals';
import BecomeaHelpPartner from './Pages/BecomeaHelpPartner';
import Cart from './Pages/Cart';
import Login from './Pages/Login';
import Signup from './Pages/Signup';




function App() {
  return (
    <AuthContextProvider> 
      <div className="App flex">
        <Sidebar />
        <div className="flex-1 ml-60 overflow-y-auto">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path='/contact' element={<ContactPage />} />
            <Route path='/about' element={<AboutPage />} />
            <Route path='/helpProgram' element={<HelpProgramPage />} />
            <Route path='/helpProfessionals' element={<HelpProfessionals />} />
            <Route path='/become' element={<BecomeaHelpPartner />} />
            <Route path='/login' element={<Login />} />
            <Route path='/signup' element={<Signup />} />
            <Route path='/cart' element={<Cart/>}/> 
          </Routes>
        </div>
      </div>
    </AuthContextProvider>
  );
}

export default App;
