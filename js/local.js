function addToCart(id, name, price) {
    let cart = JSON.parse(localStorage.getItem("cart")) || []; // Lấy giỏ hàng từ localStorage hoặc tạo mảng mới

    let productIndex = cart.findIndex(item => item.id === id);
    
    if (productIndex !== -1) {
        cart[productIndex].quantity += 1; // T