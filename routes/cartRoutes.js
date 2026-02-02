const express = require("express");
const Cart = require("../models/Cart");
const Product = require("../models/Product");
const auth = require("../middleware/authMiddleware");

const router = express.Router();

// POST /cart
router.post("/", auth, async (req, res) => {
  const product = await Product.findById(req.body.productId);
  if (!product) return res.status(404).json({ message: "Product not found" });

  const cartItem = new Cart({
    userId: req.user.id,
    productId: req.body.productId,
    quantity: req.body.quantity,
  });

  await cartItem.save();
  res.json(cartItem);
});


// PUT /cart/:id
router.put("/:id", auth, async (req, res) => {
  const item = await Cart.findByIdAndUpdate(
    req.params.id,
    { quantity: req.body.quantity },
    { new: true }
  );
  res.json(item);
});
module.exports = router;