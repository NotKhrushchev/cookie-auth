const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const { MongoClient, ServerApiVersion } = require("mongodb");
const projectRouter = require("./router");

const PORT = 5001;
const DB_URL =
    "mongodb+srv://root:root@cluster0.r3i7d.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
const app = express();

app.use(cors());
app.use(express.json());
app.use(cookieParser());
app.use('/api', projectRouter);

const mongoClient = new MongoClient(DB_URL, {
    serverApi: {
        strict: true,
        version: ServerApiVersion.v1,
        deprecationErrors: true,
    },
});

const runMongo = async () => {
    try {
        await mongoClient.connect();
        await mongoClient.db("root").command({ ping: 1 });

        console.log("successfully connected to MongoDB");
    } catch (err) {
        console.log(err);
    } finally {
        await mongoClient.close();
    }
};

const start = async () => {
    try {
        await runMongo();
        app.listen(PORT, () => console.log(`server started on PORT ${PORT}`));
    } catch (err) {
        console.log(err);
    }
};

start();
