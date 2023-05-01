const { dataSchema } = require("../schemas/schemas");
const ObjectId = require("mongodb").ObjectId;
exports.getData = async () => {
  try {
    const data = await dataSchema.find();
    return data;
  } catch (error) {
    console.error(error.message);
    return error;
  }
};
exports.setData = async (payload) => {
  try {
    const data = await dataSchema.insertMany(payload);
    return data;
  } catch (error) {
    console.error("models", error.message);
    return error;
  }
};

exports.deleteItem = async (id) => {
  console.log(id, typeof id);
  const customId = `"${id}"`;
  console.log(customId);
  try {
    const data = await dataSchema.deleteOne({ _id: new ObjectId(id) });
    return data;
  } catch (error) {
    console.error(error.message);
    return error;
  }
};
exports.updateItem = async (payload) => {
  const id = payload.id;
  console.log(id);
  try {
    const data = await dataSchema.updateOne(
      { _id: new ObjectId(id) },
      {
        $set: {
          title: payload.title,
          description: payload.description,
          date: payload.date,
          active: payload.active,
          status: payload.status,
          lastUpdated: new Date().toISOString(),
          priority: payload.priority,
        },
      }
    );
    return data;
  } catch (error) {
    console.error(error.message);
    return error;
  }
};

exports.detailItem = async (id) => {
  try {
    const data = dataSchema.findById(new ObjectId(id));
    return data;
  } catch (error) {
    console.error(error.message);
    return error;
  }
};
