# [Github Search](https://github-searches.netlify.app/). Find your repositories

## 🏗 Installation

### 1. clone the repository

```sh
git clone https://github.com/rahulrajdahal/GithubFinder.git
```

### 2. Install Dependencies

#### pnpm

```sh
cd GithubSearch && pnpm install
```

### 3. Run development server

```sh
pnpm run dev
```

#### OR

### Run Production server

```sh
pnpm run preview
```

## Preview

[![Github Search](./screenshots/GithubSearch.png)](https://github-searches.netlify.app/)
![GithubSearch](./screenshots/repos.png)

## 🚀 Project Structure

Inside of project [Github Search](https://github-searches.netlify.app/), you'll see the following folders and files:

```text
/
├── public/
│   └── logo.svg
├── src/
|   ├── assets/
│   │   ├── icon.svg
|   ├── components/
│   │   ├── Component.tsx
|   ├── pages/
│   │   ├── Page.tsx
└── index.html
└── tailwind.config.js
└── pwa-assets.config.ts
└── README.md
└── package.json
```

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command            | Action                                        |
| :----------------- | :-------------------------------------------- |
| `pnpm install`     | Installs dependencies.                        |
| `pnpm run dev`     | Starts local dev server at `localhost:5173`.  |
| `pnpm run build`   | Build your production site to `./dist/`.      |
| `pnpm run preview` | Preview your build locally, before deploying. |
| `pnpm run lint`    | Check all linting errors.                     |
