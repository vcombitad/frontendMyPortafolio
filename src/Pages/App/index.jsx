import {useRoutes, BrowserRouter} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from '../Home'
import AboutMe from '../AboutMe'
import Skills from '../Skills'
import MyWork from '../MyWork'
import Contact from '../Contact'
import Navbar from '../../components/Navbar'

import './App.css'

const AppRoutes = ()=>{
  let routes= useRoutes([
    { path: '/', element:<Home/> },
    { path: 'about-me', element:<AboutMe/> },
    { path: 'skills', element:<Skills/> },
    { path: 'my-work', element:<MyWork/> },
    { path: 'contact', element:<Contact/> }
])
return routes
}

function App() {

  return (
    <BrowserRouter>
      <Navbar/>
      <AppRoutes/>
    </BrowserRouter>
  )
}

export default App
