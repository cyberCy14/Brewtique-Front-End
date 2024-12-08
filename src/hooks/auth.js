import { goto } from '$app/navigation';
import { writable } from 'svelte/store';

export const userName = writable('no-user');
export const isAuthenticated = writable('false');

export const fetchUser = async () => {
    try{

    
        if (localStorage.getItem('token') !== null) {
            isAuthenticated.set(true);
            userName.set(localStorage.getItem('username'));
            // goto('/coffee_options');
        } else {
            return;
        }

          
    } catch(error){
        console.error(error);
        isAuthenticated.set(false);
        userName.set(null);
        alert("No user logged in");
    }

}


export function logout() {
    localStorage.clear();
    isAuthenticated.set(false); 
    goto('/login');
}

