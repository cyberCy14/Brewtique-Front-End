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
              <!-- <span class="original-price">₱{cart.price}</span> -->
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

  main {
      font-family: 'Arial', sans-serif;
      background-color: var(--text-white);
      /* padding: 2rem; */
      display: flex;
      justify-content: center;
      align-items: center;
      min-height: 100vh;
      margin-top:-5rem;
  }

  .cart-item {
      display: flex;
      justify-content: space-between;
      align-items: flex-start;
      background-color: var(--text-white);
      border: 1px solid var(--primary-color);
      box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
      border-radius: 12px;
      padding: 20px;
      margin: 2rem 0;
      max-width: 1000px;
      width: 100%;
      transition: box-shadow 0.3s ease-in-out;
  }

  .cart-item:hover {
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  }

  .product-area {
      display: flex;
      align-items: center;
      gap: 1.5rem;
      flex: 1;
  }

  .product-image {
      width: 120px;
      height: 120px;
      object-fit: cover;
      border-radius: 8px;
      border: 2px solid var(--primary-color);
      background-color: var(--text-white);
  }

  .product-details {
      display: flex;
      flex-direction: column;
      gap: 0.5rem;
      max-width: 60%;
  }

  .product-title {
      font-size: 1.4rem;
      font-weight: bold;
      color: var(--text-black);
      margin: 0;
  }

  .product-description {
      font-size: 1rem;
      color: var(--text-black);
      opacity: 0.8;
  }

  .product-variations {
      font-size: 0.95rem;
      color: var(--text-black);
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
      font-size: 1.2rem;
      margin-top: 0.5rem;
  }

  .original-price {
      text-decoration: line-through;
      color: var(--primary-color);
      font-size: 1rem;
  }

  .discounted-price {
      color: var(--primary-color);
      font-weight: bold;
      font-size: 1.5rem;
  }

  .delete-area {
      display: flex;
      align-items: center;
      justify-content: center;
  }

  .delete-btn {
      background-color: var(--text-white);
      color: var(--primary-color);
      border: 1px solid var(--primary-color);
      padding: 10px 15px;
      font-size: 1.1rem;
      border-radius: 8px;
      cursor: pointer;
      transition: all 0.2s ease-in-out;
      text-transform: uppercase;
  }

  .delete-btn:hover {
      background-color: var(--primary-color);
      color: var(--text-white);
  }

  /* Empty Cart Message */
  .empty-cart-text {
      text-align: center;
      color: var(--text-black);
      margin-top: 5rem;
      font-size: 1.5rem;
  }
</style>
