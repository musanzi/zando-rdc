# Zando RDC

Zando RDC helps customers discover verified local suppliers in Lubumbashi and contact the Zando team on WhatsApp.

## Stack and structure

The TypeScript monorepo uses pnpm and Nx:

| Path                 | Responsibility                                  | Main technologies                                                        |
| -------------------- | ----------------------------------------------- | ------------------------------------------------------------------------ |
| `apps/api`           | Authentication, business logic, and data access | NestJS 12, CQRS, TypeORM, PostgreSQL 18, Redis 8                         |
| `apps/web`           | Public pages and staff dashboards               | Angular 22 with SSR, Angular Material, Tailwind CSS 4, NgRx Signal Store |
| `libs/api-contracts` | Generated API types used by the web app         | OpenAPI, `openapi-typescript`                                            |

The API uses JWT authentication, Redis-backed sessions, Google sign-in, SMTP email, and Scalar API documentation.

## Set up with Docker Compose

Use Docker Compose to run the full development environment. Run commands from the repository root. Give the Docker VM at least 6 GiB of memory. With Colima's default of 2 GiB, the Angular build can run out of memory.

```sh
cp -n .env.example .env
```

Set the following values in `.env`. The API listens on `API_PORT`. The example file sets `WEB_PORT=4300`, but the links below use port 4200.

```dotenv
API_PORT=8000
WEB_PORT=4200
DB_HOST=db
DB_PORT=5432
DB_USERNAME=zando-rdc
DB_PASSWORD=development-only
DB_NAME=zando-rdc
REDIS_URL=redis://redis:6379
MAIL_HOST=mailhog
MAIL_PORT=1025
SESSION_SECRET=local-session-secret
SESSION_MAX_AGE=86400000
JWT_SECRET=local-jwt-secret
GOOGLE_CLIENT_ID=development-client
GOOGLE_SECRET=development-secret
GOOGLE_REDIRECT_URI=http://localhost:8000/auth/google/redirect
FRONTEND_URI=http://localhost:4200
```

Leave `MAIL_USERNAME` and `MAIL_PASSWORD` empty for Mailpit. The Compose service keeps the name `mailhog`, so `MAIL_HOST=mailhog` still works. Include `REDIS_URL`, because `.env.example` omits it. The Google placeholders let the API start. Replace them with real credentials to use Google sign-in.

Start the containers, apply migrations, seed the database, and watch for file changes:

```sh
docker compose -f compose.dev.yml -p zando up -d --build
docker compose -f compose.dev.yml -p zando exec api pnpm db:up
docker compose -f compose.dev.yml -p zando exec api pnpm db:seed
docker compose -f compose.dev.yml -p zando watch
```

