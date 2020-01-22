import React from 'react'
import { Link } from 'react-router-dom'

const ArticleCard = props => {
    return (
        <div className='card'>
            <div className='card-body'>
                <h4 className='card-title'>{props.title}</h4>
                <h6 className='card-text'>{props.date}</h6>
                <p className='card-text'>{props.description}</p>
                <div className='article-card-buttons'>
                    <Link to={`/article/${props.slug}`} className='paper-btn'>
                        Read me!
                    </Link>
                    <Link to={`/user/${props.author}`} className='paper-btn'>
                        {props.author}
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default ArticleCard