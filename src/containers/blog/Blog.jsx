import React from 'react';
import Article from '../../components/article/Article';
import { pic, pic6, pic7, pic8, pic9 } from './imports';
import './blog.css';


const Blog = () => {
  return (
    <div className="gpt3__blog section__padding" id="blog">
      <div className="gpt3__blog-heading">
        <h1 className="gradient__text">A lot is happening, <br /> We are blogging about it.</h1>
      </div>
      <div className="gpt3__blog-container">
        <div className="gpt3__blog-container_groupA">
          <Article imgUrl={pic} date="Nov 16, 2021" text="GPT-3 and Open  AI is the future. Let us exlore how it is?"/>
        </div>
        <div className="gpt3__blog-container_groupB">
          <Article imgUrl={pic6} date="Nov 16, 2021" text="GPT-3 and Open  AI is the future. Let us exlore how it is?"/>
          <Article imgUrl={pic7} date="Nov 16, 2021" text="GPT-3 and Open  AI is the future. Let us exlore how it is?"/>
          <Article imgUrl={pic8} date="Nov 16, 2021" text="GPT-3 and Open  AI is the future. Let us exlore how it is?"/>
          <Article imgUrl={pic9} date="Nov 16, 2021" text="GPT-3 and Open  AI is the future. Let us exlore how it is?"/>
        </div>
      </div>
    </div>
  )
}

export default Blog;
