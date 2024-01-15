const express = require("express");
const authMiddleware = require("../middlewares/authMiddleware");
const {CreateInventory, getInventory} = require("../controllers/inventoryController");



const router = express.Router();


router.post("/create-inventory", authMiddleware, CreateInventory);
router.get("/get-inventory", authMiddleware, getInventory)




module.exports = router;