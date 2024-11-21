<script>
    import classic_brew from "$lib/assets/Coffees/classic_black_brew.jpg";
    import dark_roast from "$lib/assets/Coffees/dark_roast.png";
    import classic_capuccino from "$lib/assets/Coffees/classic_capuccino.jpg";
    import vanilla_capuccino from "$lib/assets/Coffees/vanilla_capuccino.jpg";
    import hazelnut_capuccino from "$lib/assets/Coffees/hazelnut_capuccino.jpg";
    import caramel_capuccino from "$lib/assets/Coffees/caramel_capuccino.jpg";
    import ice_americano from "$lib/assets/Coffees/ice_americano.jpg";
    import single_shot from "$lib/assets/Coffees/single_shot.jpg";
    import double_shot from "$lib/assets/Coffees/double_shot.jpg";
    import espresso_macchiato from "$lib/assets/Coffees/espresso_macchiato.jpg";
    import con_panna from "$lib/assets/Coffees/con_panna.jpg";
    import nutella_mocha from "$lib/assets/Coffees/nutella_mocha.jpg";
    import salt_caramel from "$lib/assets/Coffees/salt_caramel_mocha.jpg";
    import white_chocolate_mocha from "$lib/assets/Coffees/white_chocolate_mocha.jpg";
    import latte_macchiato from "$lib/assets/Coffees/latte_macchiato.jpg";
    import almond_macchiato from "$lib/assets/Coffees/almond_macchiato.jpg";
    import spanish_latte from "$lib/assets/Coffees/spanish_latte.jpg";
    import honey_flat_white from "$lib/assets/Coffees/honey_flat_white.jpg";
    import coconut_milk from "$lib/assets/Coffees/coconut_milk.jpg";
    import chocolate_affogato from "$lib/assets/Coffees/chocolate_affogato.jpg";
    import condensada from "$lib/assets/Coffees/condensada.jpg";



    const coffeeOptions = {
        "Black Coffee": [
            {
                title: "Classic Black Brew",
                img: classic_brew,
                description: "A classic cup of black coffee.",
                description2: "The Classic Black Brew is a medium roast coffee brewed to perfection, offering a smooth and full-bodied flavor profile with subtle hints of chocolate and caramel. This delightful blend is perfect for any time of day, whether you need a morning boost or a relaxing afternoon pick-me-up. Its well-balanced taste makes it a favorite among coffee lovers.",
                price: 115,
                review: "",
                ratings: "",

            },
            {
                title: "Dark Roast",
                img: dark_roast,
                description: "Notes of dark chocolate and toasted nuts.",
                description2: " For the true coffee aficionado, Dark Roast Perfection offers a powerful brew that delivers an exceptional taste experience. This dark roast coffee is characterized by its bold, smoky flavor profile, enriched with deep notes of dark chocolate and toasted nuts. Each sip is a journey through rich, robust flavors that provide the perfect kick to start your day or fuel an afternoon pick-me-up. Whether enjoyed black or with a splash of cream, this coffee is sure to satisfy those who seek depth and intensity in their cup.",
                price: 145,
                review: "",
                ratings: "",

            },
           
        ],
        "Capuccino": [
            {
                title: "Classic Capuccino",
                img: classic_capuccino,
                description: "A timeless blend of rich espresso, steamed milk, and velvety foam.",
                description2: "The Classic Cappuccino is a beloved favorite among coffee enthusiasts, known for its harmonious balance of flavors and textures. This delightful beverage starts with a rich shot of espresso, perfectly complemented by steamed milk and a thick layer of velvety milk foam. The result is a creamy, indulgent drink that provides a comforting and satisfying experience. Ideal for any time of day, the Classic Cappuccino is perfect for savoring at a café or enjoying at home.",
                price: 150,
                review: "",
                ratings: "",
            },
            {
                title: "Vanilla Bean Capuccino  ",
                img: vanilla_capuccino,
                description: "A creamy cappuccino infused with the sweet essence of vanilla bean.",
                description2: "The Vanilla Bean Cappuccino elevates the traditional cappuccino to new heights with the addition of aromatic vanilla bean syrup. This drink features a robust shot of espresso, steamed milk, and rich foam, all harmoniously blended with the sweet and fragrant notes of vanilla. Each sip offers a delightful combination of flavors, making it a perfect treat for those who enjoy a hint of sweetness in their coffee. Enjoy this luxurious beverage as a morning pick-me-up or a comforting afternoon indulgence.",
                price: 165,
                review: "",
                ratings: "",
            },
            {
                title: "Hazelnut Capuccino",
                img: hazelnut_capuccino,
                description: "A nutty cappuccino featuring rich espresso and the delightful taste of hazelnut syrup.",
                description2: "The Hazelnut Cappuccino is a delightful variation that combines the robust flavor of espresso with the warm, nutty essence of hazelnut syrup. This luxurious beverage is crafted with steamed milk and topped with frothy milk, creating a creamy texture that perfectly complements the aromatic nutty notes. The Hazelnut Cappuccino is an excellent choice for those looking for a comforting drink with a unique flavor profile. Whether enjoyed as a morning treat or an afternoon indulgence, this cappuccino is sure to please the palate.",
                price: 155,
                review: "",
                ratings: "",

            },
            {
                title: "Caramel Capuccino",
                img: caramel_capuccino,
                description: "A sweet and creamy cappuccino drizzled with rich caramel sauce.",
                description2: "Indulge in the delightful Caramel Cappuccino, a rich and creamy beverage that takes the traditional cappuccino to the next level. This drink features a robust shot of espresso, velvety steamed milk, and a luxurious layer of frothed milk, all drizzled with rich caramel sauce. The sweet, buttery notes of caramel beautifully complement the boldness of the coffee, creating a decadent treat that is both satisfying and enjoyable. Perfect for those with a sweet tooth, the Caramel Cappuccino makes for an excellent dessert coffee or an afternoon pick-me-up.",
                price: 170,
                review: "",
                ratings: "",

            }

        ],
        "Americano": [
            {
                title: "Iced Americano",
                img: ice_americano,
                description: "A refreshing cold brew of espresso and chilled water served over ice.",
                description2: "The Iced Americano is the perfect choice for warm days when you crave a rich coffee flavor without the heat. This beverage starts with a strong shot of espresso, which is then mixed with cold water and poured over a generous amount of ice. The result is a refreshing drink that maintains the bold taste of espresso while providing a cooling sensation. Ideal for those who enjoy their coffee cold and refreshing, the Iced Americano is a delightful way to stay energized during the day.",
                price: 145,
                review: "",
                ratings: "",
            }, 

        ],
        "Espresso": [
            {
                title: "Single Shot Espresso",
                img: single_shot,
                description: "A concentrated shot of rich, bold coffee with a thick crema.",
                description2: "The Single Shot Espresso is the essence of coffee in its most concentrated form. Brewed by forcing hot water through finely-ground coffee, this shot delivers an intense burst of flavor and aroma. Topped with a thick layer of crema, the Single Shot Espresso provides a velvety texture and a rich taste that showcases the unique characteristics of the coffee beans used. Perfect for a quick caffeine boost or as a base for various coffee drinks, this classic beverage is a must-try for any coffee lover.",
                price: 110,
                review: "",
                ratings: "",
            },
            {
                title: "Double Shot Espresso",
                img: double_shot,
                description: "A powerful, bold coffee experience with double the intensity.",
                description2: "The Double Shot Espresso is ideal for those who crave a stronger coffee experience. This beverage is made by brewing two shots of espresso, resulting in a concentrated cup with an intense flavor profile. The rich, full-bodied taste is complemented by a thick crema on top, ensuring a satisfying and energizing experience with each sip. Perfect for coffee aficionados who need a robust pick-me-up or as a base for lattes and cappuccinos, the Double Shot Espresso is an essential addition to any coffee menu.",
                price: 150,
                review: "",
                ratings: "",
            },
            {
                title: "Espresso Macchiato",
                img: espresso_macchiato,
                description: " A single shot of espresso topped with a dollop of foamed milk.",
                description2: "The Espresso Macchiato offers a delightful balance between strong espresso and creamy milk. This beverage begins with a rich single shot of espresso, which is then 'stained' or 'marked' with a small amount of foamed milk. The result is a bold coffee experience with a touch of creaminess, allowing the flavors of the espresso to shine through while softening the intensity just a bit. Perfect for those who want a simple yet flavorful coffee drink, the Espresso Macchiato is a classic choice for any coffee lover.",
                price: 120,
                review: "",
                ratings: "",
            },
            {
                title: "Espresso Con Panna  ",
                img: con_panna,
                description: "A shot of espresso topped with a swirl of whipped cream for indulgence.",
                description2: "The Espresso Con Panna is a decadent twist on traditional espresso, featuring a shot of rich espresso topped with a generous dollop of whipped cream. This delightful combination enhances the bold flavors of the espresso while adding a sweet, creamy texture. Each sip is a harmonious blend of robust coffee and smooth creaminess, making it a perfect choice for dessert lovers or anyone looking to indulge in a sweet coffee treat. The Espresso Con Panna is an excellent option for an afternoon pick-me-up or a special treat after a meal.",
                price: 165,
                review: "",
                ratings: "",
            }
        ],
        "Mocha": [
            {
                title: "Nutella Mocha",
                img: nutella_mocha,
                description: " A rich mocha flavored with creamy Nutella for a decadent twist.",
                description2: "The Nutella Mocha is an indulgent coffee drink that takes the classic mocha to new heights. Combining rich espresso, steamed milk, and creamy Nutella, this drink offers a delightful blend of coffee and chocolate hazelnut flavors. The result is a velvety smooth beverage that is both rich and satisfying. Often topped with whipped cream and a sprinkle of hazelnuts or cocoa powder, the Nutella Mocha is perfect for those who want a luxurious coffee experience with a unique twist. Ideal for an afternoon treat or dessert, this drink will surely delight your taste buds.",
                price: 230,
                review: "",
                ratings: "",
            },

            {
                title: "Salted Caramel Mocha",
                img: salt_caramel,
                description: "A delicious mocha with a touch of salted caramel for added sweetness.",
                description2: "The Salted Caramel Mocha is a delightful fusion of espresso, steamed milk, rich chocolate, and salted caramel syrup. This decadent drink strikes a perfect balance between sweet and salty, making it an indulgent treat for coffee lovers. Topped with whipped cream and a drizzle of caramel sauce, the Salted Caramel Mocha offers a luxurious coffee experience that is both comforting and exciting. Perfect for a cozy night in or as an afternoon pick-me-up, this drink is sure to satisfy your sweet cravings while delivering a rich coffee flavor.",
                price: 245,
                review: "",
                ratings: "",
            },
            {
                title: "White Chocolate Mocha",
                img: white_chocolate_mocha,
                description: "A sweet twist on the classic mocha with creamy white chocolate.",
                description2: "The White Chocolate Mocha is a delicious variation of the traditional mocha, featuring smooth white chocolate instead of dark chocolate. This delightful drink combines rich espresso with steamed milk and white chocolate syrup, resulting in a creamy, sweet concoction that is both indulgent and satisfying. Topped with whipped cream and a sprinkle of white chocolate shavings, the White Chocolate Mocha offers a luxurious coffee experience that is perfect for those who prefer a sweeter, creamier flavor. Ideal for a cozy coffee date or a treat during a long day, this drink is sure to please.",
                price: 260,
                review: "",
                ratings: "",
            }
        ],
        "Macchiato": [
            {
                title: "Latte Macchiato",
                img: latte_macchiato,
                description: " A layered drink of steamed milk marked with a shot of espresso.",
                description2: "The Latte Macchiato offers a beautiful visual experience with its distinct layers. It starts with steamed milk poured into a tall glass, followed by a shot of espresso poured on top, creating a striking contrast. This drink is creamier than an espresso macchiato and is ideal for those who prefer a smoother, milky coffee experience.",
                price: 195,
                review: "",
                ratings: "",
            },
            {
                title: "Almond Macchiato",
                img: almond_macchiato,
                description: "A nutty variation using almond milk and often flavored with vanilla.",
                description2: "The Almond Macchiato takes the classic macchiato to a new level with the use of almond milk, which adds a subtle nuttiness. This drink is often enhanced with vanilla syrup, creating a harmonious blend of flavors. It’s a great option for those looking for a dairy-free alternative that still offers a rich coffee experience.",
                price: 215,
                review: "",
                ratings: "",
            }
        ],
        "Café au Lait": [
            {
                title: " Spanish Café con Leche",
                img: spanish_latte,
                description: "Espresso-based coffee with equal parts steamed milk, popular in Spain.",
                description2: "Café con Leche is a staple in Spain, where it’s typically made with strong espresso and an equal amount of steamed milk. The result is a rich, full-bodied drink that’s slightly stronger than the French version. It’s often sweetened and enjoyed as a morning pick-me-up.",
                price: 170,
                review: "",
                ratings: "",

            }
        ],
        "Flat White": [
            {
                title: "Honey Flat White",
                img: honey_flat_white,
                description: "A Flat White sweetened with a hint of honey.",
                description2: "The Honey Flat White is a delightful variation that blends the traditional Flat White with a touch of natural honey. The honey adds a subtle sweetness that complements the strong espresso flavor without overpowering it. This is an excellent choice for those looking for a lightly sweetened coffee drink.",
                price: 185,
                review: "",
                ratings: "",
            },
            {
                title: "Coconut Milk Flat White",
                img: coconut_milk,
                description: " A tropical twist on Flat White using coconut milk.",
                description2: "This variation introduces coconut milk as a substitute for dairy, adding a light, tropical sweetness that pairs well with the espresso’s bold flavor. The Coconut Milk Flat White has a creamy texture and is ideal for those who enjoy the subtle flavor of coconut in their coffee.",
                price: 160,
                review: "",
                ratings: "",
            }
        ],
        "Affogato": [
            {
                title: "Chocolate Affogato",
                img: chocolate_affogato,
                description: "A chocolaty twist on affogato with chocolate ice cream or a drizzle of chocolate sauce.",
                description2: "The Chocolate Affogato adds a decadent chocolate layer to the traditional recipe. Made by pouring espresso over chocolate ice cream or adding a drizzle of chocolate sauce, this version brings a delightful chocolatey richness that complements the boldness of espresso. It’s perfect for chocolate lovers looking for a dessert coffee treat.",
                price: 175,
                review: "",
                ratings: "",

            }
        ],
        "Cortado": [
            {
                title: "Cortado Condensada",
                img: condensada,
                description: "A sweeter Cortado variation using condensed milk instead of regular steamed milk.",
                description2: " The Cortado Condensada is a delicious twist on the classic that swaps regular milk for sweetened condensed milk, adding a rich sweetness to the drink. Popular in Latin America, this version creates a creamy, dessert-like coffee with a perfect blend of strong espresso and sweet milk.",
                price: 150,
                review: "",
                ratings: "",

            }
        ]
    }

    let selectedCoffee = "Black Coffee";

    const selectCoffee = (coffees) => {
        selectedCoffee = coffees;
    }
