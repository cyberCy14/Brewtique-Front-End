import { writable } from 'svelte/store';

export const cartData = writable({
  title: "",
  description: "",
  price: 0,
  quantity: 1,
  totalPrice:0,
  cup_size: "",
  img: "",
});
