import React, { useContext, useEffect, useState } from 'react'
import Splash from "../components/Splash"
import { UserContext } from '../components/UserContext'

const Editor = props => {
  const user = useContext(UserContext)[0]
  const fetchApi = useContext(UserContext)[2]

  // 0 - filling in, 1 - success, 2 - error, 3 - no auth
  const [formState, setFormState] = useState(0)
  const [errorMessages, setErrorMessages] = useState([])

  const slug = props.match.params.slug
  useEffect(() => {
    if (slug) {
      fetchApi(`articles/${slug}`, {}, resp => {
        if (resp.article) {
          const art = resp.article
          if (art.author.username !== user.username) {
            setFormState(3)
          }
          else {
            setFormState(0)
            document.getElementById('title').value = art.title
            document.getElementById('description').value = art.description
            document.getElementById('body').value = art.body
            document.getElementById('tags').value = art.tagList.join(', ')
          }
        }
      })
    }
    else {
      if (user.id)
        setFormState(0)
      else
        setFormState(3)
    }
  }, [slug, fetchApi, user.username, user.id])

  const handleResponse = resp => {
    if (resp.article) {
      setFormState(1)
    }
    else if (!resp.ok) {
      const errors = resp.errors
      let messages = Object.keys(errors).map(
        k => `${k}: ${errors[k].join(', ')}`
      )
      setErrorMessages(messages)

      setFormState(2)
    }
    else {
      console.error(resp)
    }
  }

  const submit = () => {
    const fields = ['title', 'description', 'body']

    const body = { 'article': {} }
    const data = body['article']
    fields.forEach(f => {
      data[f] = document.getElementById(f).value
    })

    const tagText = document.getElementById('tags').value
    if (tagText.length > 0)
      data['tagList'] = tagText.split(', ')

    const endpoint = slug ? `articles/${slug}` : 'articles'
    fetchApi(endpoint, {
      method: slug ? 'PUT' : 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(body)
    }, handleResponse)
  }

  const success = (
    <div className="alert alert-success">Article {slug ? 'updated' : 'submitted'}!</div>
  )
  const authError = (
    <div className="alert alert-danger margin-top-large">Authorization error. Are you logged in?</div>
  )

  const error = (
    <div className="alert alert-danger" id='errorMsg'>
      <p>Error {slug ? 'updating' : 'submitting'} article</p>
      <ul>
        {errorMessages.map(m => (<li key={m}>{m}</li>))}
      </ul>
    </div>
  )

  const editorStyle = {
    width: '100%',
    minHeight: '10rem'
  }
  const form = (
    <div>
      <div className="form-group">
        <input type="text" placeholder="Title" id="title" style={{ width: '60%' }} />
      </div>
      <div className="form-group">
        <input type="text" placeholder="Description" id="description" style={{ width: '80%' }} />
      </div>
      <div className="form-group">
        <textarea placeholder="Article Body" className='padding' id='body' style={editorStyle} />
      </div>
      <div className="form-group">
        <label htmlFor="tags">Tags</label>
        <input type="text" placeholder="code, monkeys, pi" id="tags" style={{ width: '50%' }} />
      </div>
      <button className='margin-top' onClick={submit}>{slug ? 'Update' : 'Post'}</button>
    </div>
  )
  if (formState === 3)
    return (
      <Splash title='Editor'>
        {authError}
      </Splash>
    )
  return (
    <Splash title='Editor'>
      {formState === 2 ? error : null}
      {formState !== 1 ? form : success}
    </Splash>
  )
}

export default Editor