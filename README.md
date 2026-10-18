# MANIT Mart

MANIT Mart is a student resale marketplace for the MANIT community in Bhopal. The app is being built in 10 incremental steps with the MERN stack (MongoDB, Express, React, and Node.js).

## 10-step build plan

1. **React storefront foundation** — responsive marketplace layout, sample listings, search, category filters, and saved-item interaction. *(In progress: UI foundation implemented.)*
2. **Express and Node API foundation** — create the server, health route, and development configuration.
3. **MongoDB connection and listing model** — persist listings and seed development data.
4. **Connect storefront to listings API** — load marketplace items from MongoDB through Express.
5. **Account registration and sign-in** — add student accounts and authentication.
6. **Create and manage listings** — let signed-in students publish, edit, and remove their items.
7. **Listing details and buyer contact** — add item detail views and a first contact flow.
8. **Offers and counteroffers** — support buyer-seller price negotiation.
9. **Deal tracking and responsive polish** — manage deal states and refine accessibility and mobile behavior.
10. **Production readiness** — environment configuration, validation, error handling, and deployment documentation.

## Current implementation

The current step is a React storefront foundation. Listing data is sample data held in the frontend; there is no backend, database, or account system yet. The interface includes responsive listing cards, search, category filters, and a saved-item count.

## Run the frontend

Prerequisites: Node.js and npm.

```bash
npm install
npm run dev
```

Vite prints the local development URL in the terminal. Create a production bundle with `npm run build`.

## Project structure

```text
src/
  App.jsx       Marketplace interface and interactions
  main.jsx      React entry point
  styles.css    Responsive storefront styling
index.html      Vite page entry
```

## Stack

- React for the frontend
- Node.js and Express.js planned for the API
- MongoDB planned for persistence
- Vite for local React development and builds
