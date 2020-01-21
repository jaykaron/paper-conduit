import React from 'react'

const ArticleCard = props => {
    return (
        <div className='card'>
            <div className='card-body'>
                <h4 className='card-title'>{props.title}</h4>
                <h5 className='card-subtitle'>{props.author}</h5>
                <h6 className='card-subtitle'>{props.date}</h6>
                <p className='card-text'>{props.description}</p>
            </div>
        </div>
    )
}

export default ArticleCard