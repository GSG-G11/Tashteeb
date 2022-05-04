import { BrowserRouter, Routes, Route } from 'react-router-dom';
import EnginnerBanner from './Component/EnginnerBanner';


function App() {
  return (
    <div className="App">

<BrowserRouter>
<Routes>
  <Route path='/' element={<EnginnerBanner/>} />
</Routes>
</BrowserRouter>
    </div>
  );
}


export default App;
