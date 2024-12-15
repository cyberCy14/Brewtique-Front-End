<script>
    import { isAuthenticated, fetchUser, logout } from "../../hooks/auth.js";
    import inverted_logo from "$lib/assets/backgrounds/inverted_logo.png";
    import cart from "$lib/assets/icons/cart.svg";
    import profile from "$lib/assets/icons/profile.svg";
    import { page } from "$app/stores";
    import { onMount } from "svelte";
    import { goto } from "$app/navigation";

    let isMenuActive = false; 
    let isDropdownOpen = false; 


    function handleLogout() {
        logout();
    }

    const toggleMenu = () => {
        isMenuActive = !isMenuActive;
    };

    function toggleDropdown(event) {
        isDropdownOpen = !isDropdownOpen;
        event.stopPropagation(); 
    }

    function closeDropdown() {
        isDropdownOpen = false;
    }

    onMount(() => {
        fetchUser();
    });

    $: isSearchPage = $page.url.pathname.startsWith('/coffees');
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
            <div class="major-links {isMenuActive ? 'active' : ''}">
                <a href="/#coffee" class="section-link">Coffee</a>
                <a href="/#shop" class="section-link">Shop</a>
                <a href="/#merch" class="section-link">Merch</a>
                <a href="/#location" class="section-link">Location</a>
                <a href="/#about" class="section-link">About Us</a>
            </div>
        {/if}



        <!-- Icon buttons -->
        <div class="icons" on:click={closeDropdown}>
            <!-- Cart icon -->
            {#if $isAuthenticated == true}
                    <a href="/cart" class="icons">
                        <img src={cart} class="cart-icon" alt="Cart icon" />
                    </a>


                    <!-- Profile Dropdown -->
                    <div class="profile-container" 
                        on:click|stopPropagation={toggleDropdown}
                    >
                        <img src={profile} class="profile-icon" alt="Profile icon" />

                        {#if isDropdownOpen}
                            <div class="dropdown-menu">
                                <a href="/Profile" class="dropdown-item">Profile</a>

                                {#if $isAuthenticated == true}
                                    <a class="dropdown-item logout" on:click={handleLogout}>LogOut</a>
                                {:else}
                                    <a class="dropdown-item logout" on:click={handleLogout}>LogIn</a>
                                {/if}

                            </div>  
                        {/if}
                    </div>

                {:else}
                    <a  class="log-in" href="/login">Login</a>
                    <a  class="sign-up" href="/register">Signup</a>
            {/if}



           




            <!-- Hamburger button -->
            <button class="hamburger {isMenuActive ? 'active' : ''}" on:click={toggleMenu}>
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

    .profile-icon {
        width: 2em;
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

    .profile-container {
        position: relative;
    }

    .dropdown-menu {
        position: absolute;
        top: 100%;
        right: 0;
        background: white;
        border-radius: 4px;
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        padding: 20px;
        z-index: 100;
    }

    .dropdown-item {
        display: block;
        padding: 20px;
        text-decoration: none;
        font-size: 1.3em;
        color: #333;
        cursor: pointer;
    }
    .dropdown-item:hover {
        background-color: #f0f0f0;
    }



    .log-in, .sign-up{
    background-color: var(--primary-color); 
    color: var(--text-white);              
    font-size: 1.5em;            
    padding: 5px 5px;         
    border: none;               
    border-radius: 5px;         
    cursor: pointer;           
    transition: background-color 0.3s ease; 
    }

    .log-in:hover, .sign-up:hover {
    background-color:var(--primary-color);  
    }

    .log-in:focus, .sign-up:focus{
    outline: none;             
    box-shadow: 0 0 3px rgba(0, 0, 0, 0.2);  
    }

    /* .log-out {
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
    } */



      /* ========IPAD PRO==========*/
    @media only screen and (min-width: 835px) and (max-width: 1030px){
        header{
            height: 13vh;
        }

        .brewtique_logo{
            width: 20vw;
            height: auto;
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

    }
</style>
