import { Cart } from "../model/cart"
import { CartItem } from "../model/cart-item"
import { Food } from "../model/food"

export const cartStorageService = {
  getCart,
  getDefaultCart,
  addToCart
}

const STORAGE_KEY = 'cart'

function getCart(): Promise<Cart> {
  const cart = JSON.parse(localStorage.getItem(STORAGE_KEY) || 'null') || getDefaultCart()
  return new Promise((resolve) => resolve(cart))
}

function addToCart(food: Food): Promise<Cart> {
  const cart = JSON.parse(localStorage.getItem(STORAGE_KEY) || 'null') || getDefaultCart()

  let itemToAdd = cart.items?.find((item: CartItem) => item.id === 'CartItem-' + food.id)
  if (itemToAdd) {
    itemToAdd.quantity++
    itemToAdd.price += food.price
  } else {
    itemToAdd = {
      id: 'CartItem-' + food.id,
      food,
      quantity: 1,
      price: food.price
    }
    cart.items.push(itemToAdd)
  }

  cart.totalPrice += food.price
  localStorage.setItem(STORAGE_KEY, JSON.stringify(cart))

  return new Promise(resolve => resolve(cart))
}

function getDefaultCart(): Cart {
  return {
    items: [],
    totalPrice: 0
  }
}