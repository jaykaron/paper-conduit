import React, { useEffect, useState, useContext } from 'react'
import { QueryContext } from './QueryContext'
import { UserContext } from './UserContext'

const TagModal = () => {
  const fetchApi = useContext(UserContext)[2]
  const [tags, setTags] = useState([])
  const queryContext = useContext(QueryContext)
  const params = queryContext[0]
  const setParams = queryContext[1]

  useEffect(() => {
    fetchApi(`tags`, {}, d => {
      setTags(d.tags)
    })
  }, [setTags, fetchApi])

  const closeModal = () => {
    document.getElementById('tag-modal').checked = false
  }
  const updateTag = t => {
    let newParams = { ...params }
    newParams.tag = t
    setParams(newParams)
  }

  const buttonText = params.tag ? `#${params.tag}` : 'Filter by Tag'
  return (
    <div>
      <div className="row flex-spaces child-borders">
        <label className="paper-btn margin" htmlFor="tag-modal" disabled={params.feed}>
          {buttonText}
        </label>
      </div>
      <input className="modal-state" id="tag-modal" type="checkbox" disabled={params.feed} />
      <div className="modal">
        <label className="modal-bg" htmlFor="tag-modal"></label>
        <div className="modal-body">
          <label className="btn-close" htmlFor="tag-modal">X</label>
          <h4 className="modal-title">Tags</h4>
          <h5 className="modal-text">Click on a tag to filter the posts.</h5>
          {
            tags.map(t => (
              <button key={t} className='btn-small margin-small' onClick={() => {
                updateTag(t)
                closeModal()
              }}>
                {`#${t}`}
              </button>
            ))
          }
          <button className='btn-small btn-primary margin-small' onClick={() => {
            updateTag('')
            closeModal()
          }}>
            Clear
          </button>
        </div>
      </div>
    </div>
  )
}
export default TagModal