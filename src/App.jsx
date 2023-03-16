import './App.css'
import Home from './component/pages/Home'
import {Routes,Route} from "react-router-dom"
import EditBookPage from "./component/pages/EditBookPage"
import AddBookPage from "./component/pages/AddBookPage"
import Navbar from './component/navbar/Navbar'
import NotFound from './component/notFound/NotFound'

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/book/edit/:bookId' element={<EditBookPage></EditBookPage>}></Route>
        <Route path='/book/add' element={<AddBookPage></AddBookPage>}></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
    </div>
  )
}

export default App
