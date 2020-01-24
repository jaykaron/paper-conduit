import React from 'react'
import Comment from './Comment'
import CommentButton from './buttons/CommentButton'

const CommentCard = props => {
  const coms = props.comments
  return (
    <div className='card'>
      <div className="card-header"><h3 className='margin-small'>Comments ({coms.length})</h3></div>
      <div className='card-body'>
        <div className='child-borders'>
          {coms.reverse().map(c => (<Comment key={c.id} comment={c} article={props.article} />))}
        </div>
        <CommentButton article={props.article} />
      </div>
    </div>
  )
}

export default CommentCard