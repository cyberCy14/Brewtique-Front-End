<script>

    let selectedCategory = "";
    
    const handleCategoryChange = (event) => {
        selectedCategory = event.target.value;
    };

</script>





<section>

    <form action="/Add_product" method="POST" enctype="">
        <h2>Add New Product</h2>

        <div class="container">
            <!-- Product Name -->
            <label for="productName"> Product Name: </label>
            <input type="text" id="productName" name="productName" placeholder="Enter product name" required>

            <!-- Category (coffees or merch)-->
            <label for="category">Category:</label>
            <select id="category" name="category" bind:value={selectedCategory} on:change={handleCategoryChange} required>
                <option value="coffee_products">Coffee Products</option>
                <option value="merch_products">Merch Products</option>
            </select>

            <!-- Category (coffees)-->
             <div style:display={selectedCategory === "coffee_products" ? 'block' : 'none'}>
                <label for="coffeeProducts">Coffee Products:</label>
                <select id="coffeeProducts" name="coffeeProducts"  required>
                    <option value="black_coffee">Black Coffee</option>
                    <option value="capuccino">Capuccino</option>
                    <option value="americano">Americano</option>
                    <option value="espresso">Espresso</option>
                    <option value="mocha">Mocha</option>
                    <option value="macchiato">Macchiato</option>
                    <option value="cafe_au_lait">Café au Lait</option>
                    <option value="flat_white">Flat White</option>
                    <option value="affogato">Affogato</option>
                    <option value="cortado">Cortado</option>
                </select>
             </div>
           

            <!-- Category (merch)-->
            <div style:display={selectedCategory === "merch_products" ? 'block' : 'none'}>
                <label for="merchProducts">Merch Products:</label>
                <select id="merchProducts" name="merchProducts" required>
                    <option value="coffee_mug">Coffee Mugs</option>
                    <option value="tshirt">T-shirts</option>
                    <option value="coffee_beans">Coffee Beans</option>
                    <option value="brewing_equipment"> Brewing Equipment</option>
                    <option value="coffee_accessory">Coffee Accessories</option>
                 </select>
            </div>


            <!-- Short description -->
            <label for="shortDescription">Short Description:</label>
            <textarea name="shortDescription" id="shortDescription" placeholder="Enter a brief description" required></textarea>

            <!-- Full description -->
            <label for="fullDescription"> Full Description:</label>
            <textarea name="fullDescription" id="fullDescription" placeholder="Enter a detailed description" required></textarea>

            <!-- Price -->
            <label for="price">Price (PHP):</label>
            <input type="number" id="price" name="price" placeholder="Enter price" min="0" required>

            <!-- Quantity -->
            <label for="quantity">Quantity in stock:</label>
            <input type="number" name="quantity" id="quantity" placeholder="Enter stock quantity" min="1" required>

            <!-- Product images -->
            <label for="productImage"> Upload Product Images: </label>
            <input type="file" id="productImage" name="productImage[]" multiple accept="image/*" required>

            <!-- Submit -->
            <button type="submit"> Add Product</button>
        </div>
       
    </form>

</section>





<style>

    section{
        margin-top: 10em;
    }

    form{
        max-width: 60em;
        background-color: white;
        margin: 2rem auto;
        padding: 2rem;
        border-radius: 10px;
        box-shadow: 2px 5px 10px rgba(0, 0, 0, 0.2);
        transition: transform 0.3s;
        display: flex;  
        flex-direction: column;
        color: var(--text-black);
    }

    .container{
        padding: 5em;
    }


    h2{
        color: var(--text-black);
        text-align: center;
        font-size: 2rem;
        margin-top: 1em;
    }

    label{
        display: block;
        font-weight:bold;
        font-size: 1.5em;
        color: var(--text-black);
    }

    input[type="text"], input[type="number"], textarea, select{
        width: 100%;
        padding: 0.75rem;
        margin-top: 0.5rem;
        margin-bottom: 1.5rem;
        border: 1px solid #ddd;
        border-radius: 5px;
        font-size: 1rem;
        color: var(--text-black);
        background-color: var(--text-white);
        box-shadow: inset 0 2px 4px rgba(0, 0, 0, 0.5);
        transition: border-color 0.3s ease;
    }

    input[type="text"]:focus,
    input[type="number"]:focus,
    textarea:focus,
    select:focus {
        border-color: var(--primary-color);
        outline: none;
    }

    textarea{
        min-height: 100px;
    }

    input[type="file"] {
    display: block;
    margin-top: 0.5rem;
    font-size: 1rem;
    color: var(--primary-color);
    }


    button[type="submit"] {
        width: 100%;
        padding: 0.75rem;
        background-color: var(--primary-color);
        color: var(--text-white);
        font-size: 1.2rem;
        font-weight: bold;
        border: none;
        border-radius: 5px;
        cursor: pointer;
        transition: background-color 0.3s ease, transform 0.2s ease;
        margin-top: 1.5rem;
    }

    button[type="submit"]:hover {
        background-color: var(--text-white);
        color: var(--text-black);
    }

    ::placeholder {
    color: #aaa;
    }

    input[type="file"]::-webkit-file-upload-button {
        visibility: hidden;
    }

    input[type="file"]::before {
        content: 'Choose files';
        display: inline-block;
        background: var(--primary-color);
        color: var(--text-white);
        border: none;
        padding: 0.5rem 1rem;
        border-radius: 5px;
        cursor: pointer;
        font-weight: bold;
    }

    input[type="file"]:hover::before {
        background: var(--text-black);
    }





/* ========IPADPRO==========*/
@media only screen and (min-width: 835px) and (max-width: 1030px){}



/*==========iPAD==========*/
@media only screen and (min-width: 700px) and (max-width: 835px){}



/*========MOBILE==========*/
@media only screen and (max-width: 600px){}




</style>