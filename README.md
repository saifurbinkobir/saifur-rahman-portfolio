# Saifur Rahman Portfolio

The complete Next.js portfolio project for Saifur Rahman, Web Designer & Developer.

Includes the light/dark themes, responsive navigation, profile sections, three project detail pages, local images, and the edited two-page CV with its preview and PDF download.

## 1. Run on your computer

Use **Node.js 24.x**. Extract the ZIP and open the `saifur-rahman-portfolio` folder in VS Code. Open a terminal in the folder containing `package.json`, then run:

```sh
npm ci
npm run dev
```

Open the local URL printed in the terminal. Stop the development server with `Ctrl+C`.

The project uses npm and the included `package-lock.json`. All direct dependency versions are pinned to the versions used for the working portfolio.

## 2. Deploy on Vercel

1. Upload the extracted project folder's contents to a GitHub repository.
2. In Vercel, add a new project and import that repository.
3. Select the folder containing `package.json` as the root directory. If those files are at the repository root, keep the default root directory.
4. Use these settings, then deploy:

| Setting | Value |
| --- | --- |
| Framework preset | Next.js |
| Install command | `npm ci` |
| Build command | `npm run build` |
| Output directory | `out` |
| Node.js version | `24.x` |
| Application environment variables | None required |

The included `vercel.json` supplies the framework, install command, build command, and output directory. The Node version is set in `package.json`.

## 3. Deploy on Netlify

### From GitHub

1. Upload the extracted project folder's contents to a GitHub repository.
2. In Netlify, add a project by importing that repository.
3. Keep the base directory at the folder containing `package.json`.
4. Confirm the build command is `npm run build` and the publish directory is `out`, then deploy.

The included `netlify.toml` supplies the build settings and selects Node 24. It also marks this as a static export, so no Next.js server runtime is needed. The `.nvmrc` file selects the same Node version.

### Manual upload

The separate `saifur-portfolio-netlify-ready.zip` is already built. Extract it and drag the resulting `saifur-portfolio-netlify-ready` folder into Netlify's manual deployment area. That folder contains `index.html` directly inside it.

To create a fresh manual upload after editing this source project:

```sh
npm ci
npm run build
```

Upload the generated `out` folder to Netlify. Keep all files in it, including `_next`, `assets`, the project and resume directories, and the route data files.

## Build and pages

This project uses `output: "export"` in `next.config.mjs`. Running `npm run build` generates the static website in `out/`.

The included pages are:

- `/`
- `/resume/`
- `/projects/bangla-news-24/`
- `/projects/bazar-dor/`
- `/projects/devstack/`

No database, API keys, `.env` file, or ChatGPT sign-in integration is required. Contact links use email and phone links. The site runs independently on your hosting account.

## Edit the content

| File or folder | Purpose |
| --- | --- |
| `src/data/profile.js` | Name, title, contact details, social links, skills, work experience, education, and CV file path |
| `src/data/projects.js` | Project names, descriptions, technologies, links, challenges, and future plans |
| `src/app/page.jsx` | Homepage sections |
| `src/app/resume/page.jsx` | CV preview and PDF links |
| `src/app/projects/[slug]/page.jsx` | Individual project page layout |
| `src/app/globals.css` | Styling, responsive layouts, and theme colors |
| `src/app/layout.jsx` | Site metadata and shared page layout |
| `public/assets/` | Your photo, logo, and project images |
| `public/assets/cv/` | CV PDF and its two matching page previews |
| `docs/content-checklist.json` | Content still awaiting your confirmation |

If you replace the CV PDF, regenerate `cv-page-1.webp` and `cv-page-2.webp` from the same PDF so the on-page preview matches the download.

## Content still to complete

This export contains the current working draft. These details remain unconfirmed:

- The exact Instagram URL. The CV's Instagram label is currently unlinked.
- A real development challenge and an intended improvement for each project.
- Your hobbies/interests and preferred kind of work.
- Whether We Dominators is still current employment, or the ending month and year.

The current metadata has `robots: { index: false, follow: false }` because the content is still a draft. The site can still be opened through its live URL. When you want search engines to index the completed portfolio, change this setting in `src/app/layout.jsx` and redeploy.

## Official deployment references

- Next.js static exports: https://nextjs.org/docs/app/guides/static-exports
- Vercel build settings: https://vercel.com/docs/builds/configure-a-build
- Vercel Node.js versions: https://vercel.com/docs/functions/runtimes/node-js/node-js-versions
- Netlify framework settings: https://docs.netlify.com/build/frameworks/overview/
- Netlify Node.js configuration: https://docs.netlify.com/build/configure-builds/manage-dependencies/
- Netlify manual deployments: https://docs.netlify.com/deploy/create-deploys/
