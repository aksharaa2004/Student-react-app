import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import AddStudent from './Components/AddStudent'
import Search from './Components/Search'
import Delete from './Components/Delete'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import ViewStudents from './Components/ViewStudents'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<AddStudent/>}/>
        <Route path='/Search' element={<Search/>}/>
        <Route path='/Delete'element={<Delete/>}/>
        <Route path='/ViewStudents' element={<ViewStudents/>}/>
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
