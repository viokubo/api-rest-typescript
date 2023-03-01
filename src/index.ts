import express from "express";
import "express-async-errors";
import { AppDataSource } from "./data-source";
import { errorMiddleware } from "./middlewares/error";
import routes from "./routes";

AppDataSource.initialize().then(() => {
  const app = express();

  app.use(express.json());
  app.use(routes);

  app.use(errorMiddleware);
  return app.listen(3000);
});
