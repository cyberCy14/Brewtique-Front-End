<script>
    import { goto } from "$app/navigation";
    import { onMount } from "svelte";
    import { page } from "$app/stores";
    import { cartData } from "$lib/stores/cartStore";

    let title = "";
    let description = "";
    let price = 0;
    let img = "";
    let cup_size = '';  
    let quantity = 1;
    let cupSize_addOns = 0;

    const cupSizes = [
        { value: 'small', label: 'Small (8 oz)' },
        { value: 'medium', label: 'Medium (12 oz)' },
        { value: 'large', label: 'Large (16 oz)' }
    ];

    function increaseQuantity() {
        quantity += 1;
    }

    function decreaseQuantity() {
        if (quantity > 1) {
            quantity -= 1;
        }
    }

    function navigateToCart() {
        goto('/cart');
    }

    function updatePrice() {
        switch (cup_size) {
            case 'small':
                cupSize_addOns = 10;  
                break;
            case 'medium':
                cupSize_addOns = 15;  
                break;
            case 'large':
                cupSize_addOns = 20;  
                break;
            default:
                cupSize_addOns = 0;  
                break;
        }
    }

    $: totalPrice = (price + cupSize_addOns) * quantity;

    onMount(() => {
        const params = new URLSearchParams($page.url.search);
        title = params.get("title") || "Unknown Coffee";
        description = params.get("description") || "No available description.";
        quantity = parseInt(params.get("quantity")) || 1;
        price = parseInt(params.get("price")) || 0;
        totalPrice = parseInt(params.get("totalPrice")) || 0;
        cup_size = params.get("cupSize") || ''; 
        img = params.get("img") || "";
    });


    updatePrice();

    $: cartData.set({
        title,
        description,
        price,
        quantity,
        cup_size,
        totalPrice,
        img,
    });
</script>

