import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Neon from "./components/Landing";
import 'bootstrap/dist/css/bootstrap.min.css';
import Flameworking from "./components/Flameworking"


function App() {
  return (
    <>
    
      <Router>
        <div className="flex-column justify-center align-center min-100-vh bg-primary">
          <>
          <Routes>
            <Route path="/" element={<Neon />} />
            <Route path="/flameworking" element={<Flameworking />} />

          </Routes>
          </>
        </div>
      </Router>
  </>
  );
}

export default App;
