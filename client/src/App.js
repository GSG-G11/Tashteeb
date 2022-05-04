
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import NotFoundPage from './Pages/NotFound';


function App() {
  return (
    <div className="App">

      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Home />
              </>
            }
          />
          <Route path="/*" element={<NotFoundPage />} />
        </Routes>
      </Router>
    </div>
  );
}
export default App;
