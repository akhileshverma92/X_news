import React, { useEffect, useState } from 'react'
import NewsItem from './NewsItem';

function NavBoard() {
  const [articles, setArticles] = useState([]);
  useEffect(() => {
    let url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${import.meta.env.VITE_API_KEY}
    `;
    fetch(url)
      .then(Response => Response.json())
      .then(data => setArticles(data.articles));

  }, [])

  return (

    <>
      {articles.map((news, index) => {
        return <NewsItem key={index} tittle ={news.tittle} description={news.description} src={news.urlToImage} url={news.url}/>

      })}

    </>
  )
}

export default NavBoard