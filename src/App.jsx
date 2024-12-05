import './styles/App.css'
import NavBar from './components/NavBar.jsx'
import { Routes,Route } from 'react-router-dom'
import HomePage from './pages/HomePage.jsx'
import TrainSelector from './pages/TrainSelector.jsx'

function App() {

  return (
  <div>
      <NavBar/>
      <Routes>
          <Route path='/' element={<HomePage/>}/>
          <Route path='/trainSelect' element={<TrainSelector/>}/>
      </Routes>
  </div>

  )
}

export default App
