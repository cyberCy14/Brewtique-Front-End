<script>
    import mugs from "$lib/assets/Merch/mug.png";
    import brown_mug from "$lib/assets/Merch/brown_mug.png";
    import black_mug from "$lib/assets/Merch/black_mug.png";
    import shirt from "$lib/assets/Merch/shirt.png";
    import black_shirt from "$lib/assets/Merch/black_shirt.png";
    import beans from "$lib/assets/Merch/beans.jpg";
    import french_press from "$lib/assets/Merch/french_press.jpg";
    import dripper_set from "$lib/assets/Merch/dripper_set.jpg";
    import espresso_machine from "$lib/assets/Merch/espresso_machine.jpg";
    import coffee_grinder from "$lib/assets/Merch/coffee_grinder.jpg";
    import milk_frother from "$lib/assets/Merch/milk_frother.jpg";
    import coffee_tamper from "$lib/assets/Merch/coffee_tamper.jpg";
    import coffee_canister from "$lib/assets/Merch/coffee_canister.jpg";
    import coffee_stirrer from "$lib/assets/Merch/coffee_stirrer.jpg";
    import milk_pitcher from "$lib/assets/Merch/milk_pitcher.jpg";

   
   import { onMount } from 'svelte';

    const merchOptions = {
        "Coffee Mugs": [
            {
                title: "Classic Brown Mug",
                img: brown_mug,
                description: "Warm brown mug for a cozy coffee experience.",
                description2: "This brown ceramic coffee mug is designed with an earthy, textured finish that feels natural and inviting. The rustic style complements both modern and traditional kitchens, making it a versatile piece. It holds up to 350ml, providing ample room for coffee, tea, or hot chocolate. Dishwasher and microwave safe for convenience.",
                price: 250,
                review: "",
                ratings: "",
            },
            {
                title: "Classic White Mug",
                img: mugs,
                description: "Classic white coffee mug for your warm coffee.",
                description2: "This classic white coffee mug is crafted from durable ceramic and features a smooth, glazed finish. Its simple and timeless design makes it a perfect addition to any kitchen or office space. Holds up to 300ml of your favorite coffee or tea, ensuring a cozy and stylish drinking experience.",
                price: 250,
                review: "",
                ratings: "",
            },
            {
                title: "Classic Black Mug",
                img: black_mug,
                description: " Sleek black coffee mug with a modern look.",
                description2: "This black coffee mug features a sleek, matte exterior and a glossy interior, combining sophistication with practicality. Ideal for those who appreciate a stylish, contemporary look, this mug is perfect for everything from espresso to cappuccino. Made from high-quality ceramic, it holds up to 300ml and is both microwave and dishwasher safe.",
                price: 250,
                review: "",
                ratings: "",
            },
        ],
        "T-shirts": [
            {
                title: "White Shirt",
                img: shirt,
                description: "A perfect for casual wear with a clean, classic look..",
                description2: "This white T-shirt is made from soft, high-quality cotton, providing comfort and breathability throughout the day. Featuring the Brewtique logo on the chest, it’s ideal for coffee lovers who want to represent their favorite brand. The minimalist design pairs well with any casual outfit, making it a wardrobe staple. Available in various sizes, this T-shirt is durable, machine-washable, and designed to last.",
                price: 300,
                review: "",
                ratings: "",
            },
            {
                title: "Black Shirt",
                img: black_shirt,
                description: "A sleek black T-shirt with the Brewtique logo, perfect for a stylish, understated look.",
                description2: "This black T-shirt combines comfort and style with a modern fit and the iconic Brewtique logo on the chest. Made from premium, breathable cotton, it offers a soft feel and is perfect for both casual wear and layering. The black color and simple design make it versatile and easy to match with any wardrobe. Available in multiple sizes, it’s machine-washable and designed to keep its shape and color over time.",
                price: 300,
                review: "",
                ratings: "",
            }
        ],
        "Coffee Beans": [
            {
                title: "Premium Coffee Bean",
                img: beans,
                description: "A rich, aromatic pack of Brewtique premium coffee beans, perfect for a full-bodied brew.",
                description2: "Experience the full flavor of freshly roasted Brewtique premium coffee beans, sourced from high-altitude farms and expertly roasted to bring out a balanced, smooth taste. These beans offer notes of chocolate and nuts with a subtle hint of fruitiness, ideal for espresso or pour-over methods. Each 250g pack is sealed for freshness, ensuring a rich aroma and deep, satisfying flavor in every cup. Perfect for coffee enthusiasts who appreciate quality and craft.",
                price: 450,
                review: "",
                ratings: "",
            }
        ],
        "Brewing Equipment": [
            {
                title: "French Press",
                img: french_press,
                description: "Classic French press for a rich, full-bodied coffee experience.",
                description2: "The Brewtique French Press is a timeless brewing tool that delivers a rich, full-bodied coffee experience. Made from durable materials and featuring a sleek design, it allows coffee grounds to steep for a flavorful extraction. This press is easy to use and perfect for those who enjoy a bolder, more aromatic cup of coffee.",
                price: 850,
                review: "",
                ratings: "",
            },
            {
                title: "Pour-Over Dripper Set",
                img: dripper_set,
                description: "Ceramic pour-over dripper set for complex, flavorful coffee.",
                description2: "Brewtique’s Pour-Over Dripper Set is a ceramic brewing tool that highlights the intricate flavors of your coffee beans. The set includes a dripper, glass carafe, and filters, making it ideal for a complete, controlled brewing experience. Perfect for coffee lovers who appreciate the art of manual brewing.",
                price: 1100,
                review: "",
                ratings: "",
            },
            {
                title: "Espresso Machine",
                img: espresso_machine,
                description: "Compact espresso machine for barista-quality espresso at home.",
                description2: "The Brewtique Espresso Machine is a compact yet powerful tool that produces café-quality espresso in the comfort of your home. Complete with a steam wand for frothing milk, it’s perfect for creating lattes, cappuccinos, and more. A must-have for anyone who enjoys rich, authentic espresso.",
                price: 12500,
                review: "",
                ratings: "",
            },
            {
                title: "Coffee Grinder",
                img: coffee_grinder,
                description: "Adjustable coffee grinder for precise grind consistency.",
                description2: "Brewtique’s Coffee Grinder offers precision grinding with adjustable settings to suit any brewing style, from French press to espresso. Available in manual or electric models, this grinder brings out the best in your coffee beans, allowing for fresh, flavorful brews every time.",
                price: 2500,
                review: "",
                ratings: "",
            },
            {
                title: "Milk Frother",
                img: milk_frother,
                description: "Handheld milk frother for creamy, frothy coffee drinks.",
                description2: "The Brewtique Milk Frother is a compact and efficient tool for creating café-style froth. Perfect for cappuccinos, lattes, and more, it quickly whips up milk into a creamy, airy froth, adding a professional touch to your homemade coffee creations.",
                price: 11000,
                review: "",
                ratings: "",
            }
        ],
        "Coffee Accessories": [
            {
                title: "Coffee Tamper",
                img: coffee_tamper,
                description: "Stainless steel tamper for evenly compressed espresso grounds.",
                description2: "The Brewtique Coffee Tamper is crafted from high-quality stainless steel, designed to provide an even and consistent tamp for your espresso grounds. This tool ensures a balanced extraction, enhancing the flavor of each shot. Comfortable to hold and durable, it’s essential for any espresso lover aiming for barista-quality coffee.",
                price: 800,
                review: "",
                ratings: "",
            },
            {
                title: "Coffee Canister",
                img: coffee_canister,
                description: "Airtight canister for keeping coffee beans fresh.",
                description2: "The Brewtique Coffee Canister is designed to preserve the freshness of your coffee beans. With an airtight seal and a durable build, it protects against moisture, light, and air, keeping your beans flavorful for longer. This canister is a must-have for serious coffee enthusiasts who value peak freshness in every brew.",
                price: 950,
                review: "",
                ratings: "",
            },
            {
                title: "Coffee Stirrers",
                img: coffee_stirrer,
                description: "Stainless steel stirrers for evenly mixing coffee drinks.",
                description2: "The Brewtique Coffee Stirrers are stainless steel, reusable stirrers ideal for mixing coffee, milk, and syrups. Designed with a comfortable grip, these stirrers enhance the flavor distribution in your drink without scratching your glassware. They are durable and environmentally friendly.",
                price: 150,
                review: "",
                ratings: "",
            },
            {
                title: "Milk Pitcher",
                img: milk_pitcher,
                description: "Stainless steel pitcher for steaming and pouring milk.",
                description2: "The Brewtique Milk Pitcher is a barista-quality tool, perfect for steaming and pouring milk. Crafted from stainless steel, it’s durable, easy to clean, and has a spout designed for precise latte art. This pitcher enhances your coffee presentation, making it ideal for home baristas and professionals alike.",
                price: 600,
                review: "",
                ratings: "",
            }
        ],
    };


    // Router
    const urlPaths = {
        "coffee_mugs": "Coffee Mugs",
        "tshirts": "T-shirts",
        "coffee_beans": "Coffee Beans",
        "brewing_equipment": "Brewing Equipment",
        "coffee_accessories": "Coffee Accessories",
    };

    let selectedMerch = "Coffee Mugs"; 

        onMount(() => {
            const params = new URLSearchParams(window.location.search);
            const category = params.get('category');
            if (category && urlPaths[category]) {
                selectedMerch = urlPaths[category];
            }
        });

        const selectMerch = (merch) => {
            if (selectedMerch === merch) return;
            
            selectedMerch = merch;
            const newPath = `/Merch?category=${Object.keys(urlPaths).find(key => urlPaths[key] === merch)}`;
            window.history.pushState({}, '', newPath);
        };
