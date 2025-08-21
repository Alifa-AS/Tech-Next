const express = require("express");
const cors = require("cors");
const app = express();
const port = 5000;

app.use(cors());
app.use(express.json());

const productsData = require("./products.json");

// All products
app.get("/api/products", (req, res) => {
  // Flatten products from categories
  const allProducts = productsData.categories.flatMap(c => c.products);
  res.json(allProducts);
});

// Single product by id
app.get("/api/products/:id", (req, res) => {
  const { id } = req.params;
  const allProducts = productsData.categories.flatMap(c => c.products);
  const product = allProducts.find(p => p.id == id);

  if (product) {
    res.json(product);
  } else {
    res.status(404).json({ message: "Product not found" });
  }
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
