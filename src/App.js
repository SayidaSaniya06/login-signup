import './App.css';
import { BrowserRouter as Main, Route, Routes } from 'react-router-dom';
import SignUp from './Components/SignUp';
import HomePage from './Components/HomePage';
import Login from './Components/Login';
import UserProfile from './Components/UserProfile';
function App() {
  return (
    <>
     <Main>
      <Routes>
        <Route exact path='/' element={<SignUp/>}/>
        <Route exact path='/signUp' element={<SignUp/>}/>
        <Route exact path='/home' element={<HomePage/>}/>
        <Route exact path='/login' element={<Login/>}/>
        <Route exact path='/profile' element={<UserProfile/>}/>
      </Routes>
     </Main>
    </>
  );
}

export default App;
