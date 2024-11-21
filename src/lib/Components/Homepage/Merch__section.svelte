<script>
    import mugs from "$lib/assets/Merch/mug.png";
    import shirt from "$lib/assets/Merch/shirt.png";
    import beans from "$lib/assets/Merch/beans.jpg";
    import equipment from "$lib/assets/Merch/equipment2.png";
    import accessories from "$lib/assets/Merch/accessories.jpg";
</script>

<main>
    <section>
        <div class="container">
            <h2 class="text">Shop by Merch</h2>

            <div class="first-half">
                <a href="/Merch?category=coffee_mugs" class="mini-container">
                    <p>Coffee Mugs</p>
                    <img src="{mugs}" alt="mugs">
                </a>
                <a href="/Merch?category=tshirts"  class="mini-container">
                    <p>T-shirts</p>
                    <img src="{shirt}" alt="shirt">
                </a>
                <a href="/Merch?category=coffee_beans" class="mini-container">
                    <p>Coffee Beans</p>
                    <img src="{beans}" alt="beans">
                </a>
            </div>

            <div class="second-half">
                <a href="/Merch?category=brewing_equipment"  class="mini-container">
                    <p>Brewing Equipment</p>
                    <img src="{equipment}" alt="equipment">
                </a>
                <a  href="/Merch?category=coffee_accessories" class="mini-container">
                    <p>Coffee Accessories</p>
                    <img src="{accessories}" alt="accessories">
                </a>
            </div>
        </div>  
    </section>
</main>

<style>
    section {
        width: 100%;
        height: auto;
        justify-content: center;
        margin-bottom: 15em;
        align-items: center;
    }

    .container {
        width: 100%;
        display: flex;
        flex-direction: column;
        gap: 2rem; 
        justify-content: center;
        align-items: center;
    }

    .mini-container {
        height: 40vh;
        width: 20%;
        background-color: white;
        border-radius: 10px; 
        display: flex;  
        flex-direction: column;
        justify-content: center; 
        align-items: center;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
        transition: transform 0.3s;
        text-decoration: none;
    }

    .mini-container:hover {
        transform: scale(1.05); 
    }

    .first-half, .second-half {
        display: flex;
        flex-direction: row;
        gap: 2em;
        width: 100%;
        justify-content: center;
        align-items: center;
    }

    .text {
        color: var(--primary-color);
        font-size: 2.8em;
        text-align: center;
        margin-top: 4em;
        margin-bottom: 0.5em;
    }

    p {
        color: var(--text-black);
        font-size: 1.5em;
        display: flex;
        margin-top: 1em;
        font-weight: bold;
        text-align: center;
    }

    img {
        justify-content: center;
        align-items: center;
        width: 70%;
        height: 70%;
        max-height: 80%;
        margin: 2em;
    }




      /* ========IPADPRO==========*/
@media only screen and (min-width: 835px) and (max-width: 1030px){
        .mini-container {
            width: 30%; 
        }
    }




  /*==========iPAD==========*/
@media only screen and (min-width: 700px) and (max-width: 835px){
        .first-half, .second-half {
            flex-direction: column; 
            gap: 6rem; 
        }

        .mini-container {
            width: 45%; 
            height: auto; 
        }

        img {
            width: 60%; 
        }

        .text {
            font-size: 2.2em; 
        }

        p {
            font-size: 1.2em; 
        }
    }




/*========MOBILE==========*/
@media only screen and (max-width: 600px) {
        .first-half, .second-half {
            flex-direction: column; 
            gap: 6rem; 
        }

        .mini-container {
            width: 80%; 
            height: auto;
        }

        img {
            width: 50%; 
        }

        .text {
            font-size: 1.8em;
        }

        p {
            font-size: 1.2em;
        }
    }
</style>
