const express = require("express");
const app = express();
const connectDB = require("./db/connect");
const userRouter = require("./routers/userRouter");

require("dotenv").config();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/v1", userRouter);
const start = async () => {
  try {
    await connectDB(process.env.MONGO_URL);
    console.log("database connect");
    app.listen(5000, console.log(`Server is running on port ${5000}`));
  } catch (error) {
    console.log(error);
  }
};

start().catch((error) => {
  console.log(error);
  process.exit(1);
});
