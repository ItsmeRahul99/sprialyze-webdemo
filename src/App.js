import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from './pages/HomePage/Home';
import Thanks from './pages/ThanksPage/Thanks';


const App = () => {
  return (
    <main className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/index" element={<Home />} />
          <Route exact path="/thank-you" element={<Thanks />} />
        </Routes>
      </Router>
    </main>
  );
}

export default App;
