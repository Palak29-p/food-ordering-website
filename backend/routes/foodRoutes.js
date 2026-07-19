const express = require("express");

const router = express.Router();

const foods = [
  {
    id: 1,
    name: "Pizza",
    price: 299,
    category: "Fast Food"
  },
  {
    id: 2,
    name: "Burger",
    price: 149,
    category: "Fast Food"
  },
  {
    id: 3,
    name: "Pasta",
    price: 199,
    category: "Italian"
  }
];

router.get("/", (req, res) => {
  res.json(foods);
});

module.exports = router;