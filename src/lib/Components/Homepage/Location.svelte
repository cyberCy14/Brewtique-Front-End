<script>
    import location1 from "$lib/assets/backgrounds/location1.webp";
    import location2 from "$lib/assets/backgrounds/location2.webp";
    import location3 from "$lib/assets/backgrounds/location3.webp";



    let slideIndex = 0;
    const slides = [location1, location2, location3]; 

    function showNextSlide() {
        slideIndex = (slideIndex + 1) % slides.length;
    }

    const interval = setInterval(showNextSlide, 5000);

    import { onDestroy } from "svelte";
    onDestroy(() => {
        clearInterval(interval);
    });
</script>

<main id="location" >
    <section >
        <div class="container">
            <h2 class="text">Location</h2>
            <div class="slideshow-container">
                {#each slides as slide, index}
                    <div class="mySlides fade" style:display={index === slideIndex ? 'block' : 'none'}>
                        <img src={slide} alt={`Slide ${index + 1}`} />
                    </div>
                {/each}
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

    .text {
        color: var(--primary-color);
        font-size: 2.8em;
        text-align: center;
        margin-top: 4em;
        margin-bottom: 0.5em;
    }

    .slideshow-container {
        position: relative;
        max-width: 1000px; 
        margin: auto;
        overflow: hidden;
    }

    .mySlides {
        display: none;
    }

    img {
        width: 100%;
        height: 80vh;
    }

    .fade {
        animation: fade 1.5s;
    }

    @keyframes fade {
        from { opacity: .4 }
        to { opacity: 1 }
    }

    /* ========IPADPRO==========*/
    @media only screen and (min-width: 835px) and (max-width: 1030px) {}

    /*==========iPAD==========*/
    @media only screen and (min-width: 700px) and (max-width: 835px) {}

    /*========MOBILE==========*/
    @media only screen and (max-width: 600px) {}
</style>
