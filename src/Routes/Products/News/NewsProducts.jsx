import { News} from "../../../fake_api/News"
function NewsProducts() {
  return (
    <>
    <div className="news">
    <div className="line">
        <h2 className="product-title">N E W S</h2>

        <div className="line"></div>
      </div>
      {News.map((news, id) => {
        return (
          <div key={id}>
            <img className="news-img" src={news.img} alt={news.name} />
          </div>
        );
      })}
    </div>
    </>
  );
}

export default NewsProducts;
