import React, { Fragment } from 'react'
import Home from './component/Home/Home'
import Navs from './component/Navs/Navs'
import Footer from './component/Footer/Footer'
const App = () => {
  return (
  <Fragment>
    <Navs/>
    <Home/>
    <Footer/>
  </Fragment>
  )
}

export default App

