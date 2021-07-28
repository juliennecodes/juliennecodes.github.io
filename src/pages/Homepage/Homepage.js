import { ProjectLinks } from "./ProjectLinks";
import { blogPosts } from "../../contents/blog-posts";

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
      <h1 className="introduction-content">Hello, my name is Julienne.</h1>
      <p className="introduction-content">I am a web developer.</p>
    </div>
  );
}

function BlogPostsLinks() {
  return (
    <div className="blog-posts-div">
      <h2>Blog Posts</h2>
      <ul className="blog-posts-links">
        {blogPosts.map((blogPost, index) => {
          return (
            <li className="blog-post-link" key={index}>
              <a href={blogPost.url}>{blogPost.title}</a>
            </li>
          );
        })}
      </ul>
      <a href="https://juliennecodes.github.io/blog/">See all posts</a>
    </div>
  );
}
