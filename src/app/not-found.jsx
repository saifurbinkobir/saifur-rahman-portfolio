import Link from "next/link";

export default function NotFound() {
  return <main id="main-content" className="container not-found"><p className="eyebrow">404 / PAGE NOT FOUND</p><h1>This page isn’t here.</h1><p>Explore the portfolio to find projects, experience, and contact details.</p><Link href="/" className="button button-primary">Back to the portfolio</Link></main>;
}
