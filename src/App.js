import React, {useEffect, useState} from 'react'
import Nav from './components/Nav'
import Splash from './components/Splash'
import ArticleList from './components/ArticleList'

function App() {
  return (
    <div className="paper container">
      <Nav />
      <Splash />
      <ArticleList />
    </div>
  )
}

export default App
