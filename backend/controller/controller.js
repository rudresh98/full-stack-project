const {
  getData,
  setData,
  deleteItem,
  updateItem,
  detailItem,
} = require("../models/models");
exports.getData = async (req, res) => {
  try {
    const data = await getData();
    res.status(200).send(data);
  } catch (error) {
    res.status(500).send(error);
  }
};
exports.insertItems = async (req, res) => {
  const payload = { ...req.body };
  try {
    const data = await setData(payload);
    if (data.errors) {
      res.status(400).json(data.errors);
    }
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json(error);
  }
};

exports.deleteItem = async (req, res) => {
  const { id } = req.query;
  try {
    const data = await deleteItem(id);
    res.status(200).json(data);
  } catch (error) {
    console.error(errors.message);
    res.status(500).json(error);
  }
};
exports.updateItem = async (req, res) => {
  const payload = req.body;
  console.log(payload);
  try {
    const data = await updateItem(payload);
    res.status(200).json(data);
  } catch (error) {
    console.error(errors.message);
    res.status(500).json(error);
  }
};
exports.detailItem = async (req, res) => {
  const { id } = req.query;
  try {
    const data = await detailItem(id);
    res.status(200).json(data);
  } catch (error) {
    console.error(errors.message);
    res.status(500).json(error);
  }
};
