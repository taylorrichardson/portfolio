// @flow strict
import React from "react";
import { Link } from "gatsby";
import Author from "./Author";
import Comments from "./Comments";
import Content from "./Content";
import Meta from "./Meta";
import Tags from "./Tags";
import styles from "./Post.module.scss";
import type { Node } from "../../types";

const Post = ({ post }: Props) => {
  const { html } = post;
  const { tagSlugs, slug } = post.fields;
  const { tags, title, date } = post.frontmatter;

  return (
    <div className={styles["post"]}>
      <Link className={styles["post__home-button"]} to="/">
        ← Back
      </Link>

      <div className={styles["post__content"]}>
        <Content body={html} title={title} tags={tags} tagSlugs={tagSlugs} />
      </div>
    </div>
  );
};

export default Post;
