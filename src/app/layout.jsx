import "./globals.css";
import { Header, Footer } from "@/components/SiteChrome";

export const metadata = {
  title: {
    default: "Saifur Rahman | Web Designer & Developer",
    template: "%s | Saifur Rahman",
  },
  description: "The portfolio of Saifur Rahman, a web designer and developer based in Sylhet, Bangladesh. Explore projects, skills, and professional experience.",
  robots: { index: false, follow: false },
};

const themeScript = `(function(){try{var saved=localStorage.getItem('saifur-theme');var theme=saved==='light'||saved==='dark'?saved:window.matchMedia('(prefers-color-scheme: dark)').matches?'dark':'light';document.documentElement.dataset.theme=theme;document.documentElement.style.colorScheme=theme;}catch(e){document.documentElement.dataset.theme='light';}})();`;

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body>
        <a className="skip-link" href="#main-content">Skip to content</a>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
