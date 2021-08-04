import { Link } from "react-router-dom";
import "./ProjectPage.css";

export function ProjectPage({ project, prev, next }) {
  return (
    <div className="content project project-page-content">
      <h1 className="project-title">{`${project.title} - Built with ${project.technology}`}</h1>
      <h2 className="project-heading">{project.heading}</h2>

      <img
        className="project-pages-image"
        src={project.pagesImage}
        alt={`${project.title}`}
      ></img>

      <section className="project-goal">
        <h2>Goal</h2>
        {project.goal.map((paragraph, index) => {
          return <p key={index}>{paragraph}</p>;
        })}
      </section>

      <DemoVideo video={project.video.video} poster={project.video.poster} />

      <section className="project-challenges">
        <h2>Challenges</h2>
        {project.challenges.map((paragraph, index) => {
          return <p key={index}>{paragraph}</p>;
        })}
      </section>

      <section className="project-blog-posts-section">
        <h2>More Info</h2>
        <p>
          For more on my experience on making Annotate, here are the blog posts
          I wrote about it (so far).
        </p>

        <ul className="project-blog-posts-links">
          {project.blogPosts.map((bp, index) => {
            return (
              <li key={index}>
                <a className="project-blog-post-link" href={bp.url}>{bp.title}</a>
              </li>
            );
          })}
        </ul>
      </section>
      
      <img
        className="project-image"
        src={project.image}
        alt={`${project.title}`}
      ></img>

      <section className="developer-notes">
        <h2>Developer Notes</h2>
        {project.notes.map((note, index) => {
          return <p key={index}>{note}</p>;
        })}
      </section>

      <section className="future-plans">
        <h2>Future Plans</h2>
        {project.futurePlans.map((plan, index) => {
          return <p key={index}>{plan}</p>;
        })}
      </section>

      <ProjectExternalLinks project={project} />

      <PrevNextProjectLinks prev={prev} next={next} />
    </div>
  );
}

function DemoVideo({ video, poster }) {
  return (
    <video
      className="project-video"
      data-object-fit="cover"
      muted={true}
      loop={true}
      src={video}
      type="video/quicktime"
      poster={poster}
      playsInline=""
      autoPlay={true}
    >
      Sorry, your browser doesn’t support embedded videos.
    </video>
  );
}

function ProjectExternalLinks({ project }) {
  return (
    <ul className="project-external-links">
      <li>
        <a className="project-external-link" href={project.links.github}>View GitHub Repository</a>
      </li>

      <li>
        <a className="project-external-link" href={project.links.prod}>View {project.title}</a>
      </li>
    </ul>
  );
}

function PrevNextProjectLinks({ prev, next }) {
  return (
    <div className="prev-next-links">
      {prev && (
        <Link onClick={()=> window.scrollTo(0, 0)} className="prev" to={`${prev.url}`}>
          {prev.title}
        </Link>
      )}
      {next && (
        <Link onClick={()=> window.scrollTo(0, 0)} className="next" to={`${next.url}`}>
          {next.title}
        </Link>
      )}
    </div>
  );
}
