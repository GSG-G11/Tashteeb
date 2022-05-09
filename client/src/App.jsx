import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import EnginnerBanner from './Component/EnginnerBanner';

import Home from './Component/Home';
import NotFoundPage from './Pages/NotFound';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route
            path="/"
            element={(
              <Home />
            )}
          />
          <Route path="/eng" element={<EnginnerBanner />} />
          <Route path="/*" element={<NotFoundPage />} />
        </Routes>
      </Router>
    </div>
  );
}
export default App;
