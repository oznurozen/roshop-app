import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './pages/Home';
import Header from './components/header';


function App() {
  return (
    <div className="App">
      <Router>
        < Header />
        <Routes>
          <Route path='/' element= {< Home />} />
        </Routes>
      </Router>
 
    </div>
  );
}

export default App;
