<script>
    import hero_bg from "$lib/assets/backgrounds/hero_bg.jpg";
    // import { navigate } from 'svelte-routing';
</script>

<section>
    <div class="container">
        <div class="text-area">
            <p><span class="L-text">Brewtique: </span><br/> <span class="M-text">Your Dose of Delight</span> </p>
            <p class="S-text">Discover handcrafted coffee, specialty drinks, 
                and cozy vibes. Indulge in our carefully curated 
                selection of single-origin and blended coffees,
                roasted to perfection. From bold and robust to 
                smooth and delicate, we have something to suit 
                every taste.</p>
            <a class="shop-now" href="/coffees">Shop Now</a>
        </div>
    </div>
</section>

<style>
    section {
        width: 100%;
        height: 100vh;
        background-image: url("$lib/assets/backgrounds/hero_bg.jpg");
        background-size: cover; 
        background-position: center; 
        position: relative; 
        display: flex; 
        align-items: center;
    }

    .container {
        width: 60%;
        height: 100%;
        display: flex;
        padding: 1rem; 
        position: relative; 
        z-index: 1; 
    }

    .text-area {
        flex: 1;
        display: flex;
        margin-left: 100px;
        gap: 2em;
        flex-direction: column;
        justify-content: center;
        align-items: flex-start;
        color: var(--text-white);
        z-index: 2; 
    }


    .L-text {
        font-size: 5rem;
        margin-bottom: 1rem;
        font-weight: bold;
    }

    .M-text {
        font-size: 4rem;
        margin-bottom: 1rem;   
    }

    .S-text {
        font-size: 1.5rem;
        margin-bottom: 1rem;
    }

    .shop-now {
        background-color: var(--primary-color); 
        color: var(--text-white); 
        border: none;
        text-decoration: none;
        font-size: 1.2em;
        padding: 10px 20px;
        border-radius: 5px;
        cursor: pointer;
        box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2); 
        font-weight: bold;
    }

    .shop-now:hover {
        background-color: var(--text-white);
        color: var(--text-black);
    }




          /* ========IPADPRO==========*/
    @media only screen and (min-width: 835px) and (max-width: 1030px) {
        .container {
            flex-direction: column;
            justify-content: center;
            align-items: center;
        }

        .text-area {
            margin-top: -15em;
            width: 100%;
        }

    }


     /*==========iPAD==========*/
    @media only screen and (min-width: 700px) and (max-width: 835px){

        .container {
            flex-direction: column;
            justify-content: center;
            align-items: center;
        }

        .text-area {
            margin-top: -15em;
            width: 100%;
        }

        .L-text{
            font-size: 4rem;
        }

        .M-text{
            font-size: 3rem;
        }

        .S-text{
            font-size: 1.4rem;
        }
    }


    /* ======== MOBILE RESPONSIVE ======== */
    @media only screen and (max-width: 600px) {

        section{
            width: 100%;
            height: 100vh;
            background-image: url("$lib/assets/backgrounds/hero_bg3.jpg");
            background-size: cover; 
            background-position: center; 
            position: relative; 
            display: flex; 
            align-items: center;
        }


        .container {
            width: 100%;
            justify-content: center;
            align-items: center;
            margin-top: 2em;
            margin-left: -5em;
        }

        .text-area{
            gap: 0.5em;
        }

        .L-text {
            font-size: 4rem;
        }

        .M-text {
            font-size: 3rem;
        }

        .S-text {
            font-size: 1.5rem;
            line-height: 1.4;
            font-weight: 200;
            margin-bottom: 1.5rem;
        }

        .shop-now {
            padding: 10px 20px;
            font-size: 1rem;
            box-shadow: none;
        }
    }
</style>
