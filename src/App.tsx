import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './comps/Home'
import Work from './comps/Work'
import Contact from './comps/Contact'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/work" element={<Work />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
