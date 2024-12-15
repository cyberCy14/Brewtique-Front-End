<script>
    import { on } from "svelte/events";
    import { fetchUserData } from "../../hooks/handleUser.js";
    import { onMount } from "svelte";


    
    let personalInfo = {
        name: '',
        email: '',
        address: '',
        phone_number: '',
    };

    let editingField = null;
    let editedInfo = {...personalInfo};

    const startEditing = (field) => {
        editingField = field;
    };

    const saveChanges = () => {
        personalInfo = {...editedInfo};
        editingField = null;
    };

    onMount(async () => {
        personalInfo = await fetchUserData();
        editedInfo = { ...personalInfo };
        console.log(personalInfo);

        return () => console.log('destroyed');
    });

</script>


    <!-- Profile Information -->
    <section class="profile-info">
        <h2>Personal Information</h2>

        <!-- First Name Box -->
        <div class="info-box">
            <label for="fullName">Full Name</label>
            {#if editingField === 'fullName'}
                <input id="fullName" type="text" bind:value={editedInfo.fullName} />
            {:else}
                <span>{personalInfo.name}</span>
                <button on:click={() => startEditing('fullName')}>EDIT</button>
            {/if}
    </div>

         <!-- Email Box -->
         <div class="info-box">
            <label for="email">Email Address</label>
            {#if editingField === 'email'}
                <input id="email" type="email" bind:value={editedInfo.email} />
            {:else}
                <span>{personalInfo.email}</span>
                <button on:click={() => startEditing('email')}>EDIT</button>
            {/if}
        </div>
    

    <!-- Phone Number Box -->
    <div class="info-box">
        <label for="phone_number">Phone Number</label>
        {#if editingField === 'phone_number'}
            <input id="phone_number" type="text" bind:value={editedInfo.phone_number} />
        {:else}
            <span>{personalInfo.phone_number}</span>
            <button on:click={() => startEditing('phone_number')}>EDIT</button>
        {/if}
    </div>


    <!-- Address Box -->
    <div class="info-box">
        <label for="address">Home Address</label>
        {#if editingField === 'address'}
            <input id="address" type="text" bind:value={editedInfo.address} />
        {:else}
            <span>{personalInfo.address}</span>
            <button on:click={() => startEditing('address')}>EDIT</button>
        {/if}
    </div>


    {#if editingField}
        <button on:click={saveChanges}>Save Changes</button>
    {/if}
</section>



<style>
    


    /* Profile Info Styles */
    .profile-info {
        flex: 1;
        background-color: white;
        padding: 20px;
        border-radius: 8px;
        margin-top: 8rem;
        box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    }

    h2 {
        text-align: center;
        margin-bottom: 20px;
    }

    .info-box {
        display: flex;
        flex-direction: column;
        margin-bottom: 15px;
        padding: 15px;
        background-color: #f9f9f9;
        border-radius: 8px;
        box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
    }

    label {
        font-weight: bold;
    }

    span {
        display: block;
        padding: 5px 0;
        font-size: 1rem;
    }

    input {
        width: 100%;
        padding: 8px;
        border: 1px solid #ccc;
        border-radius: 4px;
        margin-top: 5px;
    }

    button {
        background-color: #4CAF50;
        color: white;
        border: none;
        padding: 6px 12px;
        border-radius: 4px;
        cursor: pointer;
        margin-top: 5px;
    }

    button:hover {
        background-color: #45a049;
    }

    button:disabled {
        background-color: #ccc;
        cursor: not-allowed;
    }

    .info-box button {
        background-color: transparent;
        color: #4CAF50;
        border: none;
        cursor: pointer;
        text-decoration: underline;
        padding: 0;
    }

    .info-box button:hover {
        color: #45a049;
    }
</style>
