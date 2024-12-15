<script>
    import { cartData } from "$lib/stores/cartStore";
    let cart;
  
    $: {
      $cartData;
      cart = $cartData;
      console.log(cart); 
    }
  </script>
  
  <main>
    {#if cart.title}
      <div class="cart-item">
        <!-- Product Info -->
        <div class="product-area">
          <img src={cart.img} alt="Product Image" class="product-image" />
          <div class="product-details">
            <h2 class="product-title">{cart.title}</h2>
            <p class="product-description">{cart.description}</p>
            <div class="product-variations">
              <span class="variation-label">Variations:</span>
              <span class="variation-value">{cart.cup_size}</span>
              <br />
              <span class="variation-label">Quantity:</span>
              <span class="variation-value">{cart.quantity}</span>
            </div>
  
            <div class="price-info">
              <span class="original-price">₱{cart.price}</span>
              <span class="discounted-price">₱{cart.totalPrice}</span>
            </div>
          </div>
        </div>
  
        <!-- Delete Button -->
        <div class="delete-area">
          <button class="delete-btn">Delete</button>
        </div>
      </div>
    {:else}
      <h2 class="empty-cart-text">Your cart is empty.</h2>
    {/if}
  </main>
  
  <style>
    /* Cart Container */
    .cart-item {
      display: flex;
      justify-content: space-between;
      align-items: center;
      background-color: #f9f9f9;
      border: 1px solid #ddd;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
      border-radius: 8px;
      padding: 15px;
      margin: 20px auto;
      margin-top: 10em;
      max-width: 800px;
      transition: box-shadow 0.2s ease-in-out;
    }
  
    .cart-item:hover {
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    }
  
    /* Product Area */
    .product-area {
      display: flex;
      flex: 1;
      align-items: center;
    }
  
    .product-image {
      width: 100px;
      height: 100px;
      object-fit: cover;
      border-radius: 8px;
      margin-right: 20px;
      background-color: #fff;
      border: 1px solid #ddd;
    }
  
    .product-details {
      display: flex;
      flex-direction: column;
      justify-content: center;
      flex: 1;
    }
  
    .product-title {
      font-size: 1.4em;
      font-weight: bold;
      color: #333;
      margin-bottom: 8px;
    }
  
    .product-description {
      font-size: 0.95em;
      color: #666;
      margin-bottom: 10px;
    }
  
    .product-variations {
      font-size: 0.9em;
      color: #444;
      margin-bottom: 10px;
    }
  
    .variation-label {
      font-weight: 600;
      margin-right: 5px;
    }
  
    .variation-value {
      font-weight: 400;
    }
  
    .price-info {
      display: flex;
      align-items: center;
      gap: 10px;
      font-size: 1.1em;
      margin-top: 5px;
    }
  
    .original-price {
      text-decoration: line-through;
      color: #888;
    }
  
    .discounted-price {
      color: #e74c3c;
      font-weight: bold;
      font-size: 1.3em;
    }
  
    /* Delete Button */
    .delete-area {
      display: flex;
      justify-content: center;
      align-items: center;
      margin-left: 15px;
    }
  
    .delete-btn {
      background-color: #fff;
      color: #e74c3c;
      border: 1px solid #e74c3c;
      padding: 8px 12px;
      font-size: 0.95em;
      border-radius: 4px;
      cursor: pointer;
      transition: all 0.2s ease-in-out;
    }
  
    .delete-btn:hover {
      background-color: #e74c3c;
      color: #fff;
      border-color: #c0392b;
    }
  
    /* Empty Cart Message */
    .empty-cart-text {
      text-align: center;
      color: #333;
      margin-top: 10em;
      font-size: 1.5em;
    }
  </style>
  