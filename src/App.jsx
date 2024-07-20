import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './Components/Header/Header'
import Footer from './Components/Footer/Footer'
import { Sidebar } from './Components/sidebar/Sidebar'
import Createpost from './Components/Createpost/Createpost'
import { Post } from './Components/Post/Post'
import Context, { PostList } from './Components/Context/Context'
import ContextPart from './Components/Context/Context'
import { useState } from 'react'

function App() {
  const [value, setvalue] = useState("Home")

  return (
 <>
  <Context>
  <Header/>
<div className="d-flex mt-5 mb-5" >
<Sidebar  setvalue = {setvalue} value = {value}/>
{
  value === "Home" ? <Createpost/>:
<Post/>
}
</div>

 <Footer/>
  </Context>
 </>
  )
}

export default App