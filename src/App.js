import logo from './logo.svg';
import Homepage from './pages/Homepage';
import { Routes,Route } from 'react-router-dom';
import PageDetail from './pages/PageDetail';
import Header from './Components/Header';

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route exact path='/' element={<Homepage/>}/>
        <Route exact path='/character/:id/:name' element={<PageDetail/>}/>
      </Routes>
    </div>
  );
}

export default App;
