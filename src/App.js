import React from 'react'
import Footer from './footer/Footer'
import PersistentDrawerLeft from './head/Persistdrawer'
import Main from './main/Main'

export default function App() {
  return (

    <>
      <PersistentDrawerLeft/>
      <Main/>
      <Footer/>
    </>
  )
}
