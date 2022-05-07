
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './component/Header/Header';
import Home from './component/Home/Home';
import { Route, Routes } from 'react-router-dom';
import AddItem from './component/AddItem/AddItem';
import MangeItem from './component/MangeItem/MangeItem';
import MyItem from './component/MyItem/MyItem';
import Registration from './component/Registration/Registration';
import LogIn from './component/LogIn/LogIn';

function App() {
  return (
    <div className="App">
     <Header></Header>
     
     
     <Routes>
       <Route path='/' element={<Home></Home>}></Route>
       <Route path='/home' element={<Home></Home>}></Route>
       <Route path='/addItem' element={<AddItem></AddItem>}></Route>
       <Route path='/mangeItem' element={<MangeItem></MangeItem>}></Route>
       <Route path='/myItem' element={<MyItem></MyItem>}></Route>
       <Route path='/registration' element={<Registration></Registration>}></Route>
       <Route path='/logIn' element={<LogIn></LogIn>}></Route>
     </Routes>
     
     
    </div>
  );
}

export default App;
