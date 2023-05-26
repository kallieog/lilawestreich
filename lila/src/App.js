import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Neon from "./components/Landing";
import 'bootstrap/dist/css/bootstrap.min.css';
import Flameworking from "./components/Flameworking"


function App() {
  return (
    <>
    
      <Router>
          <>
          <Routes>
            <Route path="/" element={<Neon />} />
            <Route path="/flameworking" element={<Flameworking />} />

          </Routes>
          </>
       
      </Router>
  </>
  );
}

export default App;
