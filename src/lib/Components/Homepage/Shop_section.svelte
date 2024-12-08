<script>
    // import espresso from "$lib/assets/Shop_section/espresso-coffee-cup-color-image.png";
    // import caffe_mocha from "$lib/assets/Shop_section/caffe_mocha.jpg";
    // import cortadito from "$lib/assets/Shop_section/cortadito.jpg";
    // import frappe from "$lib/assets/Shop_section/frappe.jpg";
    // import latte_macchiato from "$lib/assets/Shop_section/latte_macchiato.jpg";
    // import decaf from "$lib/assets/Shop_section/decaf.jpg";
    // import nitro from "$lib/assets/Shop_section/nitro.png";
    // import caramel from "$lib/assets/Shop_section/caramel.png";
    // import matcha from "$lib/assets/Shop_section/matcha.jpg";

    import { onMount } from 'svelte';

    let scrollContainer;
    let coffeeItems = [];

    onMount(async () => {
        const response = await fetch('/shopApi/shopCoffees');
        coffeeItems = await response.json();
    });


    // array of coffee items
    // const coffeeItems = [
    //     {
    //         title: "Black Eye Espresso",
    //         img: espresso,
    //         description: "Brewed coffee with two shots of espresso for extra kick.",
    //         description2:"A powerhouse of caffeine, the Black Eye Espresso is perfect for those who need an extra boost to start their day. This drink combines brewed coffee with two shots of espresso, resulting in a robust and intense flavor that is sure to wake you up. The rich bitterness of the espresso complements the smoothness of the coffee, offering a well-rounded experience for true coffee lovers. Its bold profile makes it a favorite for anyone seeking that extra jolt.",
    //         price: 180,
    //         rating: "",
    //         reviews: "",
    //         link: "/Add_to_Cart",
    //     },
    //     {
    //         title: "Caffè Mocha",
    //         img: caffe_mocha,
    //         description: "Brewed coffee with chocolate and steamed milk.",
    //         description2:"The Caffè Mocha is a delicious fusion of coffee and chocolate, creating a drink that perfectly balances sweet and bitter. A shot of espresso is blended with steamed milk and rich chocolate syrup, making it a decadent treat. The creamy texture of the milk enhances the boldness of the espresso, while the chocolate adds a layer of sweetness that appeals to both coffee and dessert lovers. Topped with whipped cream, this drink feels indulgent and satisfying.",
    //         price: 170,
    //         rating: "",
    //         reviews: "",
    //         link: "/Add_to_Cart",

    //     },
    //     {
    //         title: "Cortadito",
    //         img: cortadito,
    //         description: "Cuban coffee made with espresso and condensed milk.",
    //         description2:"A traditional Cuban delight, the Cortadito offers a perfect blend of strong espresso and sweetened condensed milk. Its creamy texture and rich flavor make it a favorite among those who love a sweet but strong coffee. The bold espresso is softened by the sweetness of the condensed milk, creating a smooth, balanced drink that feels indulgent yet energizing. This small but mighty coffee packs a punch of flavor in every sip.",
    //         price: 150,
    //         rating: "",
    //         reviews: "",
    //         link: "/Add_to_Cart",

    //     },
    //     {
    //         title: "Frappe",
    //         img: frappe,
    //         description: "A cold blended coffee with sweet milk and ice.",
    //         description2:" Ideal for warm weather, the Frappe is a cold, blended coffee drink that combines espresso, milk, ice, and sweetener for a refreshing and creamy beverage. Its chilled, frothy texture makes it a popular choice for those looking for a coffee with a dessert-like quality. Whether topped with whipped cream or flavored syrups, the Frappe provides a sweet escape for coffee lovers who prefer a cooler option without sacrificing flavor.",
    //         price: 190,
    //         rating: "",
    //         reviews: "",
    //         link: "/Add_to_Cart",

    //     },
    //     {
    //         title: "Latte Macchiato",
    //         img: latte_macchiato,
    //         description: "Layered drink with steamed milk, espresso, and milk foam.",
    //         description2:" A beautifully layered drink, the Latte Macchiato offers a perfect combination of steamed milk, a shot of espresso, and a light foam topping. This drink is for those who enjoy a creamier coffee experience, as the milk takes center stage, creating a smooth and velvety texture. The espresso is 'marked' into the milk, giving the drink its name, and providing a gentle bitterness that complements the sweetness of the milk. It’s both elegant and comforting.",
    //         price: 165,
    //         rating: "",
    //         reviews: "",
    //         link: "/Add_to_Cart",

    //     },
    //     {
    //         title: "Decaf",
    //         img: decaf,
    //         description: "A coffee where caffeine has been removed.",
    //         description2:"For those who want to enjoy the full flavor of coffee without the caffeine, Decaf offers a smooth, balanced option. Made from beans that have had the caffeine removed, Decaf still provides the rich taste of coffee but without the buzz, making it perfect for late afternoons or evenings. Its mild, slightly nutty flavor ensures that even without the kick of caffeine, you’re still left with a satisfying cup of coffee.",
    //         price: 135,
    //         rating: "",
    //         reviews: "",
    //         link: "/Add_to_Cart",

    //     },
    //     {
    //         title: "Nitro Brewed",
    //         img: nitro,
    //         description: "Coffee infused with nitrogen gas for a creamy texture.",
    //         description2:"A cutting-edge coffee experience, Nitro Brewed coffee is cold brew infused with nitrogen gas, giving it a smooth and creamy texture unlike any other coffee. The nitrogen adds a rich, velvety foam, enhancing the drink’s natural sweetness and reducing the acidity typically found in regular cold brews. Served cold from a tap, this drink is both refreshing and unique, offering a new way to enjoy cold coffee with a luxurious mouthfeel.",
    //         price: 210,
    //         rating: "",
    //         reviews: "",
    //         link: "/Add_to_Cart",

    //     },
    //     {
    //         title: "Caramel Macchiato",
    //         img: caramel,
    //         description: "With vanilla syrup, milk, espresso, and caramel drizzle.",
    //         description2:"A sweet and indulgent coffee drink, the Caramel Macchiato combines layers of espresso, steamed milk, vanilla syrup, and a rich caramel drizzle. The contrasting flavors of the espresso’s bitterness and the caramel’s sweetness create a drink that is both complex and satisfying. With every sip, you get a taste of the espresso’s boldness followed by the smoothness of milk and the lingering sweetness of caramel. It’s a perfect choice for those who love dessert-like coffees.",
    //         price: 200,
    //         rating: "",
    //         reviews: "",
    //         link: "/Add_to_Cart",

    //     },
    //     {
    //         title: "Matcha",
    //         img: matcha,
    //         description: "A blend of matcha green tea and coffee for a caffeine boost.",
    //         description2:"A unique blend of flavors, Matcha combines the earthy taste of green tea with the boldness of espresso, creating a drink that’s both energizing and flavorful. The vibrant green color of the matcha is complemented by the creamy texture of the milk, offering a refreshing alternative to traditional coffee drinks. Rich in antioxidants, this drink provides a clean, smooth caffeine boost, perfect for those looking for a blend of coffee and tea in one cup.",
    //         price: 189,
    //         rating: "",
    //         reviews: "",
    //         link: "/Add_to_Cart",

    //     },
    // ];

    function scrollLeft() {
        scrollContainer.scrollBy({
            top: 0,
            left: -200, 
            behavior: 'smooth'
        });
    }

    function scrollRight() {
        scrollContainer.scrollBy({
            top: 0,
            left: 200, 
            behavior: 'smooth'
        });
    }
