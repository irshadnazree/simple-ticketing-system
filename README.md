# Simple Ticketing System

## Overview

This project implements a high-performance web application using Cloudflare's edge computing platform, Hono.js, and an external database. It's designed to handle high-scale operations, capable of supporting 1,000,000+ concurrent users.

## Architecture

- **Frontend**: Remix.js (deployed on Cloudflare Pages)
- **Backend**: Cloudflare Workers with Hono.js
- **Database**: External (e.g., PostgreSQL, MySQL, or MongoDB)
- **Caching**: Cloudflare KV
- **Message Queue**: Cloudflare Pub/Sub
- **API Layer**: REST or GraphQL (via Cloudflare Workers with Hono.js)
- **Real-time Updates**: Cloudflare Durable Objects
- **CDN**: Cloudflare CDN (built-in)
- **Monitoring and Logging**: Cloudflare Analytics + custom logging

## Prerequisites

- Node.js (v14 or later)
- npm or yarn
- Cloudflare account
- Wrangler CLI (`npm install -g wrangler`)
- Access to a database service (e.g., AWS RDS, Google Cloud SQL)

## Setup

1. Clone the repository:

   ```sh
   git clone https://github.com/yourusername/your-project-name.git
   cd your-project-name
   ```

2. Install dependencies:

   ```sh
   npm install
   ```

3. Configure Wrangler:

   - Authenticate with your Cloudflare account:
     ```sh
     wrangler login
     ```
   - Update `wrangler.toml` with your account ID and project settings

4. Set up environment variables:

   - Copy `.env.example` to `.env`
   - Fill in the necessary environment variables, including database credentials

5. Set up the database:

   - Create the necessary tables and schemas (see `database/schema.sql`)

6. Deploy the Remix.js frontend to Cloudflare Pages:
   - Follow the Cloudflare Pages deployment guide in the `frontend/README.md`

## Development

1. Run the Worker locally:

   ```sh
   wrangler dev
   ```

2. Run the Remix.js frontend locally:
   ```sh
   cd frontend
   npm run dev
   ```

This will start the app in development mode. Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

## Deployment

1. Deploy the Worker:

   ```sh
   wrangler publish
   ```

2. Deploy frontend changes to Cloudflare Pages:
   - Commit and push changes to the main branch
   - Cloudflare Pages will automatically deploy the new version

## Project Structure

- `app/components/SeatingLayout.tsx`: Main component for the seating layout
- `app/components/SeatButton.tsx`: Individual seat component
- `app/lib/utils.ts`: Utility functions
- `app/tailwind.css`: Custom Tailwind CSS styles
- `tailwind.config.ts`: Tailwind configuration
- `wrangler.toml`: Cloudflare Workers configuration
- `src/`: Contains the Hono.js backend code
- `frontend/`: Contains the Remix.js frontend code

## Monitoring and Logging

- Access Cloudflare Analytics for high-level metrics
- Custom logs are available in the Cloudflare dashboard under the Workers section
