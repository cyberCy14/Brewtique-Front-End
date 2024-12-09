<script>

    import mugs from "$lib/assets/Merch/mug.png";
    import shirt from "$lib/assets/Merch/shirt.png";
    import beans from "$lib/assets/Merch/beans.jpg";
    import equipment from "$lib/assets/Merch/equipment2.png";
    import accessories from "$lib/assets/Merch/accessories.jpg";
    
        const merchItems = [
            { 
                category: 'Coffee Mugs', 
                img: mugs, 
                link: '/Merch?category=coffee_mugs' 
            },
            {   category: 'T-shirts', 
                img: shirt, 
                link: '/Merch?category=tshirts' 
            },
            {   category: 'Coffee Beans', 
                img: beans, 
                link: '/Merch?category=coffee_beans' 
            },
            {   category: 'Brewing Equipment', 
                img: equipment, 
                link: '/Merch?category=brewing_equipment' 
            },
            {   category: 'Coffee Accessories', 
                img: accessories, 
                link: '/Merch?category=coffee_accessories' 
            }
        ];
    
    </script>
    
    <main>
        <div class="merch-wrapper"> 
            <section>
                <div class="container">
                    <h2 class="text">Shop by Merch</h2>
    
                    <!-- Single Card to display all items -->
                    <div class="card-container">
                        {#each merchItems as item}
                            <a href={item.link} class="mini-container">
                                <p>{item.category}</p>
                                <img src={item.img} alt={item.category}>
                            </a>
                        {/each}
                    </div>
                </div>  
            </section>
        </div>
    </main>
    
    <style>
           section {
            width: 100%;
            height: auto;
            justify-content: center;
            margin-bottom: 15em;
            align-items: center;
        }
    
        .merch-wrapper {
            padding: 2rem; 
            background-color: #f8f8f8; 
        }
    
        .container {
            width: 100%;
            display: flex;
            flex-direction: column;
            gap: 2rem; 
            justify-content: center;
            align-items: center;
        }
    
        .card-container {
            display: flex;
            flex-wrap: wrap;
            gap: 2em; 
            width: 100%;
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
        @media only screen and (min-width: 835px) and (max-width: 1030px) {
            .mini-container {
                width: 30%; 
            }
        }
    
        /*==========iPAD==========*/
        @media only screen and (min-width: 700px) and (max-width: 835px) {
            .card-container {
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
            .card-container {
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
    