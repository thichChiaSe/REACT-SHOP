import "./style.scss";
import Tag from "../Tag";
import classnames from "classnames";

function BlogItem({
  image,
  category = false,
  title,
  imageAuthor,
  date,
  size = "default",
  color,
  tagName,
  fontSize = "--h5",
}) {
  return (
    <div className={classnames("blog__item", `size-${size}`)}>
      <div className="blog__item-img">
        <img src={image} alt="" />
      </div>
      <div className="blog__item-content">
        <div className="heading">
          {category && (
            <Tag
              children={tagName}
              color="green"
              background="green"
              size="large"
            />
          )}
        </div>
        <div className="bottom">
          <h3 className={classnames("title heading", fontSize, color)}>
            {title}
          </h3>
          <div className="author">
            <div className="author-image">{imageAuthor}</div>
            <span className={classnames("desc --bd12", color)}>Author</span>
            <div className={classnames("author-date desc --bd12", color)}>
              {date}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BlogItem;
