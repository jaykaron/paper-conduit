import React, { useEffect, useState, useContext } from 'react'
import { fetchApi } from '../utils'
import { QueryContext } from './QueryContext'

const TagModal = () => {
  const [tags, setTags] = useState([])
  const queryContext = useContext(QueryContext)
  const params = queryContext[0]
  const setParams = queryContext[1]

  useEffect(() => {
    fetchApi(`https://conduit.productionready.io/api/tags`, d => {
      setTags(d.tags)
    })
  }, [setTags])

  const closeModal = () => {
    document.getElementById('tag-modal').checked = false
  }
  const updateTag = t => {
    let newParams = { ...params }
    newParams.tag = t
    setParams(newParams)
  }

  return (
    <div>
      <div className="row flex-spaces child-borders">
        <label className="paper-btn margin" htmlFor="tag-modal">Filter by Tag</label>
      </div>
      <input className="modal-state" id="tag-modal" type="checkbox" />
      <div className="modal">
        <label className="modal-bg" htmlFor="tag-modal"></label>
        <div className="modal-body">
          <label className="btn-close" htmlFor="tag-modal">X</label>
          <h4 className="modal-title">Tags</h4>
          <h5 className="modal-text">Click on a tag to filter the posts.</h5>
          {
            tags.map(t => (
              <button key={t} className='btn-small tag-btn' onClick={() => {
                updateTag(t)
                closeModal()
              }}>
                {t}
              </button>
            ))
          }
        </div>
      </div>
    </div>
  )
}
export default TagModal