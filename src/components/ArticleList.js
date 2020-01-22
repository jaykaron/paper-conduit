import React, { useContext } from 'react'
import ArticleCard from './ArticleCard'
import { QueryContext } from './QueryContext'


const ArticleList = (props) => {
  const [params, setParams, articles, articleCount] = useContext(QueryContext)

  const navButtons = () => {
    let prev;
    if (params.offset > 0)
      prev = (<button onClick={decOffset}>Newer</button>)
    let next;
    if (params.offset + articles.length < articleCount)
      next = (<button onClick={incOffset}>Older</button>)
    return (
      <div className='article-card-buttons'>
        {prev}
        {next}
      </div>
    )
  }

  const incOffset = () => {
    let newParams = { ...params }
    newParams.offset += 10
    setParams(newParams)
  }

  const decOffset = () => {
    let newParams = { ...params }
    newParams.offset = Math.max(0, newParams.offset - 10)
    setParams(newParams)
  }

  return (
    <div>
      <h6 className='article-count'>
        {countMessage(params.offset, articles.length, articleCount)}
      </h6>
      {
        articles.map((a, i) => (<ArticleCard article={a} key={i} />))
      }
      {navButtons(params.offset, articles.length, articleCount)}
    </div>
  )
}

/**
 * Returns the appropiate message.
 * Either `Showing articles x to y of z`
 * or `Showing article x of z`
 * @param {*} offset 
 * @param {*} count 
 * @param {*} total 
 */
const countMessage = (offset, count, total) => {
  let message = ''
  if (count <= 1)
    message = `Showing article ${offset + 1} of ${total}`
  else
    message = `Showing articles ${offset + 1} to ${offset + 1 + count - 1} of ${total}`
  return message
}

export default ArticleList