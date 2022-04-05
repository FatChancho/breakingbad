import logo from './logo.svg';
import Homepage from './pages/Homepage';
import { Routes,Route } from 'react-router-dom';
import PageDetail from './pages/PageDetail';

function App() {
  return (
    <div>
      <Routes>
        <Route exact path='/' element={<Homepage/>}/>
        <Route exact path='/character/:id' element={<PageDetail/>}/>
      </Routes>
    </div>
  );
}

export default App;
