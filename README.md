# Welcome to your Lovable project

## Project info

**URL**: https://lovable.dev/projects/1bf6e31d-c462-4f7d-a521-185b9b12954b

## How can I edit this code?

There are several ways of editing your application.

**Use Lovable**

Simply visit the [Lovable Project](https://lovable.dev/projects/1bf6e31d-c462-4f7d-a521-185b9b12954b) and start prompting.

Changes made via Lovable will be committed automatically to this repo.

**Use your preferred IDE**

If you want to work locally using your own IDE, you can clone this repo and push changes. Pushed changes will also be reflected in Lovable.

The only requirement is having Node.js & npm installed - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)

Follow these steps:

```sh
# Step 1: Clone the repository using the project's Git URL.
git clone <YOUR_GIT_URL>

# Step 2: Navigate to the project directory.
cd <YOUR_PROJECT_NAME>

# Step 3: Install the necessary dependencies.
npm i

# Step 4: Start the development server with auto-reloading and an instant preview.
npm run dev
```

**Edit a file directly in GitHub**

- Navigate to the desired file(s).
- Click the "Edit" button (pencil icon) at the top right of the file view.
- Make your changes and commit the changes.

**Use GitHub Codespaces**

- Navigate to the main page of your repository.
- Click on the "Code" button (green button) near the top right.
- Select the "Codespaces" tab.
- Click on "New codespace" to launch a new Codespace environment.
- Edit files directly within the Codespace and commit and push your changes once you're done.

## What technologies are used for this project?

This project is built with .

- Vite
- TypeScript
- React
- shadcn-ui
- Tailwind CSS

## How can I deploy this project?

Simply open [Lovable](https://lovable.dev/projects/1bf6e31d-c462-4f7d-a521-185b9b12954b) and click on Share -> Publish.

## I want to use a custom domain - is that possible?

We don't support custom domains (yet). If you want to deploy your project under your own domain then we recommend using Netlify. Visit our docs for more details: [Custom domains](https://docs.lovable.dev/tips-tricks/custom-domain/)

------------------

# Deploy as Static Site on GitHub Pages

Below is one common approach to deploying a Vite‑React app to GitHub Pages:

---

**1. Set the Public Path (if needed):**

If your repository isn’t a user/organization page (i.e. its URL is `https://<username>.github.io/<repo>/`), you need to set the base URL in your Vite configuration. In your `vite.config.ts` file, add a `base` property:

```ts
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

export default defineConfig(({ mode }) => ({
  base: mode === 'development' ? '/' : '/<repo>/', // replace <repo> with your repository name
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    react(),
    mode === 'development' && componentTagger(),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
```

*Note:* Adjust the `base` property only for production (GitHub Pages) so that asset paths work correctly.

---

**2. Build the Production Version:**

Run the build script defined in your `package.json`:

```sh
npm run build
```

This creates a `dist` folder containing your static site.

---

**3. Deploy to GitHub Pages:**

There are a couple of ways to deploy. One simple method is to use the [gh-pages](https://www.npmjs.com/package/gh-pages) package.

a. Install the package as a dev dependency:

```sh
npm install --save-dev gh-pages
```

b. Add a deploy script to your `package.json` (for example):

```json
"scripts": {
  "dev": "vite",
  "build": "vite build",
  "preview": "vite preview",
  "deploy": "gh-pages -d dist"
}
```

c. Run the deploy script:

```sh
npm run deploy
```

This command pushes the contents of your `dist` directory to a branch named `gh-pages` on your repository. GitHub Pages will then serve your site from that branch.

---

**4. Configure GitHub Pages in the Repository Settings:**

1. Go to your GitHub repository’s **Settings**.
2. Under the **Pages** section, select the `gh-pages` branch as the source.
3. Save the settings.

Your site should then be available at:
- `https://<username>.github.io/<repo>/` (for a project page)  
or  
- `https://<username>.github.io/` (if it’s a user/organization page).

---

**Additional Options:**

- **GitHub Actions:** You can also set up a GitHub Action workflow that builds and deploys your site automatically on push.
- **Manual Deployment:** Alternatively, you could manually copy the contents of the `dist` folder to a branch named `gh-pages`.

---

Following these steps will turn your repository into a static site viewable on GitHub Pages. If you run into any issues, checking the browser’s console for path errors or misconfigurations in the `base` setting is a good starting point.
