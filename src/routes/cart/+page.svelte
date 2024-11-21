<script>
    import { writable } from 'svelte/store';


    // const isLoggedIn = writable(false);


</script>


<main>


    <div>
        <h2 class="empty-cart-text">YOUR CART IS EMPTY</h2>
   </div>

    <!-- {#if $isLoggedIn}
    <div>
         <h2 class="empty-cart-text">YOUR CART IS EMPTY</h2>
    </div>
    {:else}
    <div>
        <h2 class="empty-cart-text">LOGIN TO SEE CART</h2>
   </div>
   {/if} -->

</main>




<style>
    .empty-cart-text{
        text-align: center;
        color: var(--text-black);
        margin-top: 10em;
    }
</style>