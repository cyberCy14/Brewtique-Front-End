<script>
    import { onMount } from 'svelte';
    import { writable } from 'svelte/store';

    // Form data store
    let formData = writable({
        title: '',
        img: '',
        category: '',
        description: '',
        description2: '',
        price: '',
        link: ''
    });

    // Error and success messages
    let successMessage = '';
    let errorMessage = '';

    // Submit function
    const addCoffee = async () => {
        errorMessage = '';
        successMessage = '';
        
        // Get form data from the store
        const data = {};
        formData.subscribe(values => Object.assign(data, values))();

        try {
            const res = await fetch('http://localhost:8000/api/coffees', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            });

            if (res.ok) {
                const response = await res.json();
                successMessage = response.message || 'Coffee added successfully!';
                formData.set({
                    title: '',
                    img: '',
                    category: '',
                    description: '',
                    description2: '',
                    price: '',
                    link: ''
                });
            } else {
                const errorResponse = await res.json();
                errorMessage = errorResponse.error || 'Failed to add coffee.';
            }
        } catch (error) {
            errorMessage = error.message || 'Something went wrong. Please try again.';
        }
    };
</script>

<main>
    <h1>Add a New Coffee</h1>

    <!-- Success Message -->
    {#if successMessage}
        <p class="success">{successMessage}</p>
    {/if}

    <!-- Error Message -->
    {#if errorMessage}
        <p class="error">{errorMessage}</p>
    {/if}

    <!-- Coffee Form -->
    <form on:submit|preventDefault={addCoffee}>
        <div>
            <label for="title">Title</label>
            <input type="text" id="title" bind:value={$formData.title} required />
        </div>

        <div>
            <label for="img">Image URL</label>
            <input type="text" id="img" bind:value={$formData.img} required />
        </div>

        <div>
            <label for="category">Category</label>
            <input type="text" id="category" bind:value={$formData.category} required />
        </div>

        <div>
            <label for="description">Description</label>
            <textarea id="description" bind:value={$formData.description} required></textarea>
        </div>

        <div>
            <label for="description2">Description 2</label>
            <textarea id="description2" bind:value={$formData.description2}></textarea>
        </div>

        <div>
            <label for="price">Price</label>
            <input type="number" id="price" bind:value={$formData.price} min="0" required />
        </div>

        <div>
            <label for="link">Link</label>
            <input type="text" id="link" bind:value={$formData.link} />
        </div>

        <button type="submit">Add Coffee</button>
    </form>
</main>

<style>
  main {
    max-width: 600px;
    margin: auto;
    margin-top: 10rem;
    font-family: Arial, sans-serif;
}

form div {
    margin-bottom: 1rem;
}

label {
    display: block;
    margin-bottom: 0.5rem;
    font-weight: bold;
}

input, textarea, button {
    width: 100%;
    padding: 0.5rem;
    font-size: 1rem;
}

button {
    margin-top: 1rem;
}

button[disabled] {
    background-color: #ccc;
    cursor: not-allowed;
}

.button-group {
    display: flex;
    gap: 1rem;
}

button:hover:not([disabled]) {
    background-color: #45a049;
}

.success {
    color: green;
    font-weight: bold;
    margin-bottom: 1rem;
}

.error {
    color: red;
    font-weight: bold;
    margin-bottom: 1rem;
}

</style>
