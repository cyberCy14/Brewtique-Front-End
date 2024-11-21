<script>
import star from "$lib/assets/icons/rating_star.svg";
import peso from "$lib/assets/icons/peso.svg";

import { onMount } from "svelte";


let starRating = 5;
const repeatedStar = Array(starRating).fill();
const numReviews = 100;
let price = 120.50
let title = "";
let description = "";
let img;

const totalPrice = 120.50;

const cupSizes = [
    {value: 'small', label:'Small (8 oz)'},
    {value: 'medium', label:'Medium (12 oz)'},
    {value: 'large', label:'Large (16 oz)'},
]

let selectedCup = '';
let quantity = 1; 

function increaseQuantity() {
    quantity += 1;
}

function decreaseQuantity() {
    if (quantity > 1) {
        quantity -= 1; 
    }
}



// Extracting the URL parameters fom Shop_section.svelte
onMount(() => {
    const params = new URLSearchParams(window.location.search);
    title = params.get("title") || "Unknown Coffee";
    description = params.get("description") || "No available description.";
    price = parseFloat(params.get("price")) || price;
    img = params.get("img") || " ";
});


</script>


<main>

    <section>
        <!-- image section; 60% -->
        <div class="img-sec">
            <img class="img" src= {img} alt="image">
        </div>

        <!-- text section; 40% -->
        <div class="text-sec">
            <!-- name of the coffee -->
            <div class="coffee-name"> {title} </div>

            <!-- ratings and reviews -->
            <div class="rate-review"> 
                <span class="ratings">
                    <div class="star-ratings">
                        <div>
                            {#each repeatedStar as _, index}
                            <img src={star} class="star" alt="star">
                             {/each}
                        </div>
                        <div>Ratings</div>
                    </div>
                </span> 
                <span class="reviews"> {numReviews} Reviews</span>
            </div>

            <!-- price -->
            <div class="price-sec">
                <img src={peso} class="peso" alt="peso">
                <span class="price">{price}</span>
            </div>

            <!-- description -->
            <div class="description">
                   <p class="desc-text">{description}</p>
            </div>


            <!-- add to cart and no. of coffee buttons -->
            <div class="cart-buttons">

            <div class="quantity-sec">
                <button on:click={decreaseQuantity}>-</button>
                <span class="quantity">{quantity}</span> 
                <button on:click={increaseQuantity}>+</button>
            </div>

                <button class="add_to_cart"> 
                    Add to Cart |  P
                    {totalPrice}
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

    .star {
        width: 1em;
    }

    .star-ratings {
        display: flex;
        gap: .3em;
    }

    .rate-review {
        display: flex;
        flex-direction: row;
        color: var(--text-black);
        gap: 1.5em;
        font-size: 1.2em;
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
            padding: 1em; 
        }

        .text-sec {
            width: 90%;
            padding: 1em;
        }

        .img {
            width: 100%; 
        }

        .coffee-name {
            font-size: 2.5em;
        }

        .price {
            font-size: 2em;
        }

        .desc-text {
            font-size: 1.2em;
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
