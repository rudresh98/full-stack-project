const router = require("express").Router();
const {
  getData,
  insertItems,
  deleteItem,
  updateItem,
  detailItem,
} = require("../controller/controller");
router.get("/getItems", getData);
router.post("/createItems", insertItems);
router.delete("/deleteItem", deleteItem);
router.put("/updateItem", updateItem);
router.get("/detailsItem", detailItem);
module.exports = router;
