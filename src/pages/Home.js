import React from 'react'
import Splash from '../components/Splash'
import ArticleList from '../components/ArticleList'
import TagModal from '../components/TagModal'
import { QueryProvider } from '../components/QueryContext'
import FeedButton from '../components/buttons/FeedButton'

const Home = (props) => {

  const content = (
    <p>
      A React app using the RealWorld API with a custom PaperCSS frontend.
    </p>
  )

  return (
    <div>
      <Splash title='Paper Conduit'>
        {content}
      </Splash>
      <QueryProvider>
        <div className="article-card-buttons">
          <FeedButton />
          <TagModal />
        </div>
        <ArticleList />
      </QueryProvider>
    </div>
  )
}

export default Home
