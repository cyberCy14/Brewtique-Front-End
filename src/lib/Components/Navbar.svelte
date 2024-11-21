<script>
    import { isAuthenticated , fetchUser, logout} from "../../hooks/auth.js";
    import inverted_logo from "$lib/assets/backgrounds/inverted_logo.png";
    import cart from "$lib/assets/icons/cart.svg";
    import search from "$lib/assets/icons/search.svg";
    import { page } from "$app/stores";
    import { onMount } from "svelte";
    import { goto } from "$app/navigation";

    let isMenuActive = false;

    function handleLogin() {
        goto('/login');
    }

    function handleLogout(){
        logout();
    }

    onMount( () => {
        fetchUser();
    });



    const toggleMenu = () => {
        isMenuActive = !isMenuActive;  
    };

    $: isSearchPage = $page.url.pathname.startsWith('/coffee_options');
    $: isSearchPage2 = $page.url.pathname.startsWith('/Merch');

</script>  


<header>
    <nav class="container">
        <!-- Logo -->
        <div>
            <a class="logo" href="/">
                <img src={inverted_logo} alt="Brewtique Logo" class="brewtique_logo">
            </a>
        </div>

        {#if !isSearchPage && !isSearchPage2}
            <!-- Main links -->
            <div class="major-links" class:active={isMenuActive}>
                <a href="/#coffee" class="section-link">Coffee</a>
                <a href="/#shop" class="section-link">Shop</a>
                <a href="/#merch" class="section-link">Merch</a>
                <a href="/#location" class="section-link">Location</a>
                <a href="/#about" class="section-link">About Us</a>
            </div>
        {:else}
            <!-- Search area -->
            <div class="search-area">
                <input type="text" placeholder="Search..." class="search-input" />
                <img src={search} alt="search icon" class="search-icon" />
            </div>
        {/if}

        <!-- Icon buttons -->
        <div class="icons">
            <a href="/cart" class="icons">
                <img src={cart} class="cart-icon" alt="Cart icon" />
            </a>

            <!-- Profile icon -->
            {#if $isAuthenticated == true}
                <button class="log-out" on:click={handleLogout}>Log Out</button>
            {:else}
                <button class="log-in" on:click={handleLogin}>Log In</button>
            {/if}


            <!-- Hamburger button -->
            <button class="hamburger" class:active={isMenuActive} on:click={toggleMenu}>
                <span class="bar"></span>
                <span class="bar"></span>
                <span class="bar"></span>
            </button>
        </div>
    </nav>
</header>



<style>
    header {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        width: 100%;
        height: 15vh;
        z-index: 50;
        background-color: var(--primary-color);
        box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.2), -5px -5px 10px rgba(0, 0, 0, 0.2), 10px 0px 10px rgba(0, 0, 0, 0.1), 0px 10px 10px rgba(0, 0, 0, 0.1);
        padding: 0;
        margin: 0;
    }

    .container {
        display: flex;
        height: 100%;
        width: 100%;
        align-items: center;
        justify-content: space-between;
        padding: 0;
    }

    .logo {
        width: 20vw;
    }

    .brewtique_logo {
        width: 12vw;
        height: auto;
    }

    .major-links {
        display: flex;
        gap: 2rem;
    }



    .section-link {
        display: flex;
        gap: 0.5rem;
        color: var(--text-white);
        font-size: 1.5em;
    }

    .section-link:hover {
        opacity: 80%;
    }

    a {
        text-decoration: none;
    }

    .icons {
        display: flex;
        gap: 1.5em;
        margin-right: 1em;
    }

  
    .cart-icon {
        width: 2.5em;
    }

    .hamburger {
        display: none;
        cursor: pointer;
        margin-right: 12px;
    }

    .bar {
        display: block;
        width: 25px;
        height: 3px;
        margin: 6px auto;
        transition: all 0.3s ease-in-out;
        background-color: var(--text-white);
    }


    .search-area{
        display: flex;
        align-items: center;
        gap: 0.5rem;
    }

    .search-input{
        padding: 0.5rem;
        border: 1px solid var(--text-white);
        border-radius: 5rem;
        width: 40em;
        font-size: 1.3rem;
    }

    .search-input:focus{
        outline: none;
        border-color: var(--text-white);
    }

    .search-icon{
        display: flex;
        width: 2.5em;
        height: 2.5em;
        cursor: pointer;
        padding: 0.25em;
        transition: transform 0.2s ease;
    }

    .search-icon:hover{
        transform: scale(1.1);
    }


    .log-in {
    background-color: var(--primary-color); 
    color: var(--text-white);              
    font-size: 1.3em;            
    padding: 5px 5px;         
    border: none;               
    border-radius: 5px;         
    cursor: pointer;           
    transition: background-color 0.3s ease; 
    }

    .log-in:hover {
    background-color:var(--primary-color);  
    }

    .log-in:focus {
    outline: none;             
    box-shadow: 0 0 3px rgba(0, 0, 0, 0.2);  
    }

    .log-out {
    background-color: var(--primary-color); 
    color: var(--text-white);              
    font-size: 1.3em;            
    padding: 5px 5px;         
    border: none;               
    border-radius: 5px;         
    cursor: pointer;           
    transition: background-color 0.3s ease; 
    }

    .log-out:hover {
    background-color:var(--primary-color);  
    }

    .log-out:focus {
    outline: none;             
    box-shadow: 0 0 3px rgba(0, 0, 0, 0.2);  
    }



      /* ========IPAD PRO==========*/
    @media only screen and (min-width: 835px) and (max-width: 1030px){
        header{
            height: 13vh;
        }

        .brewtique_logo{
            width: 20vw;
            height: auto;
        }

        .search-area {
        display: flex;
        align-items: center;
        gap: 0.5rem;
        width: 60%; 
        margin: 0 auto; 
    }
    }


     /*==========iPAD==========*/
    @media only screen and (min-width: 700px) and (max-width: 835px){
        header{
            height: 13vh;
        }

        .brewtique_logo{
            width: 20vw;
            height: auto;
        }

        .search-area {
        display: flex;
        align-items: center;
        gap: 0.5rem;
        width: 60%; 
        margin: 0 auto; 
    }
    }


    /* ======== MOBILE RESPONSIVE ======== */
    @media only screen and (max-width: 600px) {

        header{
            height: 13vh;
        }

        .hamburger {
            display: block;
        }

        .brewtique_logo{
            width: 30vw;
        }

        .major-links {
            position: fixed;
            top: 0;
            right: -100%;
            flex-direction: column;
            background-color: rgba(0, 0, 0, 0.8);
            width: 100%;
            height: 100vh;
            justify-content: center;
            align-items: center;
            transition: right 0.3s ease;
        }

        .major-links.active {
            right: 0;
        }

        .icons{
            gap: .5em;
        }

        .bar{
            width: 1em;
        }
        .cart-icon{
            width: 2em;
        }

        .section-link {
            font-size: 1.5rem;
            font-weight: bold;
        }

        .hamburger.active .bar:nth-child(2) {
            opacity: 0;
        }

        .hamburger.active .bar:nth-child(1) {
            transform: translateY(9px) rotate(45deg);
        }

        .hamburger.active .bar:nth-child(3) {
            transform: translateY(-9px) rotate(-45deg);
        }

        .search-area {
        display: flex;
        align-items: center;
        gap: 0.5rem;
        width: 80%; 
        margin: 0 auto; 
    }

    .search-input {
        padding: 0.5rem;
        border: 1px solid var(--text-white);
        border-radius: 5rem;
        width: 100%; 
        font-size: 1.1rem; 
    }

    .search-icon {
        width: 2em; 
        height: 2em;
        cursor: pointer;
        padding: 0.25em;
        transition: transform 0.2s ease;
    }

    .search-icon:hover {
        transform: scale(1.1);
    }
    }
</style>
