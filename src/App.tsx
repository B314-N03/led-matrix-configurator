import './App.css'
import { Route, BrowserRouter as Router, Routes } from 'react-router'
import Home from './pages/Home/Home'
import { Settings } from 'lucide-react'

function App() {
  return (
    <>
      <Router
      >
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/settings" element={<Settings />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
