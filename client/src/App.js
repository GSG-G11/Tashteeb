import Header from './Component/Header/Header';
import ServiceHolder from './Component/Services/ServiceHolder';
import Header from './Component/Header'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import NotFoundPage from './Pages/NotFound'

function App() {
  return (
    <div className="App">
     
      <Router>
        <Routes>
          <Header />
          <Route path="/" element={<>
            <Header />
            <ServiceHolder />
          </>} >
          <Route path="/*" element={<NotFoundPage />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
