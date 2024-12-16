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
    let editedInfo = { ...personalInfo };
  
    const startEditing = (field) => {
      editingField = field;
    };
  
    const saveChanges = () => {
      personalInfo = { ...editedInfo };
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
  
    <!-- Full Name Box -->
    <div class="info-box">
      <label for="fullName">Full Name</label>
      {#if editingField === 'fullName'}
        <input id="fullName" type="text" bind:value={editedInfo.fullName} />
      {:else}
        <span>{personalInfo.name}</span>
        <button on:click={() => startEditing('fullName')}>Edit</button>
      {/if}
    </div>
  
    <!-- Email Box -->
    <div class="info-box">
      <label for="email">Email Address</label>
      {#if editingField === 'email'}
        <input id="email" type="email" bind:value={editedInfo.email} />
      {:else}
        <span>{personalInfo.email}</span>
        <button on:click={() => startEditing('email')}>Edit</button>
      {/if}
    </div>
  
    <!-- Phone Number Box -->
    <div class="info-box">
      <label for="phone_number">Phone Number</label>
      {#if editingField === 'phone_number'}
        <input id="phone_number" type="text" bind:value={editedInfo.phone_number} />
      {:else}
        <span>{personalInfo.phone_number}</span>
        <button on:click={() => startEditing('phone_number')}>Edit</button>
      {/if}
    </div>
  
    <!-- Address Box -->
    <div class="info-box">
      <label for="address">Home Address</label>
      {#if editingField === 'address'}
        <input id="address" type="text" bind:value={editedInfo.address} />
      {:else}
        <span>{personalInfo.address}</span>
        <button on:click={() => startEditing('address')}>Edit</button>
      {/if}
    </div>
  
    {#if editingField}
      <div class="action-buttons">
        <button class="save-btn" on:click={saveChanges}>Save Changes</button>
        <button class="cancel-btn" on:click={() => (editingField = null)}>Cancel</button>
      </div>
    {/if}
  </section>
  





  <style>
    .profile-info {
      flex: 1;
      background-color: #FEFAF6; /* Soft White */
      padding: 25px;
      border-radius: 12px;
      /* margin-top: 20em; */
      box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
      max-width: 600px;
      margin: 2rem auto 2rem;
    }
  
    h2 {
      text-align: center;
      margin-bottom: 1.5rem;
      color: #493628; /* Text Black */
      font-size: 1.8rem;
      font-weight: 600;
    }
  
    .info-box {
      display: flex;
      flex-direction: column;
      margin-bottom: 15px;
      padding: 15px;
      background-color: #fff;
      border: 1px solid #ddd;
      border-radius: 8px;
      transition: all 0.3s ease-in-out;
    }
  
    .info-box:hover {
      border-color: #6F4E37; /* Primary Color */
      box-shadow: 0 2px 8px rgba(111, 78, 55, 0.2);
    }
  
    label {
      font-weight: bold;
      color: #493628; /* Text Black */
      margin-bottom: 5px;
    }
  
    span {
      display: block;
      font-size: 1rem;
      color: #6F4E37; /* Primary Color */
      padding: 5px 0;
    }
  
    input {
      width: 100%;
      padding: 8px;
      border: 1px solid #ccc;
      border-radius: 4px;
      outline: none;
      font-size: 1rem;
    }
  
    input:focus {
      border-color: #6F4E37; /* Primary */
      box-shadow: 0 0 5px rgba(111, 78, 55, 0.3);
    }
  
    button {
      background-color: transparent;
      color: #6F4E37;
      border: none;
      cursor: pointer;
      text-decoration: underline;
      font-size: 0.9rem;
      margin-top: 5px;
    }
  
    button:hover {
      color: #493628; /* Slightly darker */
    }
  
    .action-buttons {
      display: flex;
      justify-content: space-between;
      margin-top: 20px;
    }
  
    .save-btn {
      background-color: #6F4E37;
      color: #FEFAF6;
      border: none;
      padding: 8px 16px;
      border-radius: 6px;
      cursor: pointer;
      font-size: 1rem;
      font-weight: 500;
      transition: all 0.3s ease-in-out;
    }
  
    .save-btn:hover {
      background-color: #493628;
    }
  
    .cancel-btn {
      background-color: #ddd;
      color: #493628;
      padding: 8px 16px;
      border: none;
      border-radius: 6px;
      cursor: pointer;
      font-size: 1rem;
      font-weight: 500;
      transition: all 0.3s ease-in-out;
    }
  
    .cancel-btn:hover {
      background-color: #ccc;
    }
  </style>
  