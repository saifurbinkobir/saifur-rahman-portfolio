import Link from "next/link";
import { notFound } from "next/navigation";
import Icon from "@/components/Icons";
import { profile } from "@/data/profile";
import { projects } from "@/data/projects";

export const dynamicParams = false;

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);

  if (!project) notFound();

  return {
    title: { absolute: `${project.name} | ${profile.name}` },
    description: project.summary,
  };
}

export default async function ProjectPage({ params }) {
  const { slug } = await params;
  const projectIndex = projects.findIndex((item) => item.slug === slug);

  if (projectIndex === -1) notFound();

  const project = projects[projectIndex];
  const nextProject = projects[(projectIndex + 1) % projects.length];

  return (
    <main
      id="main-content"
      className="project-detail container"
      style={{ "--project-accent": project.accent }}
    >
      <Link href="/#projects" className="text-link">
        <Icon name="arrow-left" size={18} />
        Back to projects
      </Link>

      <header className="detail-hero">
        <p className="eyebrow">
          {project.number} / {project.category}
        </p>
        <h1>{project.name}</h1>
        <p>{project.summary}</p>
        <div className="detail-actions">
          <a
            href={project.live}
            target="_blank"
            rel="noreferrer"
            className="button button-primary"
            aria-label={`Visit ${project.name} live site (opens in a new tab)`}
          >
            Visit live site
            <Icon name="arrow-up-right" size={19} />
          </a>
          <a
            href={project.github}
            target="_blank"
            rel="noreferrer"
            className="button button-outline"
            aria-label={`View ${project.name} GitHub repository (opens in a new tab)`}
          >
            <Icon name="github" size={19} />
            GitHub repository
          </a>
        </div>
      </header>

      <figure className="detail-cover">
        <img
          src={project.image}
          alt={`${project.name} homepage screenshot`}
          loading="eager"
          decoding="async"
        />
      </figure>

      <div className="detail-content">
        <div>
          <section className="detail-section">
            <p className="eyebrow">The project</p>
            <h2 className="section-heading">Overview</h2>
            <p>{project.description}</p>
          </section>

          <section className="detail-section">
            <h2 className="section-heading">Features</h2>
            <div className="detail-features">
              {project.features.map((feature) => (
                <div className="detail-feature" key={feature.title}>
                  <h3>{feature.title}</h3>
                  <p>{feature.text}</p>
                </div>
              ))}
            </div>
          </section>

          {project.challenges.length > 0 && (
            <section className="detail-section">
              <h2 className="section-heading">Challenges</h2>
              <ul>
                {project.challenges.map((challenge) => (
                  <li key={challenge}>{challenge}</li>
                ))}
              </ul>
            </section>
          )}

          {project.futurePlans.length > 0 && (
            <section className="detail-section">
              <h2 className="section-heading">Future improvements</h2>
              <ul>
                {project.futurePlans.map((plan) => (
                  <li key={plan}>{plan}</li>
                ))}
              </ul>
            </section>
          )}
        </div>

        <aside className="detail-sidebar" aria-label="Project technologies and content source">
          <section className="detail-section">
            <h2>Technology stack</h2>
            <ul className="tag-list">
              {project.technologies.map((technology) => (
                <li className="tag" key={technology}>
                  {technology}
                </li>
              ))}
            </ul>
          </section>
          {project.sourceNote && (
            <section className="detail-section">
              <h2>Data &amp; content</h2>
              <p>{project.sourceNote}</p>
            </section>
          )}
        </aside>
      </div>

      <nav className="project-next" aria-label="Next project">
        <div>
          <p className="eyebrow">Next project</p>
          <Link href={`/projects/${nextProject.slug}/`}>
            <span>{nextProject.name}</span>
            <Icon name="arrow-right" size={26} />
          </Link>
          <p>{nextProject.category}</p>
        </div>
      </nav>
    </main>
  );
}
