import './App.css';
// import Login from './Pages/Auth/Login/Login';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Registration from './Pages/Auth/Registration/Registration';
import Home from './Pages/CMS/Home/Home';
import SignIn from './Pages/Auth/Login/SignIn';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SignIn />} />
          <Route path="/register" element={<Registration />} />
          <Route path='/home' element={ <Home/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
