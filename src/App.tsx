import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './comps/Home'
import Work from './comps/Work'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/work" element={<Work />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
