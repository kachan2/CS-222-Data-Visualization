import { connectToDatabase } from "../server/database/database.service";

// start server
const port = process.env.PORT || 8080;
const app = require('./app');

// app.listen(port, () => {
//   console.log(`[server]: Server is running at http://localhost:${port}`)});

connectToDatabase().then(() => {
  app.listen(port, () => {
    console.log(`[server]: Server is running at http://localhost:${port}`);
  });
})
.catch(() => {
  console.error("Failed to connect to mongodb!");
  process.exit(1);
})
