const express = require("express");
const bodyParser = require("body-parser");
const { MongoClient } = require("mongodb");
const multer = require("multer");
const path = require("path");

const app = express();
const port = 3000;

app.use("/", express.static(__dirname + "/dist"));
app.use("/uploads", express.static(path.join(__dirname, "uploads")));
app.use(bodyParser.json());

const uri =
  "mongodb+srv://Fatima:Bwf8pGcbualnQrSF@mongodemo.irjkj.mongodb.net/?retryWrites=true&w=majority&appName=MongoDemo";
const client = new MongoClient(uri);

async function connectMongo() {
  try {
    await client.connect();
    console.log("Connected to MongoDB");
  } catch (err) {
    console.error("Error connecting to MongoDB:", err);
  }
}

connectMongo();

const storage = multer.diskStorage({
  destination: function (req, res, cb) {
    cb(null, "uploads/");
  },

  filename: function (req, res, cb) {
    cb(null, Date.now() + "-" + file.originalname);
  },
});
const upload = multer({ storage: storage });

async function createMeal(obj) {
  const db = client.db("restaurantDB");
  const collection = db.collection("meals");
  const result = await collection.insertOne(obj); // or insertMany for multiple objects at once , but insertOne for single object
  return result;
}

async function getMeals() {
  const db = client.db("restaurantDB");
  const collection = db.collection("meals");
  const result = await collection.find().toArray();
  return result;
}

async function getMealsById(id) {
  const db = client.db("restaurantDB");
  const collection = db.collection("meals");
  const result = await collection.findOne({ _id: id });
  // console.log(result);
  return result;
}

async function updateMeal(id, payload) {
  const db = client.db("restaurantDB");
  const collection = db.collection("meals");
  const result = await collection.updateOne({ _id: id }, { $set: payload });
  // console.log(result);
  return result;
}

// updateMeal("2", {profileImage: "./upLoads/scrambled-egg.png"})
// const meals = [;

//  const meals ={
//     _id: "7",
//     name: "Smooth Amala with Ewedu",
//     price: 5000,
//     description: "A comforting dish of smooth Amala served with rich and flavorful egusi soup, perfect for a satisfying dinner after a long day.",
//     category: "Lovely Dinner",
//     profileImage:"./uploads/amala.png",

//   };


 



// createMeal(meals);
// getMealsById("1");

app.post(
  "/create-meal",
  upload.single("profileImage"),
  async function (req, res) {
    const payload = req.body;
    if (req.file) {
      payload.profileImage = req.file.path;
    }

    try {
      const result = await createMeal(payload);
      res.send({ message: "Meal created", data: result });
    } catch (err) {
      res.status(500).send({ message: "Error creating meal", error: err });
    }
  }
);

app.get("/meals", async function (req, res) {
  try {
    const meals = await getMeals();
    res.send({
      message: "Meals retrieved successfully",
      data: meals,
    });
  } catch (err) {
    res.status(500).send({ message: "Error retrieving meals", error: err });
  }
});

app.put(
  "/update-meal/:id",
  upload.single("profileImage"),
  async function (req, res) {
    const id = req.params.id;
    const payload = req.body;
    if (req.file) {
      payload.profileImage = req.file.path;
    }

    try {
      const result = await updateMeal(id, payload);
      res.send({ message: "Meal updated", data: result });
    } catch (err) {
      res.status(500).send({ message: "Error updating meal", error: err });
    }
  }
);

app.get("/meals/:id", async function (req, res) {
  const id = req.params.id;
  try {
    const meal = await getMealsById(id);
    res.send({
      message: "Meal retrieved successfully",
      data: meal,
    });
  } catch (err) {
    res.status(500).send({ message: "Error retrieving meal", error: err });
  }
});

const server = app.listen(port, function () {
  console.log("Server is active on port " + port);
});

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "dist", "index.html"));
});

module.exports = { app, server };
