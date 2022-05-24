import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Layout from './Components/Layout/Layout';
import { Routes, Route } from 'react-router-dom';
import Appoint from './Pages/Appoint/Appoint';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Layout />} />
        <Route path='/appoint' element={<Appoint />} />
        {/* This is New TExt */}
      </Routes>
    </div>
  );
}

export default App;