</script>

<!-- <main>
    <section>
        <div class="container">
            <h2 class="text">Our Best Sellers</h2>

            <div class="scroll-container">
                <button class="arrow left" on:click={scrollLeft}> ❮ </button>
                <div class="wrapper" bind:this={scrollContainer}>
                    
                    {#each coffeeItems as coffee}
                        <a href={`/Add_to_Cart?title=${encodeURIComponent (coffee.title)}&price=${encodeURIComponent (coffee.price)}&description=${encodeURIComponent(coffee.description2)}&img=${encodeURIComponent (coffee.img)}`} class="mini-container">
                            <p class="coffee-title"> {coffee.title} </p>
                            <div class="inside-mini-cont">
                                <img alt="coffees" src={coffee.img} class="img"/>
                                <p class="description"> {coffee.description} </p>
                            </div>
                        </a>
                    {/each}
                </div>
                <button class="arrow right" on:click={scrollRight}>❯</button>
            </div>
            <a class="more-btn" href="/coffee_options">See More</a>
        </div>
    </section>
</main> -->

<main>
    <section>
        <div class="container">
            <h2 class="text">Our Best Sellers</h2>

            <div class="scroll-container">
                <button class="arrow left" on:click={scrollLeft}> ❮ </button>
                <div class="wrapper" bind:this={scrollContainer}>
                    {#each coffeeItems as coffee}
                        <a href={`/Add_to_Cart?title=${encodeURIComponent(coffee.title)}&price=${encodeURIComponent(coffee.price)}&description=${encodeURIComponent(coffee.description2)}&img=${encodeURIComponent(coffee.img)}`} class="mini-container">
                            <p class="coffee-title">{coffee.title}</p>
                            <div class="inside-mini-cont">
                                <img alt="coffees" src={coffee.img} class="img" />
                                <p class="description">{coffee.description}</p>
                            </div>
                        </a>
                    {/each}
                </div>
                <button class="arrow right" on:click={scrollRight}>❯</button>
            </div>
            <a class="more-btn" href="/coffee_options">See More</a>
        </div>
    </section>
</main>


<style>
    section {
        width: 100%;
        height: 110vh;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: var(--primary-color);
    }

    .container {
        display: flex;
        flex-direction: column; 
        align-items: center;
        position: relative;
        width: 100%;
        gap: 1rem;  
    }

    .scroll-container {
        display: flex;
        align-items: center;
        position: relative;  
        width: 100%;
    }

    .wrapper {
        display: flex;
        overflow-x: auto;  
        scroll-behavior: smooth;
        flex-direction: row;
        padding: 0 3rem;  
        gap: 4.5rem;         
        width: 100%;
        justify-content: flex-start;  
        overflow-x: hidden;
    }

    .arrow {
        border: none;
        font-size: 2rem;
        cursor: pointer;
        padding: 0.5rem;
        z-index: 10;
        background: transparent;
        color: var(--text-black);
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
    }

    .arrow.left {
        left: 10px;
    }

    .arrow.right {
        right: 10px;
    }

    .arrow:hover {
        color: var(--text-white);
        backdrop-filter: blur(100px);
    }

    .mini-container {
        height: 60vh;
        width: 20vw;
        background-color: var(--text-white);
        border-radius: 10px; 
        flex-shrink: 0;    
        display: flex;  
        flex-direction: column;
        justify-content: center; 
        align-items: center;
        
    }

    .mini-container:hover {
        box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.2),
                    -5px -5px 10px rgba(0, 0, 0, 0.2),
                    10px 0px 10px rgba(0, 0, 0, 0.1),
                    0px 10px 10px rgba(0, 0, 0, 0.1);
    }

    .inside-mini-cont {
        width: 80%;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center; 
        margin: 0 auto; 
    }

    .text {
        color: var(--text-white);
        font-size: 2.8em;
        text-align: center;
        margin-top: 1em;
        margin-bottom: 0.5em;
    }

    .more-btn {
        background-color: var(--text-white); 
        color: var(--primary-color); 
        border: none;
        font-size: 1.2em;
        padding: 10px 20px;
        margin-top: 2em;
        border-radius: 5px;
        cursor: pointer;
        box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2); 
        font-weight: bold; 
    }

    .more-btn:hover {
        background-color: var(--primary-color);
        color: white;
    }

    .img {
        width: 100%;
        height: 15rem;
        max-height: 80%;
        object-fit: cover; 
    }

    a {
        text-decoration: none;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .coffee-title {
        color: var(--text-black);
        font-size: 2em;
        display: flex;
        margin-top: -20px;
        padding: 0.5em;
        font-weight: bold;
        text-align: center;
    }

    .description {
        color: var(--text-black);
        font-size: 1.5em;
        padding: 20px;
        text-align: center;
    }


    
    /*========MOBILE==========*/
     @media only screen and (max-width: 600px){
        .mini-container {
            width: 45vw;
            height: 50vh;
            margin-left: -1.5em;
        }

        .wrapper{
            gap: 2.5em;
        }


        .text {
            font-size: 2em; 
        }

        .coffee-title {
            font-size: 1.5em;
        }

        .description {
            font-size: 1em;
        }

        .more-btn{
            font-size: 1.2em;
        }
    }




 /*==========iPAD==========*/
    @media only screen and (min-width: 700px) and (max-width: 835px){
        .mini-container {
            width: 40vw; 
        }

        .text {
            font-size: 2.5em;
        }

        .coffee-title {
            font-size: 1.8em; 
        }

        .description {
            font-size: 1.2em; 
        }

        .more-btn{
            font-size: 1.2em;
        }
    }




    /* ========IPADPRO==========*/
     @media only screen and (min-width: 835px) and (max-width: 1030px){
        .mini-container {
            width: 40vw; 
        }

        .more-btn{
            font-size: 1.2em;
        }
    }
</style>
