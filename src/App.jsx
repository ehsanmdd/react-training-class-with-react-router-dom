
import './App.css'
import Header from './components/Header/index/'
import { Routes, Route } from 'react-router-dom'
import HomePage from './pages'
import CreateUsers from './pages/CreateUsers'
import GalleryPage from './pages/GalleryPage'

function App() {



  return (
    <>
      <Header/>
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/users' element={<CreateUsers/>}/>
        <Route path='/gallery' element={<GalleryPage/>}/>
      </Routes>
    </>
  )
}

export default App
