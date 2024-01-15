const inventoryModel = require("../models/inventoryModel");
const userModel = require("../models/userModel");

const CreateInventory = async (req, res) => {
  try {
    const { email, inventoryType } = req.body;
    const user = await userModel.findOne({ email });
    if (!user) {
      throw new Error("User not found");
    }
    if (inventoryType === "in" && user.role !== "donar") {
      throw new Error("You are not authorized to add inventory");
    }
    if (inventoryType === "out" && user.role !== "hospital") {
      throw new Error("You are not authorized to sell blood");
    }
    const inventory = new inventoryModel(req.body);
    await inventory.save();
    return res.status(200).send({
      success: true,
      message: "blood added successfully",
    });
  } catch (error) {
    console.log(error);
    return res.status(500).send({
      success: true,
      message: "Cannot add inventory",
      error,
    });
  }
};

const getInventory = async (req, res) => {
  try {
    const inventory = await inventoryModel.find({
      organisation: req.body.userId,
    });

    return res.status(200).send({
      success: true,
      messaage: "get all records successfully",
      inventory,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).send({
      success: false,
      message: "Cannot get inventory",
      error,
    });
  }
};

module.exports = { CreateInventory, getInventory };
