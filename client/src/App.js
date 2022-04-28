import { BrowserRouter, Routes, Route } from 'react-router-dom';

import NotFoundPage from './Pages/NotFound';



function App() {
  return (
    <div className="App">
<BrowserRouter>
<Routes>
 
  <Route path='/*' element={<NotFoundPage/>}  />
</Routes>
</BrowserRouter>
    </div>
  );
}

export default App;