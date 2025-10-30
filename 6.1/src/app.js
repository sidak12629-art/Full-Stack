import express from "express";
import setupApp from "./config/appConfig.js";

const app = express();

// Setup routes and middleware
setupApp(app);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
