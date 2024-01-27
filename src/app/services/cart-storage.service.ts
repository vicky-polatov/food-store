import { Cart } from "../model/cart"
import { CartItem } from "../model/cart-item"
import { Food } from "../model/food"

export const cartStorageService = {
  getCart,
  getDefaultCart,
  addToCart,
  removeFromCart
}

const STORAGE_KEY = 'cart'

function getCart(): Promise<Cart> {
  const cart = JSON.parse(localStorage.getItem(STORAGE_KEY) || 'null') || getDefaultCart()
  return new Promise((resolve) => resolve(cart))
}

function addToCart(food: Food): Promise<Cart> {
  const cart = JSON.parse(localStorage.getItem(STORAGE_KEY) || 'null') || getDefaultCart()

  let itemToAdd = cart.items?.find((item: CartItem) => item.food.id === food.id)
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

function removeFromCart(cartItem: CartItem): Promise<Cart> {
  return new Promise((resolve, reject) => {
    const cart: Cart = JSON.parse(localStorage.getItem(STORAGE_KEY) || 'null') || getDefaultCart()
    const itemIdx = cart.items.findIndex((item: CartItem) => item.id === cartItem.id)
    if (itemIdx === -1) return reject('The dish was not found in the cart')

    cart.totalPrice -= cartItem.food.price * cartItem.quantity
    cart.items.splice(itemIdx, 1)

    localStorage.setItem(STORAGE_KEY, JSON.stringify(cart))
    return resolve(cart)
  })
}

function getDefaultCart(): Cart {
  return {
    items: [],
    totalPrice: 0
  }
}