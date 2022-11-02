import './App.css';
import { Route, Routes } from "react-router-dom";
import Home from './Pages/Home/Home';
import Error from './Pages/Error/Error'
function App() {
  return (
    <div>

      <Routes>
        <Route exact path = "/" element={<Home/>} />
        <Route path = "/*" element={<Error/>} />
      </Routes>

    </div>
  );
}

export default App;
