# Bit Links

Bit Links is a small URL-shortening application built with Next.js and MongoDB. It lets users create a short, custom link without signing in and redirects visitors from that short path to the stored destination URL.

## Features

- Create short links with a preferred slug.
- Store short-link records in MongoDB.
- Redirect short URLs to their original destination.
- Copy a generated link from the browser.
- Simple responsive interface built with Tailwind CSS.
- No account or login required.

## Tech stack

- Next.js 16
- React 19
- MongoDB Node.js driver
- MongoDB Atlas or another MongoDB deployment
- Tailwind CSS 4
- ESLint

## Prerequisites

Install the following before running the project:

- Node.js 20.9 or later
- npm
- A MongoDB database. MongoDB Atlas is recommended for development.

## Getting started

1. Clone the repository and enter the project directory:

   ```bash
   git clone https://github.com/nishantrana012/bit-links
   cd bit-links
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Create a local environment file named `.env.local` in the project root:

   ```env
   MONGODB_URI=mongodb+srv://<username>:<password>@<cluster>.mongodb.net/?retryWrites=true&w=majority
   NEXT_PUBLIC_HOST=http://localhost:3000
   ```

   Replace the MongoDB placeholders with the credentials and connection string for your database. If your password contains characters such as `@`, `:`, `/`, or `#`, URL-encode them.

4. If you are using MongoDB Atlas, add your development machine's IP address to the cluster's network access list and make sure the database user has permission to read and write.

5. Start the development server:

   ```bash
   npm run dev
   ```

6. Open [http://localhost:3000](http://localhost:3000) and select **Try Now**, or open [http://localhost:3000/shorten](http://localhost:3000/shorten) directly.

## Environment variables

| Variable | Required | Description |
| --- | --- | --- |
| `MONGODB_URI` | Yes | MongoDB connection string used by the server. |
| `NEXT_PUBLIC_HOST` | Yes | Public base URL displayed when a short link is generated. Use your production domain when deployed. |

Never commit `.env.local` or expose `MONGODB_URI` in client-side code. Environment files are excluded by `.gitignore`.

## How to use

1. Enter the full destination URL, including its protocol, for example `https://example.com/article`.
2. Enter a preferred short path, for example `my-article`.
3. Select **Generate**.
4. Share the generated link:

   ```text
   http://localhost:3000/my-article
   ```

When someone opens that path, Bit Links looks up `my-article` in MongoDB and redirects to the saved destination URL. A short path can only be used once.

## API

### Create a short link

```http
POST /api/generate
Content-Type: application/json
```

Request body:

```json
{
  "shortUrl": "my-article",
  "longUrl": "https://example.com/article"
}
```

Successful response:

```json
{
  "message": "Short URL created successfully",
  "success": true
}
```

If the slug already exists:

```json
{
  "message": "Short URL already exists",
  "success": false
}
```

## Data storage

The application uses the `bitlinks` database and the `urls` collection. Each link is stored with the following fields:

```json
{
  "shortUrl": "my-article",
  "longUrl": "https://example.com/article"
}
```

## Project structure

```text
app/
├── [url]/page.js          # Looks up a slug and redirects to its destination
├── api/generate/route.js  # Creates a short-link record
├── shorten/page.js        # Link-generation form
├── layout.js              # Root layout and navigation
└── page.js                # Home page
components/
└── Navbar.js              # Site navigation
lib/
└── mongodb.js             # MongoDB client configuration
public/                    # Static assets
```

## Available scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Start the development server with hot reload. |
| `npm run build` | Create a production build. |
| `npm start` | Serve the production build. |
| `npm run lint` | Run ESLint. |

Before opening a pull request, run:

```bash
npm run lint
npm run build
```

## Deployment

The project can be deployed to a Next.js-compatible platform such as Vercel:

1. Import the repository into the hosting provider.
2. Configure `MONGODB_URI` in the production environment.
3. Configure `NEXT_PUBLIC_HOST` with the deployed URL, such as `https://links.example.com`.
4. Add the deployment platform's outbound IP ranges to MongoDB Atlas if your database network policy requires an allowlist.
5. Deploy and verify both link creation and redirection.

Do not use `http://localhost:3000` as `NEXT_PUBLIC_HOST` in production.

## Current limitations

- There is no authentication or user-specific link ownership.
- Slugs are user-entered and are not currently validated for format or reserved paths.
- There is no link expiration, editing, deletion, or click analytics.
- A MongoDB connection is required for link creation and redirection.