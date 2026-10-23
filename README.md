# MANIT Mart

MANIT Mart is a student resale marketplace for the MANIT community in Bhopal, built with React, Express, and MongoDB.

## Build plan

1. **React storefront foundation** — responsive marketplace layout, sample listings, search, category filters, and saved-item interaction. *(Implemented.)*
2. **Express and Node API foundation** — API server and health route. *(Implemented.)*
3. **MongoDB connection and listing model** — Mongoose model, optional API connection, and development data seeding. *(Implemented; configure MongoDB to use it.)*
4. **Connect storefront to listings API** — load marketplace items from MongoDB through Express.
5. **Account registration and sign-in**
6. **Create and manage listings**
7. **Listing details and buyer contact**
8. **Offers and counteroffers**
9. **Deal tracking and responsive polish**
10. **Production readiness**

## Run locally

Prerequisites: Node.js, npm, and MongoDB (local or Atlas).

```bash
npm install
Copy-Item .env.example .env
```

Set `MONGODB_URI` in `.env` to your MongoDB connection string. Then start the frontend and API in separate terminals:

```bash
npm run dev
npm run dev:api
```

Seed or refresh the sample listings with:

```bash
npm run seed
```

The API health endpoint is `http://localhost:3001/api/health`; it reports whether MongoDB is connected. Vite proxies `/api` requests to the API server. Create a production frontend bundle with `npm run build`.

## Project structure

```text
src/                 React storefront and sample listing data
server/db.js         MongoDB connection helpers
server/index.js      Express API server and health route
server/models/       Mongoose models
server/seed.js       Development listing seeder
```
