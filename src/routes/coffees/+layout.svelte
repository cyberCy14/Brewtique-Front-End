<script>
    import { page } from '$app/stores';

    $: coffeeType = $page.url.pathname.split('/').pop();

    console.log(coffeeType);
    let coffeeOptions = ['Affogato', 'Americano', 'Black Coffee', 'Cafe au Lait', 'Capuccino', 'Cortado', 'Espresso','Flat White', 'Macchiato', 'Mocha'];

</script>

<main>
    <div class="buttons-area">
        <div class="inner-div1">
            <a class="coffees" href="/coffees/">All</a>
            <a class="coffees" href="/coffees/affogato">Affogato</a>
            <a class="coffees" href="/coffees/americano">Americano</a>
            <a class="coffees" href="/coffees/black_coffee">Black Coffee</a>
            <a class="coffees" href="/coffees/cafe_au_lait">Cafe au Lait</a>
            <a class="coffees" href="/coffees/capuccino">Capuccino</a>
            <a class="coffees" href="/coffees/cortado">Cortado</a>
            <a class="coffees" href="/coffees/espresso">Espresso</a>
            <a class="coffees" href="/coffees/flat_white">Flat White</a>
            <a class="coffees" href="/coffees/macchiato">Macchiato</a>
            <a class="coffees" href="/coffees/mocha">Mocha</a>

        </div>
    </div>
<slot/>
</main>

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
        text-decoration: none;
    }

    .coffees:hover {
        background-color: var(--text-black);
        transform: scale(1.05);
    }

    .coffees:active {
        transform: scale(0.95);
    }
</style>