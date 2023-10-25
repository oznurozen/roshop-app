import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './pages/Home';
import Header from './components/header';
import Detail from './pages/Detail';
import Cart from './pages/Cart';


function App() {
  return (
    <div className="App">
      <Router>
        < Header />
        <Routes>
          <Route path='/' element= {< Home />} />
          <Route path='/products/:id' element= {< Detail />} />
          <Route path='/cart' element= {< Cart />} />
        </Routes>
      </Router>
 
    </div>
  );
}

export default App;
