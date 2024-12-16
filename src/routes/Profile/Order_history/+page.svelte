<script>
    // Placeholder for orders data (initially empty)
    let orders = [];
</script>

<main>
    <div class="container">
        <!-- Order History Section -->
        <section class="order-history">
            <h2>Order History</h2>

            {#if orders.length > 0}
                {#each orders as order}
                    <div class="order-box">
                        <div class="order-header">
                            <h3>Order #{order.orderNumber}</h3>
                            <p>Date: {order.date}</p>
                        </div>
                        <ul class="order-items">
                            {#each order.items as item}
                                <li>
                                    <span>{item.name} x{item.quantity}</span>
                                    <span>${item.price * item.quantity}</span>
                                </li>
                            {/each}
                        </ul>
                        <div class="order-total">
                            <strong>Total: ${order.total}</strong>
                        </div>
                    </div>
                {/each}
            {:else}
                <p>No orders found.</p>
            {/if}
        </section>
    </div>
</main>

<style>
    main {
        font-family: Arial, sans-serif;
        padding: 20px;
        max-width: 1000px;
        margin: auto;
        background-color: #fafafa;
    }

    .container {
        display: flex;
        gap: 20px;
    }

    /* Order History Section */
    .order-history {
        flex: 1;
        background-color: white;
        padding: 20px;
        border-radius: 8px;
        margin-top: 1rem;
        box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    }

    h2 {
        text-align: center;
        margin-bottom: 20px;
        font-size: 1.8rem;
    }

    .order-box {
        border: 1px solid #ddd;
        border-radius: 8px;
        margin-bottom: 20px;
        padding: 15px;
        background-color: #f9f9f9;
        box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
    }

    .order-header {
        display: flex;
        justify-content: space-between;
        margin-bottom: 10px;
    }

    .order-header h3 {
        margin: 0;
        font-size: 1.2rem;
    }

    .order-header p {
        margin: 0;
        color: #666;
        font-size: 0.9rem;
    }

    .order-items {
        list-style: none;
        padding: 0;
        margin: 0;
    }

    .order-items li {
        display: flex;
        justify-content: space-between;
        border-bottom: 1px solid #eee;
        padding: 8px 0;
        font-size: 0.95rem;
    }

    .order-items li:last-child {
        border-bottom: none;
    }

    .order-total {
        text-align: right;
        margin-top: 10px;
        font-size: 1.1rem;
        color: #333;
    }

    p {
        text-align: center;
        color: #666;
        margin-top: 50px;
        font-size: 1rem;
    }
</style>
