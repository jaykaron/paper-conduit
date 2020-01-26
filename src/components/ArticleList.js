import React, { useContext } from 'react'
import ArticleCard from './ArticleCard'
import { QueryContext } from './QueryContext'


const ArticleList = (props) => {
  const [params, setParams, articles, articleCount] = useContext(QueryContext)

  const navButtons = () => {
    if (articleCount === 0)
      return null

    const PAGE_SIZE = 10
    const maxPage = Math.ceil(articleCount / PAGE_SIZE)
    const currentPage = Math.floor(params.offset / 10) + 1

    let first = (
      <button className='margin-small' onClick={() => setOffset(0)}
        disabled={currentPage <= 1}>
        {'<<'}
      </button>
    )
    let prev = (
      <button className='margin-small' onClick={() => adjustOffset(-10)}
        disabled={currentPage <= 1}>
        {'<'}
      </button>
    )

    let maxOffset = Math.ceil(articleCount / 10) * 10 - 10
    let next = (
      <button className='margin-small' onClick={() => adjustOffset(10)}
        disabled={currentPage >= maxPage}>
        {'>'}
      </button>
    )
    let last = (
      <button className='margin-small' onClick={() => setOffset(maxOffset)}
        disabled={currentPage >= maxPage}>
        {'>>'}
      </button>
    )

    let center =
      (
        <div style={{ display: 'flex' }}>
          {Array(...Array(maxPage + 1)).map((v, i) => {
            const SHOW_AROUND = 3
            if (i === 0)
              return null
            if (i >= currentPage - SHOW_AROUND && i <= currentPage + SHOW_AROUND)
              return (
                <button key={i} className={`margin-small btn-small ${i === currentPage ? 'btn-primary' : ''}`}
                  onClick={() => setOffset((i - 1) * 10)}>
                  {i}
                </button>
              )
            return null
          })
          }
        </div >
      )

    return (
      <div className='squished-buttons'>
        <div style={{ float: 'left' }}>
          {first}
          {prev}
        </div>
        {center}
        <div style={{ float: 'right' }}>
          {next}
          {last}
        </div>
      </div>
    )
  }

  const setOffset = n => {
    let newParams = { ...params }
    newParams.offset = n
    setParams(newParams)
  }

  const adjustOffset = d => {
    let newParams = { ...params }
    newParams.offset += d
    setParams(newParams)
  }

  const messageStyle = {
    textAlign: 'center',
    margin: '0px'
  }

  const message = countMessage(params.offset, articles.length, articleCount)
  return (
    <div>
      <h6 style={messageStyle}> {message} </h6>
      {
        articles.map(a => (<ArticleCard article={a} key={a.slug} />))
      }
      {navButtons()}
    </div >
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
  if (count === 0)
    message = 'No articles to show'
  else if (count === 1)
    message = `Showing article ${offset + 1} of ${total}`
  else
    message = `Showing articles ${offset + 1} to ${offset + 1 + count - 1} of ${total}`
  return message
}

export default ArticleList