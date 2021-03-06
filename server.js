const express = require("express");
const mongoose = require("mongoose");
const routes = require("./routes");
const app = express();
const PORT = process.env.PORT || 3001;


app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

app.use(routes);


// Connect to the Mongo DB
mongoose.connect(
  process.env.MONGODB_URI ||
  'mongodb://google:4563SDFGsdfsgsdf@test-shard-00-00.iffsj.mongodb.net:27017,test-shard-00-01.iffsj.mongodb.net:27017,test-shard-00-02.iffsj.mongodb.net:27017/google?ssl=true&replicaSet=atlas-pl2ua8-shard-0&authSource=admin&retryWrites=true&w=majority',
   {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
  }
);


// Start the API server
app.listen(PORT, function() {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});
