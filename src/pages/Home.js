import React from 'react'
import ArticleList from '../components/ArticleList'
import TagModal from '../components/TagModal'
import { QueryProvider } from '../components/QueryContext'
import FeedButton from '../components/buttons/FeedButton'

const Home = () => (
  <div>
    <QueryProvider>
      <div className="squished-buttons">
        <FeedButton />
        <TagModal />
      </div>
      <ArticleList />
    </QueryProvider>
  </div>
)

export default Home
