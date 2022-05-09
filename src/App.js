
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
import UpdateItem from './component/UpdateItem/UpdateItem';
import StockItem from './component/StockItem/StockItem';
import RequireAuth from './component/RequireAuth/RequireAuth';
import NotFound from './component/NotFound/NotFound';
import DeleteData from './component/DeleteData/DeleteData';

function App() {
  return (
    <div className="App">
     <Header></Header>
     
     
     <Routes>
       <Route path='/' element={<Home></Home>}></Route>
       <Route path='/home' element={<Home></Home>}></Route>
       <Route path='/addItem' element={<RequireAuth>
       <AddItem></AddItem></RequireAuth>}></Route>
       <Route path='/mangeItem' element={<RequireAuth>
       <MangeItem></MangeItem>
       </RequireAuth>}></Route>
       <Route path='/myItem' element={<MyItem></MyItem>}></Route>
       <Route path='/registration' element={<Registration></Registration>}></Route>
       <Route path='/logIn' element={<LogIn></LogIn>}></Route>
       <Route path='/update/:id' element={<RequireAuth>
       <UpdateItem></UpdateItem>
       </RequireAuth>}></Route>
       <Route path='/stockItem/:id' element={<StockItem></StockItem>}></Route>
       <Route path='*' element={<NotFound></NotFound>}></Route>
     </Routes>
     
     
    </div>
  );
}

export default App;
