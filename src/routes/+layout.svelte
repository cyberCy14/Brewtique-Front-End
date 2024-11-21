<script>
    import "../app.css";
    import { goto } from '$app/navigation';
    import { onMount } from "svelte";
    import { isAuthenticated, fetchUser } from "../hooks/auth.js";
    import Navbar from "$lib/Components/Navbar.svelte";

    onMount(async () => {
        await fetchUser(); 
        if (!$isAuthenticated) {
            goto('/login'); 
        }
    });
</script>

<Navbar />
<slot />
