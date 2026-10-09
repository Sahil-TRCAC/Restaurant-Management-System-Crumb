# Restaurant-Management-System-Crumb

A beginner-friendly restaurant admin dashboard built for a TYIT MERN practical. Includes menu CRUD, order creation, order status updates, dashboard statistics, search and category filters.

## Tech stack
- React + Vite + CSS
- Node.js + Express REST API
- MongoDB + Mongoose
- Axios + Lucide icons

## Requirements
Node.js 18+ and MongoDB running locally, or a MongoDB Atlas connection string.

## Run locally
1. Extract the ZIP and open the project folder in a terminal.
2. Start MongoDB locally, or create a MongoDB Atlas database.
3. Copy `server/.env.example` to `server/.env` and update `MONGO_URI` if needed.
4. Install dependencies from the project root:
   ```bash
   npm install
   npm run install:all
   ```
5. Start frontend and backend together:
   ```bash
   npm run dev
   ```
6. Open the Vite URL shown in the terminal (usually http://localhost:5173).

The API runs at http://localhost:5000. On first start it inserts sample menu items into an empty menu collection.

## API endpoints
| Method | Endpoint | Purpose |
|---|---|---|
| GET | `/api/health` | API health check |
| GET | `/api/menu` | List menu items |
| POST | `/api/menu` | Create menu item |
| PUT | `/api/menu/:id` | Update menu item |
| DELETE | `/api/menu/:id` | Delete menu item |
| GET | `/api/orders` | List orders |
| POST | `/api/orders` | Create an order; total calculated on server |
| PATCH | `/api/orders/:id` | Update order status |
| DELETE | `/api/orders/:id` | Delete an order |

## Practical demonstration checklist
1. Open Dashboard and show the statistics.
2. Add a menu item, edit its price, then delete it.
3. Open Orders, enter a customer name, select quantities and place an order.
4. Change order status from Pending to Preparing, Ready, then Completed.
5. Refresh the page to demonstrate MongoDB persistence.
6. Take screenshots of Dashboard, Menu, Add Item form, and Orders for your journal.

## Notes
- This is a local college demo project, not a production deployment. It does not include authentication or payment processing.
- Food photos are loaded from Unsplash, so internet is needed for the photos. Core application features use your local API and database.