<main>
    <section>
        <!-- image section; 60% -->
        <div class="img-sec">
            <img class="img" src={img} alt="image area" />
        </div>

        <!-- text section; 40% -->
        <div class="text-sec">
            <div class="coffee-name">{title}</div>

            <!-- price -->
            <div class="price-sec">
                <span class="price">{price}</span>
            </div>

            <!-- description -->
            <div class="description">
                <p class="desc-text">{description}</p>
            </div>

            <!-- options for coffee cup sizes -->
            <div class="cup-sizes-sec">
                <p>Cup Sizes</p>
                <div class="options">
                    {#each cupSizes as { value, label }}
                        <div>
                            <input
                                type="radio"
                                id={value}
                                name="cup-size"
                                bind:group={cup_size}
                                value={value}
                                on:change={updatePrice} 
                            />
                            <label for={value}>{label}</label>
                        </div>
                    {/each}
                </div>
            </div>

            <!-- add to cart and no. of coffee buttons -->
            <div class="cart-buttons">
                <div class="quantity-sec">
                    <button on:click={decreaseQuantity}>-</button>
                    <span class="quantity">{quantity}</span>
                    <button on:click={increaseQuantity}>+</button>
                </div>

                <button class="add_to_cart" on:click={navigateToCart}>
                    Add to Cart | ₱{totalPrice}
                </button>
            </div>
        </div>
    </section>
</main>



<style>
    section {
        width: 100%;
        height: 100vh;
        background-color: var(--text-white);
        display: flex;
        flex-direction: row;
        overflow: auto;
    }

    .img-sec {
        width: 60%;
        justify-content: center;
        align-items: center;
        padding: 2em; 
        margin-top: 10em;
        text-align: center;
    }

    .img {
        width: 35em;
        max-width: 100%; 
        height: auto;
    }

    .text-sec {
        width: 40%;
        text-align: left;
        padding: 5em;
    }

    .coffee-name {
        margin-top: 2em;
        font-size: 3em;
        font-weight: bold;
        color: var(--text-black);
    }


    .price-sec {
        display: flex;
        flex-direction: row;
        margin-top: 2em;
    }

    .peso {
        width: 2.5em;
    }

    .price {
        font-size: 3em;
        color: var(--text-black);
    }

    .description {
        margin-top: 2em;
        width: 100%;
    }

    .desc-text {
        font-size: 1.5em;
        color: var(--text-black);
    }

    .cup-sizes-sec {
        margin-top: 1.5em;
        font-size: 1.5em;
        padding: 1em;
        width: 90%;
        border-radius: 10px;
        box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1); 
        background-color: var(--text-white);
    }

    .options {
        display: flex;
        gap: 3em;
        margin-top: .5em;
    }

    .cart-buttons {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-top: 1em;
        border-radius: 10px;
        background-color: var(--text-white);
        padding: 1em; 
    }

    .quantity-sec {
        display: flex;
        align-items: center;
        gap: 1em; 
        padding: 0.5em;
        border-radius: 5px;
    }

    button {
        padding: 0.5em 1em;
        font-size: 1.2em;
        cursor: pointer;
        background-color: var(--text-white);
        border: 1px solid #ccc;
        border-radius: 5px;
        color: var(--text-black);
        box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1); 
        transition: background-color 0.3s ease, transform 0.2s ease;
    }

    button:hover {
        background-color: #e0e0e0;
        transform: translateY(-2px); 
    }

    .quantity {
        font-size: 2em;
        color: var(--text-black);
        text-align: center; 
        width: 2em; 
    }

    .add_to_cart {
        width: 25em;
        background-color: var(--primary-color);
        color: var(--text-white);
        border-radius: 5px;
        font-weight: bold;
    }

    .add_to_cart:hover {
        background-color: var(--text-white);
        color: var(--text-black);
    }

    /* ========IPADPRO========== */
    @media only screen and (min-width: 835px) and (max-width: 1030px) {
        .img-sec {
            padding: 1em; 
            width: 40%;
        }

        .text-sec {
            padding: 1em;
            margin-top: 3em;
            width: 60%;
        }

        .img {
            width: 25em;
        }

        .desc-text {
            margin-top: -.5em;
            font-size: 1.3em;
        }

        .cup-sizes-sec {
            font-size: 1.3em;
            width: 85%;
        }

        .options {
            gap: 2em;
        }

        button {
            font-size: 1.5em;
        }

        .quantity {
            font-size: 1.3em;
        }
    }

    /*==========iPAD MINI==========*/
    @media only screen and (min-width: 700px) and (max-width: 835px) {
        .img-sec {
            padding: 1em; 
            width: 50%;
        }

        .text-sec {
            padding: 2em;
            width: 50%;
            margin-top: 2em;
        }

        .img {
            width: 20em;
        }

        .coffee-name {
            font-size: 2.5em;
        }

        .price {
            font-size: 2.5em;
        }

        .desc-text {
            font-size: 1.3em;
        }

        .cup-sizes-sec {
            font-size: 1.2em;
            width: 90%;
        }

        .add_to_cart {
            width: 100%; 
        }

        .quantity-sec {
            flex-direction: row;
        }

        .quantity {
            font-size: 1.5em;
            width: auto; 
        }
    }

    /*========MOBILE==========*/
    @media only screen and (max-width: 600px) {

        section{
            display: flex;
            flex-direction: column;
        }

        .img-sec {
            width: 80%;
            /* padding: 1em;  */
        }

        .text-sec {
            width: 90%;
            padding: 1em;
            margin-top: -2em;
        }

        .img {
            width: 100%; 
        }

        .coffee-name {
            font-size: 2.5em;
            justify-content: center;
        }

        .price {
            font-size: 2em;
        }

        .desc-text {
            font-size: 1.2em;
        }

        .cup-sizes-sec {
            font-size: 1.2em;
            width: 100%;
        }

        .add_to_cart {
            width: 100%; 
        }

        .quantity-sec {
            flex-direction: row; 
        }

        .quantity {
            font-size: 1.5em;
            width: auto;
        }
    }
</style>
