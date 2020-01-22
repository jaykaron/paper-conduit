import React, { useEffect, useState } from 'react'
import {Link} from 'react-router-dom'
import {fetchApi} from '../utils'


const Article = (props) => {

    const [article, setArticle] = useState({})

    useEffect(() => {
        const slug = props.match.params.slug
        const url = `https://conduit.productionready.io/api/articles/${slug}`
        fetchApi(url, d => {
            setArticle(d.article)
        })
    }, [props.match.params.slug])

    if (article.title === undefined)
        return (
            <div></div>
        )

    const user = article.author.username


    return (
        <article className="article">
            <h1 className="article-title">{article.title}</h1>
            <p className="article-meta">
                Written by <Link to={`/user/${user}`}>{user} </Link>
                on {new Date(article.createdAt).toLocaleDateString()}
            </p>
            <p>{article.body}</p>

            <div className="row">
                <button>5 Comments</button>
            </div>
        </article>
    )
}

export default Article
