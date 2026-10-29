import Link from "next/link";
import { Icon } from "@/components/Icons";
import SkillGrid from "@/components/SkillGrid";
import { profile, experience, education, training } from "@/data/profile";
import { projects } from "@/data/projects";

export default function HomePage() {
  return (
    <main id="main-content">
      <section className="hero container" aria-labelledby="hero-title">
        <div className="hero-content">
          <p className="eyebrow"><span className="eyebrow-line" /> DESIGN + DEVELOPMENT</p>
          <h1 id="hero-title">Saifur<br />Rahman<span className="accent-dot">.</span></h1>
          <p className="hero-role">{profile.title}</p>
          <p className="hero-intro">{profile.introduction}</p>
          <div className="hero-actions flex flex-wrap gap-3">
            <Link href="#projects" className="button button-primary">View my work <Icon name="arrow-down" /></Link>
            <Link href="/resume/" className="button button-outline">View CV <Icon name="arrow-up-right" /></Link>
          </div>
          <div className="hero-meta">
            <span className="location"><Icon name="pin" size={16} /> {profile.location}</span>
            <span className="meta-divider" aria-hidden="true" />
            <a href={profile.github} target="_blank" rel="noopener noreferrer" aria-label="Saifur on GitHub"><Icon name="github" size={19} /></a>
            <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" aria-label="Saifur on LinkedIn"><Icon name="linkedin" size={19} /></a>
            <a href={profile.instagram} target="_blank" rel="noopener noreferrer" aria-label="Saifur on Instagram"><Icon name="instagram" size={19} /></a>
          </div>
        </div>
        <div className="hero-visual">
          <span className="portrait-outline" aria-hidden="true" />
          <div className="portrait-frame">
            <img src="/assets/saifur-rahman.jpg" alt="Saifur Rahman" width="1191" height="1191" fetchPriority="high" />
          </div>
          <div className="portrait-caption"><span className="caption-symbol" aria-hidden="true">&lt;/&gt;</span><div><span>Interfaces with intention.</span><strong>Built for the web.</strong></div></div>
          <span className="portrait-index" aria-hidden="true">SAIFUR RAHMAN / PORTFOLIO</span>
        </div>
      </section>

      <div className="tech-strip" aria-label="Primary technologies">
        <div className="container tech-strip-inner">
          <span className="strip-label">DESIGN. DEVELOP. REFINE.</span>
          {["JavaScript", "React", "Next.js", "Tailwind CSS", "WordPress"].map((name) => <span className="strip-tech" key={name}>{name}</span>)}
        </div>
      </div>

      <section className="section container" id="projects" aria-labelledby="projects-title">
        <div className="section-heading section-heading-row">
          <div><p className="eyebrow">01 / SELECTED PROJECTS</p><h2 id="projects-title">A closer look at my work<span>.</span></h2></div>
          <p>Three projects exploring news,<br className="desktop-break" /> market prices, and development tools.</p>
        </div>
        <div className="project-grid grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {projects.map((project) => (
            <article className="project-card" key={project.slug} style={{ "--project-accent": project.accent }}>
              <Link className="project-card-link" href={`/projects/${project.slug}/`} aria-label={`View details for ${project.name}`}>
                <div className="project-image-wrap">
                  <div className="browser-bar" aria-hidden="true"><span /><span /><span /><i>{project.name}</i></div>
                  <img src={project.image} alt={`${project.name} website homepage`} width="1348" height="925" loading="lazy" />
                </div>
                <div className="project-card-body">
                  <div className="project-card-meta"><span>{project.category}</span><span>{project.number}</span></div>
                  <h3>{project.name}</h3>
                  <p>{project.summary}</p>
                  <ul className="tag-list" aria-label={`${project.name} technologies`}>{project.technologies.slice(0,3).map((tech) => <li className="tag" key={tech}>{tech}</li>)}</ul>
                  <span className="project-card-cta">View details <Icon name="arrow-up-right" size={19} /></span>
                </div>
              </Link>
            </article>
          ))}
        </div>
      </section>

      <section className="section about-section" id="about" aria-labelledby="about-title">
        <div className="container about-grid">
          <div className="about-heading">
            <p className="eyebrow">02 / ABOUT ME</p>
            <h2 id="about-title">From websites<br /> to web<br /> <span>applications.</span></h2>
            <div className="about-location"><Icon name="pin" size={18} /><span>Sylhet, Bangladesh</span></div>
          </div>
          <div className="about-copy">
            <h3>A little about the person behind the projects.</h3>
            {profile.about.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
            {profile.preferredWork && <p>{profile.preferredWork}</p>}
            {profile.hobbies.length > 0 && <div className="hobbies"><h4>Away from the screen</h4><p>{profile.hobbies.join(" · ")}</p></div>}
            <a className="text-link" href={profile.linkedin} target="_blank" rel="noopener noreferrer">Connect on LinkedIn <Icon name="arrow-up-right" size={18} /></a>
          </div>
        </div>
      </section>

      <section className="section container" id="skills" aria-labelledby="skills-title">
        <div className="section-heading section-heading-row">
          <div><p className="eyebrow">03 / SKILLS & TOOLS</p><h2 id="skills-title">What I work with<span>.</span></h2></div>
          <p>Frontend development, website building,<br className="desktop-break" /> and the tools that connect the process.</p>
        </div>
        <SkillGrid />
      </section>

      <section className="section experience-section" id="experience" aria-labelledby="experience-title">
        <div className="container experience-layout">
          <div className="experience-heading"><p className="eyebrow">04 / PROFESSIONAL EXPERIENCE</p><h2 id="experience-title">Experience<br /> behind the work<span>.</span></h2><p>Building, maintaining, and improving websites for clients and teams.</p></div>
          <div className="experience-list">
            {experience.map((job,index) => (
              <article className="experience-item" key={job.company}>
                <span className="timeline-dot" aria-hidden="true" />
                <div className="experience-top"><span className="experience-number">0{index+1}</span>{job.period && <span className="experience-period">{job.period}</span>}</div>
                <h3>{job.role}</h3>
                <p className="experience-company">{job.company}</p>
                <p className="experience-arrangement">{job.arrangement}</p>
                <ul>{job.points.map((point) => <li key={point}>{point}</li>)}</ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section container" id="education" aria-labelledby="education-title">
        <div className="section-heading"><p className="eyebrow">05 / EDUCATION & LEARNING</p><h2 id="education-title">My academic background<span>.</span></h2></div>
        <div className="education-grid grid gap-5 md:grid-cols-3">
          {education.map((item) => <article className="education-card" key={item.short}>
            <div className="education-top"><span className="degree-mark">{item.short}</span><Icon name="graduation" size={28} /></div>
            <h3>{item.degree}</h3>
            {item.subject && <p className="education-subject">{item.subject}</p>}
            <p className="education-institution">{item.institution}</p>
            <p className="education-year"><span>{item.year}</span> {item.yearLabel.toLowerCase()}</p>
          </article>)}
        </div>
        <div className="training"><h3>Additional training</h3><div className="training-grid">{training.map((item) => <div className="training-item" key={item.course}><Icon name="check" size={18}/><div><h4>{item.course}</h4><p>{item.provider}</p></div></div>)}</div></div>
      </section>

      <section className="contact-section" id="contact" aria-labelledby="contact-title">
        <div className="container contact-grid">
          <div><p className="eyebrow">06 / GET IN TOUCH</p><h2 id="contact-title">Let’s start<br />a conversation<span>.</span></h2><p className="contact-intro">For project enquiries and professional opportunities,<br className="desktop-break" /> reach me by email or phone.</p></div>
          <div className="contact-methods">
            <a href={`mailto:${profile.email}`} className="contact-method"><span className="contact-icon"><Icon name="mail" size={24}/></span><div><span>Email me</span><strong>{profile.email}</strong></div><Icon name="arrow-up-right" size={23}/></a>
            <a href={`tel:${profile.phoneHref}`} className="contact-method"><span className="contact-icon"><Icon name="phone" size={23}/></span><div><span>Call me</span><strong>{profile.phone}</strong></div><Icon name="arrow-up-right" size={23}/></a>
            <div className="contact-socials"><span>Find me online</span><a href={profile.github} target="_blank" rel="noopener noreferrer"><Icon name="github" size={18}/> GitHub</a><a href={profile.linkedin} target="_blank" rel="noopener noreferrer"><Icon name="linkedin" size={18}/> LinkedIn</a>{profile.instagram && <a href={profile.instagram} target="_blank" rel="noopener noreferrer"><Icon name="instagram" size={18}/> Instagram</a>}</div>
          </div>
        </div>
      </section>
    </main>
  );
}
