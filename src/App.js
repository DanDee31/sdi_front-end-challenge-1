import './App.css';
import Authors from "./JSON Data/Authors.json";
import News from "./JSON Data/News.json";

function App() {

  const authorMap = Authors.reduce((acc, author) => {
    acc[author.id] = author.name;
    return acc;
  }, {});
  
  const updateNews = News.map((news) => ({
    ...news,
    name: authorMap[news.author_id] || "Unknown Author",
  }));
  
  return (
    <div>
      <article>
        {updateNews.map(news => {
          const date = new Date(news.created_at);
          const formattedDate = date.toLocaleString('en-US', {
            day: '2-digit', month: 'short'
          }).split(' ');
          return (
            <div key={news.id} className="item">
              <div style={{ position: "relative" }}>
                <img src={news.image_url} alt={news.title}/>
                <div className="date">
                  <span className="day">{formattedDate[1].toUpperCase()}</span>
                  <span className="month">{formattedDate[0]}</span>
                </div>
              </div>
              <div className="content">
                <p className="share">
                  <img src="share.png" alt="icon" className="icon"/>
                  SHARE
                </p>
                <hr/>
                <p className="author">{news.name}</p>
                <h2 className="title">{news.title}</h2>
                <p className="body">{news.body}</p>
                <p className="link">READ ARTICLE</p>
              </div>
            </div>
          );
        })}
        <div className="pagination">
          <a href="#">&laquo;</a>
          <a href="#">1</a>
          <a href="#">2</a>
          <a href="#">...</a>
          <a href="#">8</a>
          <a href="#">9</a>
          <a href="#">10</a>
          <a className="active" href="#">11</a>
          <a href="#">12</a>
          <a href="#">13</a>
          <a href="#">14</a>
          <a href="#">&raquo;</a>
        </div>
      </article>
    </div>
  );
}

export default App;
