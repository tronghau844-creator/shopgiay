const express = require("express");
const path = require("path");

const app = express();
const PORT = 3000;

// phục vụ tất cả file tĩnh trong thư mục Public
app.use(express.static(path.join(__dirname, "Public")));

// route mặc định cho trang chủ
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "Public", "index.html"));
});

// route cho giỏ hàng
app.get("/cart", (req, res) => {
  res.sendFile(path.join(__dirname, "Public", "cart.html"));
});

app.listen(PORT, () => {
  console.log(`Shop Giày chạy tại http://localhost:${PORT}`);
});
