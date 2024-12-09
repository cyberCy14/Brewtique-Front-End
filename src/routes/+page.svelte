<script>
    import "../app.css";
    import CoffeeSection from "../lib/Components/Homepage/Coffee_section.svelte";
    import ShopSection from "../lib/Components/Homepage/Shop_section.svelte";
    import MerchSection from "../lib/Components/Homepage/Merch__section.svelte";
    import AboutUsSection from "../lib/Components/Homepage/AboutUs_section.svelte";
    import HeroSection from "../lib/Components/Homepage/Hero_section.svelte";
    import Location from "../lib/Components/Homepage/Location.svelte";
    import Footer from "../lib/Components/Footer.svelte";
    


</script>

<main>

    

    <!-- Main Section -->
    <HeroSection/>

    <!-- Coffee Section -->
    <section id="coffee">
        <CoffeeSection/>

    </section>

    <!-- Shop Section -->
    <section id="shop">
        <ShopSection/>
    </section>

    <!-- Merch Section -->
    <section id="merch">
        <MerchSection/>
    </section>

    <!-- Location Section -->
    <section id="Location">
        <Location/>
    </section>

    <!-- About Us Section -->
    <section id="about">
        <AboutUsSection/>
    </section>

    <!-- Footer -->
     <Footer/>
</main>





<style>


    main {
        width: 100%;    
        overflow-x: hidden;
        margin-top: 5vh;
    }

    section {
        overflow-y:hidden;
        color: var(--text-white);
    }



</style>



