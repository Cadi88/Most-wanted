import express from "express";

const router = express.Router();

const FOODS = [
  { id: '1', name: "pizza", desc: "a tasty pizza", price: 9.99 },
  { id: '2', name: "burger", desc: "a tasty burger", price: 6.99 },
  { id: '3', name: "sushi", desc: "a tasty sushi", price: 12.99 },
  {
    id: '4',
    name: "chicken wings",
    desc: "a tasty chicken wings",
    price: 12.99,
  },
  { id: '5', name: "menudito", desc: "a tasty menudito", price: 5.99 },
];

router.get("/", (req, res, next) => {
  console.log("GET request in menu");
  res.json(FOODS);
});

router.get("/:fid", (req, res, next) => {
  const menuId = req.params.fid // menu/id
  const food = FOODS.find(m => {
    return m.id === menuId;
  })
  res.json({food});
  console.log("GET request menu");
});

export default router;
