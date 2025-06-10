import {Routes, Route} from 'react-router-dom'
import Home from '../pages/Home'
import Missoes from '../pages/Missoes'
const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/missoes" element={<Missoes />} />
    </Routes>
  )
}

export default AppRoutes