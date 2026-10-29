import Link from "next/link";
import { Icon } from "@/components/Icons";
import { profile } from "@/data/profile";

export const metadata = {
  title: "Resume",
  description: "View and download Saifur Rahman’s resume — Web Designer & Developer.",
};

const resumePages = [
  { number: 1, description: "Contact details, career objective, skills, and work experience" },
  { number: 2, description: "Continued work experience, educational qualifications, certifications, and training" },
];

export default function ResumePage() {
  return (
    <main id="main-content" className="resume-page container">
      <Link href="/" className="text-link"><Icon name="arrow-left" size={17} /> Back to portfolio</Link>
      <section className="resume-heading" aria-labelledby="resume-title">
        <div>
          <p className="eyebrow">CURRICULUM VITAE</p>
          <h1 id="resume-title">{profile.name}<span className="accent-dot">.</span></h1>
          <p>{profile.title}</p>
        </div>
        <div className="resume-actions">
          <a href={profile.resume} className="button button-primary" download="Saifur-Rahman-CV.pdf" target="_blank" rel="noopener noreferrer">Download PDF <Icon name="download" /></a>
          <a href={profile.resume} className="text-link" target="_blank" rel="noopener noreferrer">Open PDF in a new tab <Icon name="arrow-up-right" size={17} /></a>
        </div>
      </section>
      <div className="resume-pages" aria-label="Two-page resume preview">
        {resumePages.map((page) => (
          <figure className="resume-sheet" key={page.number}>
            <figcaption>Page {page.number} of {resumePages.length}</figcaption>
            <img
              src={`/assets/cv/cv-page-${page.number}.webp`}
              alt={`Saifur Rahman’s resume, page ${page.number}: ${page.description}. A text-based PDF is available using the download link above.`}
              width="1224"
              height="1584"
              loading={page.number === 1 ? "eager" : "lazy"}
            />
          </figure>
        ))}
      </div>
    </main>
  );
}