</script>



<section>
    <!-- Buttons for merchs -->
    <div class="buttons-area">
        <div class="inner-div1">
            {#each Object.keys(merchOptions) as merchs}
                <button class="merchs" on:click={() => selectMerch(merchs)}>{merchs}</button>
            {/each}
        </div>
    </div>

    <!-- Divs for merch options -->
    <div class="merch-area">
        <div class="inner-div2">
            <div class="merch-type">
                <h2 class="merch-text">{selectedMerch}</h2>
            </div>
            <div class="cards-container">
                {#each merchOptions[selectedMerch] as merchItem}
                    <div class="merch-card">
                        <h3>{merchItem.title}</h3>
                        <img src={merchItem.img} alt={merchItem.title} />
                        <p class="description">{merchItem.description}</p>
                        <a class="add-to-cart" href={`/Add_to_Cart_merch?title=${encodeURIComponent(merchItem.title)}&price=${encodeURIComponent(merchItem.price)}&description=${encodeURIComponent(merchItem.description2)}&img=${encodeURIComponent(merchItem.img)}`}>
                            Add to cart | ₱{merchItem.price}
                        </a>
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
        background-color: var(--text-white);
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

    .merchs {
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

    .merchs:hover {
        background-color: var(--text-black);
        transform: scale(1.05);
    }

    .merchs:active {
        transform: scale(0.95);
    }

    .merch-area {
        flex: 1;
        padding: 2rem;
        background-color: var(--text-white);
        overflow: auto;
    }

    .inner-div2 {
        height: 100%;
    }

    .merch-type {
        font-size: 1.7rem;
        color: var(--text-black);
        margin-bottom: 1.5rem;
    }

    .cards-container {
        display: grid; 
        grid-template-columns: repeat(4, 1fr); 
        gap: 1rem; 
    }

    a {
        text-decoration: none;
    }

    .merch-card {
        border-radius: 10px;
        display: flex;
        flex-direction: column;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
        padding: 1rem;
        text-align: center;
        width: 20em;
        height: auto;
        transition: transform 0.3s ease, box-shadow 0.3s ease;
        color: var(--text-black);
        margin-left: 2.8em;
        margin-bottom: 5em;
    }

    .merch-card:hover {
        transform: scale(1.05);
        box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2);
    }

    .merch-card h3 {
        font-size: 2rem;
        color: var(--text-black);
        margin: 0.5rem 0;
    }

    .merch-card img {
        display: block;
        width: 80%;
        height: 55%;
        margin: 0 auto;
        border-radius: 6px;
    }

    .merch-card p {
        font-size: 1.5rem;
        padding: 10px;
        color: var(--text-black);
        margin: 1rem 0;
    }

    .add-to-cart {
        background-color: var(--primary-color); 
        color: var(--text-white); 
        border: none;
        font-size: 1.2em;
        padding: 10px 20px;
        width: 80%;
        margin: 0 auto;
        border-radius: 5px;
        cursor: pointer;
        text-decoration: none;
        box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2); 
        font-weight: bold; 
    }

    .add-to-cart:hover {
        background-color: var(--text-white);
        color: var(--primary-color);
    }



        /* ========IPADPRO==========*/
    @media only screen and (min-width: 835px) and (max-width: 1030px){}



    /*==========iPAD==========*/
    @media only screen and (min-width: 700px) and (max-width: 835px){}


    /* ======== MOBILE RESPONSIVE ======== */
    @media only screen and (max-width: 600px) {

        .merchs{
            font-size: 0.9rem; 
            padding: 0.4rem 1rem; 
        }

        .merch-type{
            font-size: 1.2rem; 
        }

        .merch-card h3{
            font-size: 1.5rem; 
        }

        .merch-card p{
            font-size: 1.2rem;
        }
    }

</style>
