import './App.css'
import {Routes,Route} from 'react-router-dom'
import HomePage from './Pages/HomePage'
import ContactPage from './Pages/ContactPage'
import Sidebar from './Pages/Sidebar'
import AboutPage from './Pages/AboutPage'
import HelpProgramPage from './Pages/HelpProgramPage'
import HelpProfessionals from './Pages/HelpProfessionals'
import BecomeaHelpPartner from './Pages/BecomeaHelpPartner'

function App() {
  return(

    <div className="App flex">
      <Sidebar/>
      <div className="flex-1 overflow-y-auto">
      <Routes>
      <Route path="/" element={<HomePage/>}/>
      <Route path='/contact' element={<ContactPage/>}/>
      <Route path='/about' element={<AboutPage/>}/>
      <Route path='/helpProgram' element={<HelpProgramPage/>}/>
      <Route path='/helpProfessionals' element={<HelpProfessionals/>}/>
      <Route path='/become' element={<BecomeaHelpPartner/>}/>
      </Routes>
    </div>
    </div>
    )
}
export default App