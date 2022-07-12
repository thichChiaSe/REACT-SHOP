import React from 'react';
import "./style.scss"
import BlogItem from '../../../../../../components/BlogItem';
import Bloglarge from "../../../../../../assets/img/blog_post_large.png";
import BlogMedium from "../../../../../../assets/img/blog_post_medium.png";
import Blog1 from "../../../../../../assets/img/blog_post_1.png";
import Blog2 from "../../../../../../assets/img/blog_post_2.png";
import Blog3 from "../../../../../../assets/img/blog_post_3.png";

export const BlogContent = () => {
  return <div className="blog__list">
  <div class="blog__column">
    <BlogItem
      image={Bloglarge}
      title="Our chef tips for a great and tasty dinner ready in 20 minutes"
      date="17. 6. 2020"
      size="large"
      color="--white-cl"
      category
      tagName="Dinner tips"
    />
  </div>
  <div class="blog__column">
    <BlogItem
      image={BlogMedium}
      title="Which vegetable your family will love and want’s eat each day"
      date="17. 6. 2020"
      category
      tagName="Vegetable"
    />
  </div>
  <div class="blog__column">
    <BlogItem
      image={Blog1}
      category="Dinner tips"
      title="Our chef tips for a great and tasty dinner ready in 20 minutes"
      date="17. 6. 2020"
      size="small"
      fontSize="--h6"
      color="--black-text"
    />
    <BlogItem
      image={Blog2}
      title="Our chef tips for a great and tasty dinner ready in 20 minutes"
      date="17. 6. 2020"
      size="small"
      fontSize="--h6"
      color="--black-text"
    />
    <BlogItem
      image={Blog3}
      title="Our chef tips for a great and tasty dinner ready in 20 minutes"
      date="17. 6. 2020"
      size="small"
      fontSize="--h6"
      color="--black-text"
    />
  </div>
</div>;
};
