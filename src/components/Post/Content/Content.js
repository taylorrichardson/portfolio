// @flow strict
import React from 'react';
import styles from './Content.module.scss';
import Tags from '../Tags/Tags';


type Props = {
  body: string,
  title: string
};


const Content = ({ body, title, tags, tagSlugs }: Props) => (
  <div className={styles['content']}>
    <h1 className={styles['content__title']}>{title}</h1>
    {tags && tagSlugs && <Tags tags={tags} tagSlugs={tagSlugs} />}
    <div className={styles['content__body']} dangerouslySetInnerHTML={{ __html: body }} />
  </div>
);

export default Content;
