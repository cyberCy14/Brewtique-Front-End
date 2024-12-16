<script>
    import { onMount } from 'svelte';

    let coffeeOptions = [];
    let selectedCoffeeCategory = "Capuccino"; 
    let errorMessage = '';
    let fetchURL = `http://localhost:8000/api/coffees/${selectedCoffeeCategory}`;

    console.log(fetchURL);

    onMount(async () => {
        try {

            const response = await fetch(fetchURL, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                }
            });

            if (!response.ok) {
                throw new Error('Failed to fetch coffee option items.');
            }

            const data = await response.json();

            coffeeOptions = data.reduce((acc, coffee) => {
                const { category } = coffee;
                if (!acc[category]) {
                    acc[category] = []; 
                }
                acc[category].push(coffee);
                return acc;
            }, {});

            if (!coffeeOptions[selectedCoffeeCategory]) {
                selectedCoffeeCategory = Object.keys(coffeeOptions)[0] || "Black Coffee";
            }
        } catch (error) {
            errorMessage = 'Error fetching coffee options.';
            console.error('Error fetching coffee option items:', error);
        }
    });

    const selectCoffeeCategory = (category) => {
        selectedCoffeeCategory = category;
    };
</script>

<div>
    <div class="coffee-area">
        <div class="inner-div2">
            <div class="coffee-type">
                <h2 class="coffee-text">{selectedCoffeeCategory}</h2>
            </div>
            <div class="cards-container">
                {#each coffeeOptions[selectedCoffeeCategory] || [] as coffeeItem}
                    <div class="coffee-card">
                        <h3>{coffeeItem.title}</h3>
                        <img src={coffeeItem.img} alt={coffeeItem.title} />
                        <p class="description">{coffeeItem.description}</p>
                        <a class="add-to-cart" href={`/Add_to_Cart?title=${encodeURIComponent(coffeeItem.title)}&price=${encodeURIComponent(coffeeItem.price)}&description=${encodeURIComponent(coffeeItem.description2)}&img=${encodeURIComponent(coffeeItem.img)}`}> Add to cart | ₱{coffeeItem.price}</a>
                    </div>
                {/each}
            </div>
        </div>
    </div>
</div>





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

