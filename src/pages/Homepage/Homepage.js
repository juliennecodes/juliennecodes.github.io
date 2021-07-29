import { ProjectLinks } from "./ProjectLinks";
import { blogPosts } from "../../contents/blog-posts";
import "./Homepage.css";

export function Homepage() {
  return (
    <div className="homepage-content content">
      <Introduction />
      <ProjectLinks />
      <BlogPostsLinks />
    </div>
  );
}

function Introduction() {
  return (
    <div className="introduction">
      <h1 className="introduction-heading">Hello, my name is Julienne.</h1>
      <p className="introduction-subheading">I am a web developer.</p>
    </div>
  );
}

function BlogPostsLinks() {
  return (
    <div className="blog-posts-div">
      <h2 className="check-out-heading">Check out my blog posts!</h2>
      <ul className="blog-posts-links">
        {blogPosts.map((blogPost, index) => {
          return (
            <li className="blog-post-link" key={index}>
              <a href={blogPost.url}>{blogPost.title}</a>
            </li>
          );
        })}
      </ul>
      <a className="blog-link" href="https://juliennecodes.github.io/blog/">See all posts</a>
    </div>
  );
}
