function addToCart(name, price) {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  cart.push({name, price});
  localStorage.setItem("cart", JSON.stringify(cart));
  alert(name + " đã thêm vào giỏ!");
}

function displayCart() {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  let cartDiv = document.getElementById("cart");
  let total = 0;
  if (!cartDiv) return;
  cartDiv.innerHTML = "";
  cart.forEach((item, index) => {
    cartDiv.innerHTML += `<p>${item.name} - ${item.price} VND 
      <button onclick="removeItem(${index})">Xóa</button></p>`;
    total += item.price;
  });
  document.getElementById("total").innerText = "Tổng tiền: " + total + " VND";
}

function removeItem(index) {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  cart.splice(index, 1);
  localStorage.setItem("cart", JSON.stringify(cart));
  displayCart();
}

function checkout() {
  alert("Thanh toán thành công!");
  localStorage.removeItem("cart");
  displayCart();
}

window.onload = displayCart;