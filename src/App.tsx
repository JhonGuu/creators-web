import { Route, Routes } from 'react-router-dom'
import './App.css'
import {Home} from './pages'
import NavBar from './components/NavBar/NavBar'

function App() {

  return (
    <>
      <NavBar/>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  )
}

export default App
