
<main>

    <!-- Sidebar -->
    <div class="container">
        <aside class="sidebar">
            <div class="menu">
                <h3>Menu</h3>
                <ul>
                    <li><a href="/Profile" class="active">My Profile</a></li>
                    <li><a href="/Profile/Order_history">Order History</a></li>
                </ul>
            </div>
        </aside>
        <slot/>
    </div>
</main>

<style>
    main {
        font-family: Arial, sans-serif;
        padding: 20px;
        max-width: 1000px;
        margin: auto;
        background-color: #fafafa;
    }

    .container {
        display: flex;
        gap: 20px;
    }

     /* Sidebar Styles */
     .sidebar {
        width: 250px;
        background-color: #f9f9f9;
        border-right: 1px solid #ddd;
        padding: 20px;
        margin-top: 8rem;
        border-radius: 8px;
        box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    }



    .menu h3 {
        margin-bottom: 15px;
        font-size: 1.2rem;
    }

    .menu ul {
        list-style: none;
        padding: 0;
    }

    .menu li {
        margin-bottom: 15px;
    }

    .menu a{
        display: block;
        text-decoration: none;
        color: #333;
        font-size: 1rem;
        background: none;
        border: none;
        cursor: pointer;
    }

    .menu a:hover{
        color: #4CAF50;
    }

    .menu a.active {
        font-weight: bold;
        color: #4CAF50;
    }

</style>