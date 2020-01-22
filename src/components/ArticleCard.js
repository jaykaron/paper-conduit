import React from 'react'
import { Link } from 'react-router-dom'

const ArticleCard = props => {
    return (
        <div className='card'>
            <Link to={`/article/${props.slug}`}>
                <div className='card-body'>
                    <h4 className='card-title'>{props.title}</h4>
                    <Link to={`/user/${props.author}`}>
                        <h5 className='card-subtitle'>{props.author}</h5>
                    </Link>
                    <h6 className='card-subtitle'>{props.date}</h6>
                    <p className='card-text'>{props.description}</p>
                </div>
            </Link>
        </div>
    )
}

export default ArticleCard