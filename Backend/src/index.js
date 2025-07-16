import mangoose from "mangoose";
import app from "./app";
import config from "./config";
// creating a self invoking function (iif) that will call it self in order
// to connect to the database for the app actually starts

(async () => {
  try {
    // connecting to mangodb
    await mangoose.connect(config.MANGODB_URL);
    // displaying successful connection
    console.log("database connected");
    // checking to make sure that after connection my express app
    // can communicate with the database before listening
    app.on("error", (err) => {
      console.error("Error :", err);
      throw err;
    });
    // listening by the app
    const onListening = () => {
      console.log(`App listening onn port ${config.PORT}`);
    };
    app.listen(config.PORT, onListening);
  } catch (err) {
    console.log("Error", err);
    throw err;
  }
})();
