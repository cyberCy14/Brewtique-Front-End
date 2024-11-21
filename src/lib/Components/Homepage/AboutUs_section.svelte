<script>
    import facebook from "$lib/assets/icons/facebook.svg";
    import instagram from "$lib/assets/icons/instagram.svg";
</script>

<main>
    <section>
        <div class="container">

            <div class="first-div">
                <h2 class="main-text1">BREWTIQUE</h2>
                    <div class="first-inner-div">
                            <div class="first-inner-inner-div">
                                <p class="text">OUR COFFEE SHOP</p>
                                <div  class="our-coffee-shop">
                                    <a href="/">Location</a>
                                    <a href="/">Our Story</a>
                                </div>
                            </div>


                            <div class="second-inner-inner-div">
                                <p class="text">MORE</p>
                                <div class="more">
                                    <a href="/">Contact Us</a>
                                    <a href="/">FAQs</a>
                                </div>
                            </div>
                    </div>
            </div>

            <div class="second-div">
               <h2 class="main-text2">Stay Updated!</h2> 
               <p class="text">Join the Brewtique community!</p>
               <p>Sign up for our exclusive newsletter to enjoy special offers, the latest Brewtique news, event updates, and early access to our most exciting coffee releases. Plus, get complimentary shipping on your first order when you subscribe today!</p>
               <div class="icons">
                    <a href="/">
                        <img src="{facebook}" class="facebook" alt="facebook">
                    </a>
                    <a href="/">
                        <img src="{instagram}" class="instagram" alt="instagram">
                    </a>
                </div>

            </div>
        </div>
    </section>
</main>


<style>
    section {
        width: 100%;
        height: 50vh;
        /* margin-top: 15em; */
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: var(--primary-color);
    }

    .container {
        display: flex;
        flex-direction: row; 
        align-items: center;
        padding: 5em;
        position: relative;
        width: 100%;
        gap: 30em; 
    }

    .first-div{
        margin-top: -5em;
        width: 100%;
    }

    .second-div{
        width: 100%;
    }


    a{
        text-decoration: none;
        color: var(--text-white);
        margin: 5px;
        font-size: 1.2em;
    }

    .our-coffee-shop, .more{
        display: flex;
        flex-direction: column;
    }

    .first-inner-div{
        display: flex;
        flex-direction: row;
        gap: 8em;
        justify-content: center;
    }


    .main-text1{
        font-size: 2em;
        margin-left: 45px;
    }

    .main-text2{
        font-size: 2em;
    }

    .text{
        font-size: 1.3em;
        font-weight: 500;
        padding-top: 1em;
    }

    .icons{
        display: flex;
    }

    .facebook{
        width: 1.9vw;
        margin-top: 10px ;
    }

    .instagram{
        margin-top: 6px ;
        width: 2.3vw;
    }



        /* ========IPADPRO==========*/
@media only screen and (min-width: 835px) and (max-width: 1030px){
    .second-div{
        margin-left: -20em;
    }
}



/*==========iPAD==========*/
@media only screen and (min-width: 700px) and (max-width: 835px){

    .second-div{
        margin-left: -25em;
    }
}



/*========MOBILE==========*/
@media only screen and (max-width: 600px){

    section{
        height: 60vh;
    }

    .container{
        flex-direction: column;
        align-items: flex-start;
        gap: 2em;
        margin-top: 5em;
    }
}

</style>