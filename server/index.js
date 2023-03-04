import express from "express";
import * as dotenv from "dotenv";
import cors from "cors";

import userRouter from './routes/user.routes.js';
import propertyRouter from './routes/property.routes.js';
import mongoose from "mongoose";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json({ limit: "50mb" }));

app.get("/", (req, res) => {
  res.send({ message: "Hello, world!" });
});

//routes
app.use("/api/v1/users", userRouter);
app.use("/api/v1/properties", propertyRouter);

const startServer = async () => {
  
    // connect to the database
    mongoose.set("strictQuery", true);
    const PORT = process.env.PORT || 8081;
    mongoose.connect(process.env.MONGODB_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    }).then(() => {
      app.listen(PORT, () => console.log(`Server Port: ${PORT}`));
    }).catch(error => console.log(`${error} did not connect to Mongo`));  
};

startServer();
