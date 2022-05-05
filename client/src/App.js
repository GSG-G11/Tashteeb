import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { SignupContext } from "./context/signupContext";

import Home from "./Component/Home";
import NotFoundPage from "./Pages/NotFound";

function App() {
  return (
    <SignupContext>
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
    </SignupContext>
  );
}
export default App;
