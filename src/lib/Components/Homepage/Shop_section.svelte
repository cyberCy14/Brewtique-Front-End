<script>
    import { onMount } from 'svelte';

    let scrollContainer;
    let coffeeItems = [];
    let errorMessage = '';

    onMount(async () => {
        try {
            const response = await fetch('http://localhost:8000/api/coffees', {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                }
            });

            if (!response.ok) {
                // throw new Error('Failed to fetch random coffee items.');
            }

            coffeeItems = await response.json();
        } catch (error) {
            errorMessage = 'Error fetching coffee items.';
            console.error('Error fetching coffee items:', error);
        }
    });

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

<main>
    <section>

        <div class="container">
            <h2 class="text">Our Best Sellers</h2>

            <div class="scroll-container">
                <button class="arrow left" on:click={scrollLeft}> ❮ </button>
                <div class="wrapper" bind:this={scrollContainer}>

                    {#each coffeeItems as coffee (coffee.id)}
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
            <a class="more-btn" href="/coffees">See More</a>
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
