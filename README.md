# Spanish Verb Conjugation App

A full-stack project built with **React (Vite)** on the frontend and **Node.js/Express** with **PostgreSQL** on the backend.  
The project is set up as a monorepo using **pnpm workspaces** for easy dependency management.

# Spanish Verb Conjugation App

A full-stack project built with **React (Vite)** on the frontend and **Node.js/Express** with **PostgreSQL** on the backend.  
The project is set up as a monorepo using **pnpm workspaces** for easy dependency management.

## Prerequisites

Before starting, ensure you have:

- [Node.js](https://nodejs.org/) (v18+ recommended)
- [pnpm](https://pnpm.io/) (v8+ recommended)
  - If you don’t have pnpm installed globally, run:
    ```bash
    npm install -g pnpm
    ```
- PostgreSQL (local or cloud-hosted, e.g., [Neon](https://neon.tech/))

## Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/stevopritchard/Conjugation-App-Version-2.git
cd Conjugation-App-Version-2
```

### 2. Install dependencies

```bash
pnpm install
```

### 3. Start both frontend & backend in development mode

```bash
pnpm start
```

### 4. Run frontend only

```bash
pnpm --filter client dev
```

### 5. Run backend only

```bash
pnpm --filter server dev
```

### Project Structure

<pre>
```bash
Conjugation-App-Version-2/
├── README.md
├── pnpm-lock.yaml
├── pnpm-workspace.yaml
├── packages/
│   ├── client/
│   │   ├── package.json
│   │   └── src/
│   └── server/
│       ├── package.json
│       └── src/
└── .gitignore
```
</pre>

### Scripts

- pnpm start – Run frontend and backend together using concurrently
- pnpm --filter <workspace> dev – Run only one workspace (client or server)

### License

MIT
