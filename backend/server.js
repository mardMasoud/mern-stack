require("dotenv").config();
const express = require("express");
console.clear();
const app = express();
const mongoose = require("mongoose");
const workoutRoutes = require("./routes/workout.js");

app.use(express.json());
app.use("/api/workouts", workoutRoutes);

mongoose
    .connect(process.env.MONGO_URI)
    .then(() => {
        app.listen(process.env.PORT, () => {
            console.log("connected to db & listenening on port",process.env.PORT);
        });
    })
    .catch((err) => {
        console.log(err);
    });
