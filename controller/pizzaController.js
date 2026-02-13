const Pizza = require("../models/Pizza");

//Get all pizzas
exports.getAllPizzas = async (req, res) => {
  try {
    const pizzas = await Pizza.find();
    res.json(pizzas);
  } catch (err) {
    res.status(500).json({ msg: "Error Fetching pizzas", error: err });
  }
};

//Add a new Pizza
exports.addPizza = async (req, res) => {
  try {
    const newPizza = new Pizza(req.body);
    const savedPizza = await newPizza.save();
    res.status(201).json(savedPizza);
  } catch (err) {
    res.status(400).json({ msg: "Error adding pizza", error: err });
  }
};

//update a pizza
exports.updatePizza = async (req, res) => {
  try {
    const updatedPizza = await Pizza.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    res.json(updatedPizza);
  } catch (err) {
    res.status(400).json({ msg: "Error updating Pizza", error: err });
  }
};

//delete a pizza
exports.deletePizza = async (req, res) => {
  try {
    await Pizza.findByIdAndDelete(req.params.id);
    res.json({ msg: "Pizza deleted successfully" });
  } catch (err) {
    res.status(500).json({ msg: "Error deleting Pizza", error: err });
  }
};
