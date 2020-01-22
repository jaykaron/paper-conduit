import React from 'react'
import Splash from '../components/Splash'
import ArticleList from '../components/ArticleList'

const Home = () => {

  const content = (
    <p>
      A React app using the RealWorld API with a custom PaperCSS frontend.
    </p>
  )

  return (
    <div>
      <Splash title='Paper Conduit' content={content}/>
      <ArticleList />
    </div>
  )
}

export default Home
