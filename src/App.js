import './App.css';
import {Routes , Route } from 'react-router-dom';
import Home from './component/Home';
import Header from "./component/Header"
import Login from './component/Login';
import Ayin from './component/Ayin';
import Ogretiler from './component/Ogretiler';
import Lobiler from './component/Lobiler';
import UyeOl from './component/UyeOl';
import AyinOku from './component/AyinOku';
import Chat from './component/Chat';
import Profil from './component/Profil';



function App() {
  return (
    <div className='App'>
        <Routes>
            <Route  path="/" element={<Home/>} />
            <Route  path="/login" element={<Login/>} />
            <Route path="/ayin" element={<Ayin/>}  ></Route>
            <Route path="/ogretiler"element={<Ogretiler/>}></Route>
            <Route path="/lobiler"element={<Lobiler/>}></Route>
            <Route path="/uyeol"element={<UyeOl/>}></Route>
            <Route path="/ayinoku"element={<AyinOku/>}></Route>
            <Route path="/chat"element={<Chat/>}></Route>
            <Route path="/profil"element={<Profil/>}></Route>

        </Routes>
    </div>
  );
}

export default App;
