# S.H.I.E.L.D. — Phase 1

**Student Help Initiative for Education, Liability and Dues**  
*Standing between students and unexpected burdens.*

A React + TypeScript + Vite concept prototype for a student support initiative. The source files are intentionally kept together in the repository root so they are easier to find and edit in GitHub's browser UI.

## Files

- `index.html` — app entry page
- `main.tsx` — React entry point and routing
- `App.tsx` — page layout, navigation, and demo screens
- `styles.css` — responsive styling and animations
- `demo.ts` — fictional sample cases and metrics
- `package.json` — dependencies and commands
- `vite.config.ts` — Vite build configuration
- `tsconfig*.json` — TypeScript settings
- `.github/workflows/deploy.yml` — GitHub Pages build and deploy workflow

The `.github/workflows` directory is retained only because GitHub Actions requires that location for automated deployment; application source files are all at the root.

## Project boundaries

- Matrix Institute is a proposed pilot only; no affiliation or endorsement is implied.
- All cases and metrics are fictional demo data.
- There is no Firebase connection, application submission, payment processing, or real student data in this phase.
- Do not accept real contributions or publish real cases until verification, privacy, financial controls, and applicable legal requirements are ready.
- Never commit service-account credentials or private applicant evidence.

## Run locally

Requires Node.js 20+ and npm.

```bash
npm install
npm run dev
```

Use the local URL printed by Vite. For a production build, run `npm run build`.

## GitHub Pages

1. Push the project files to the root of the repository.
2. In GitHub, open **Settings → Pages** and choose **GitHub Actions** as the source.
3. Push to `main`; the workflow will install dependencies, build the app, and deploy the `dist` output.

Navigation uses hash URLs so refreshes work on static hosting, for example `/#/students`.

## Pages in this prototype

Home, student support, previously helped, fund transparency, transactions, about, support, contact, privacy, terms, cookies, accessibility, and a custom not-found page.

## Planned next phases

1. Review brand, accessibility, responsive UI, and all demo copy.
2. Connect Firebase Auth, Firestore, and private evidence storage.
3. Add server-validated applications and role-based admin review.
4. Add append-only financial records, reconciliation, and audit logs.
5. Run security, privacy, accessibility, and end-to-end tests before any real-world pilot.