</script>



<section>
    <!-- Buttons for Coffees -->
    <div class="buttons-area">
        <div class="inner-div1">
            {#each Object.keys(coffeeOptions) as coffees}
                <button class="coffees" on:click={() => selectCoffee(coffees)}>{coffees}</button>
            {/each}
        </div>
    </div>

    <!-- Divs for coffee options -->
    <div class="coffee-area">
        <div class="inner-div2">
            <div class="coffee-type">
                <h2 class="coffee-text">{selectedCoffee}</h2>
            </div>
            <div class="cards-container">
                {#each coffeeOptions[selectedCoffee] as coffeeItem}
                        <div class="coffee-card">
                            <h3>{coffeeItem.title}</h3>
                            <img src={coffeeItem.img} alt={coffeeItem.title} />
                            <p class="description">{coffeeItem.description}</p>
                            <a class="add-to-cart" href={`/Add_to_Cart?title=${encodeURIComponent(coffeeItem.title)}&price=${encodeURIComponent(coffeeItem.price)}&description=${encodeURIComponent(coffeeItem.description2)}&img=${encodeURIComponent(coffeeItem.img)}`}> Add to cart | P{coffeeItem.price}</a>
                        </div>
                {/each}
            </div>
        </div>
    </div>
</section>



<style>
    section {
        width: 100%;
        height: 100vh;
        /* background-color: var(--text-white); */
        display: flex;
        flex-direction: column;
        overflow: hidden; 
    }

    .buttons-area {
        height: 10%;
        margin-top: 8em;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .inner-div1 {
        justify-content: center;
        display: flex;
        gap: 1rem;
        flex-wrap: wrap;
        padding: 1rem;
    }

    .coffees {
        background: var(--primary-color);
        color: var(--text-white);
        border: none;
        border-radius: 2rem;
        padding: 0.5rem 1.5rem;
        font-size: 1.2rem;
        font-weight: bold;
        cursor: pointer;
        transition: background-color 0.3s ease, transform 0.2s ease;
    }

    .coffees:hover {
        background-color: var(--text-black);
        transform: scale(1.05);
    }

    .coffees:active {
        transform: scale(0.95);
    }

    .coffee-area {
        flex: 1;
        padding: 2rem;
        /* background-color: var(--text-white); */
        overflow: auto;
    }

    .inner-div2 {
        height: 100%;
    }

    .coffee-type {
        font-size: 1.7rem;
        color: var(--text-black);
        margin-bottom: 1.5rem;
    }

    .cards-container {
        display: grid; 
        grid-template-columns: repeat(4, 1fr); 
        gap:1rem; 
        
    }

    a{
        text-decoration: none;
    }

    .coffee-card {
        background: white;
        border-radius: 10px;
        display: flex;
        flex-direction: column;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
        padding: 1rem;
        text-align: center;
        width: 20em;
        height: auto;
        transition: transform 0.3s ease, box-shadow 0.3s ease;
        color: var(--text-black);
        margin-left: 2.8em;
        margin-bottom: 5em;

    }

    .coffee-card:hover {
        transform: scale(1.05);
        box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2);
    }

    .coffee-card h3 {
        font-size: 2rem;
        color: var(--text-black);
        margin: 0.5rem 0;
    }

    .coffee-card img {
        display: block;
        width: 80%;
        height: 55%;
        margin: 0 auto;
        border-radius: 6px;
    }

    .coffee-card p{
        font-size: 1.5rem;
        padding: 10px;
        color: var(--text-black);
        margin: 1rem 0;
    }


     .add-to-cart{
        background-color: var(--primary-color); 
        color: var(--text-white); 
        border: none;
        font-size: 1.2em;
        padding: 10px 20px;
        /* margin-top: 1em; */
        width: 80%;
        margin: 0 auto;
        border-radius: 5px;
        cursor: pointer;
        text-decoration: none;
        box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2); 
        font-weight: bold; 
     }

     .add-to-cart:hover{
        background-color: var(--text-white);
        color: var(--primary-color);
     }



           /* ========IPADPRO==========*/
    @media only screen and (min-width: 835px) and (max-width: 1030px){}



         /*==========iPAD==========*/
    @media only screen and (min-width: 700px) and (max-width: 835px){
        section{
            margin-top: 2rem;
        }
    }


    /* ======== MOBILE RESPONSIVE ======== */
    @media only screen and (max-width: 600px) {
        section{
            margin-top: 2em;
        }

        .coffees {
            font-size: 0.9rem; 
            padding: 0.4rem 1rem; 
        }

        .coffee-type {
            font-size: 1.2rem; 
        }

        .coffee-card h3 {
            font-size: 1.5rem; 
        }

        .coffee-card p{
            font-size: 1.2rem;
        }
    }
</style>

