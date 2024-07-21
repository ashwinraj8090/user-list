import logo from './logo.svg';
import './App.css';
import AddUser from './components/AddUser';
import SearchUser from './components/SearchUser';
import ViewAll from './components/ViewAll';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div>
      <BrowserRouter>
       <Routes>
         <Route path="/" element={<AddUser/>}/>
         <Route path="/search" element={<SearchUser/>}/>
         <Route path="/view" element={<ViewAll/>}/>
       </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
