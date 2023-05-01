const mongoose = require("mongoose");

const { db, dbstring, timeoutvalue, maxPoolSize } = require("../config/config");
const options = {
  autoIndex: false,
  maxPoolSize: maxPoolSize,
  socketTimeoutMS: timeoutvalue,
};
exports.connectMongoDB = async () => {
  try {
    await mongoose.connect(dbstring + db, options);
    console.log("DB CONNECTED");
  } catch (error) {
    handleError(error);
    console.error(error.message);
  }
};