Open the [web app](http://localhost:4200), [API docs](http://localhost:8000/docs), or [Mailpit inbox](http://localhost:8025). The API runs at `http://localhost:8000` and publishes its schema at `/openapi.json`. Sign in with a seed account:

| Email             | Password    |
| ----------------- | ----------- |
| `admin@admin.com` | `admin1234` |
| `user@user.com`   | `user1234`  |

The seed creates or updates these development accounts. Running it again resets their passwords and roles. Run it only against development data.

### Run on the host

Use Node.js 24.x and pnpm 12.11.2. The `packageManager` field in `package.json` pins pnpm.

Run PostgreSQL and Redis locally, and provide an SMTP server. The Compose files do not publish PostgreSQL or Redis ports to the host.

Configure PostgreSQL to match `DB_*` in `.env`. Set `DB_HOST=localhost` and `REDIS_URL=redis://localhost:6379` in `.env`. Set `MAIL_HOST` and `MAIL_PORT` for your SMTP server.

Install dependencies, prepare the database, and start the development servers:

```sh
corepack enable
pnpm install --frozen-lockfile
pnpm db:up
pnpm db:seed
pnpm dev
```

## Everyday commands

| Command                                            | Purpose                                         |
| -------------------------------------------------- | ----------------------------------------------- |
| `pnpm dev`                                         | Start both development servers                  |
| `pnpm dev:api` or `pnpm dev:web`                   | Start one development server                    |
| `pnpm build`                                       | Build both apps into `dist/apps`                |
| `pnpm lint` and `pnpm typecheck`                   | Check code quality and types                    |
| `pnpm start:api` or `WEB_PORT=4200 pnpm start:web` | Run existing production builds                  |
| `pnpm db:up` or `pnpm db:down`                     | Apply migrations or revert the latest migration |
| `pnpm db:seed`                                     | Create or reset the development accounts        |
| `pnpm generate:api`                                | Regenerate the OpenAPI document and types       |
| `pnpm sync:api`                                    | Regenerate contracts and build the web app      |

To run a pnpm command in Docker, prefix it with the command for the relevant container:

- API: `docker compose -f compose.dev.yml exec api`
- Web app: `docker compose -f compose.dev.yml exec web`

Database commands build the API first.

## API unit tests

Install the locked dependencies with `pnpm install --frozen-lockfile`. Run commands from the repository root.
The tests need no database, Redis, SMTP, HTTP server, or private environment file.

| Command                                     | Purpose                                |
| ------------------------------------------- | -------------------------------------- |
| `pnpm test` or `pnpm test:api`              | Run the API unit suite once            |
| `pnpm test:api:watch`                       | Rerun tests while editing              |
| `pnpm test:api --args=validate-credentials` | Run specs whose paths match the filter |
| `pnpm typecheck:api:tests`                  | Check test, fixture, and runner types  |

After API behavior changes, run `pnpm test:api` and `pnpm typecheck:api:tests`.
`pnpm typecheck` also checks API specs. CI runs lint, type checks, unit tests, and builds.

Place `*.spec.ts` files beside the API code under test. Import Vitest functions explicitly.
Use Nest testing modules for dependency-injected providers. Call exported helpers directly.
Mock infrastructure dependencies, such as repositories, mail, and filesystem operations. Test the business logic itself.

Test observable outcomes and consequential side effects.
Check that rejected operations do not write data, publish events, or delete files.
Add regression tests for bug fixes. Skip tests that only construct an object or check that it forwards a call.
There is no numeric coverage threshold.

## Maintain the application

Follow these repository conventions:

- Follow [CLAUDE.md](CLAUDE.md). Keep API commands, queries, handlers, controllers, DTOs, and entities in their domain modules under `apps/api/src/modules/`. Put migrations and seeds in `apps/api/src/modules/database/`. Split each web domain module into `data-access`, `features`, `interfaces`, and `ui`. Put static assets in `apps/web/public/`.
- After API changes, run `pnpm generate:api` and commit the changes in `libs/api-contracts`. Import types from `@zando-rdc/api-contracts`. Do not edit generated files manually.
- The generator exports the schema in Nest preview mode without a running API, database, Redis, or SMTP server. The web build, serve, and typecheck commands run the generator automatically.
- Run `pnpm lint`, `pnpm typecheck`, `pnpm test`, and `pnpm build` before committing application changes. Format changed files with `pnpm exec prettier --write <paths>`. Git hooks run lint and enforce Conventional Commit messages.
- Use the supplied logos in `apps/web/public/images/logos/`. The theme uses dark surfaces, white text, and the primary orange `#EE731F`. Keep readable contrast and a visible keyboard focus on orange controls.

## Deploy the application

Keep `.env` private. Before deployment, configure real database credentials, secrets, Google OAuth, SMTP, `MAIL_FROM`, and `FRONTEND_URI`.
The web build reads the API URL from `WEB_API_URL`, which defaults to `/api`. With that default, configure your reverse proxy to strip `/api` and forward requests to the API. For a separate API origin, set its HTTPS URL without a trailing slash, then rebuild the web image. Set `WEB_ALLOWED_HOSTS` to the comma-separated web hostnames, without schemes, paths, or ports.

Before each release, back up PostgreSQL and the uploads volume. Start the production containers:

```sh
docker compose -f compose.prod.yml -p zando up -d --build
```

Apply migrations separately during deployment.

Compose also persists Redis data. The `down` command preserves volumes. The `down -v` command deletes them.
