import './App.css';
import Home from "./components/home/Home";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import SignIn from './components/signIn/SignIn';

function App() {
  return (
    <BrowserRouter>
    <div className='container'>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signin" element={<SignIn />} />
      </Routes>
    </div>
  </BrowserRouter>

  );
}

export default App;
