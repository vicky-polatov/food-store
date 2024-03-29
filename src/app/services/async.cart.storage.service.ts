import { Cart } from "../model/cart"
import { CartItem } from "../model/cart-item"
import { Food } from "../model/food"
import { storageService } from "./storage.service"

export const cartStorageService = {
  getCart,
  getDefaultCart,
  addToCart,
  removeFromCart,
  setQuantity
}

const STORAGE_KEY = 'cart'

function getCart(): Promise<Cart> {
  return new Promise((resolve) => {
    const cart = storageService.getFromStorage(STORAGE_KEY) || getDefaultCart()
    resolve(cart)
  })
}

function addToCart(food: Food): Promise<Cart> {
  return new Promise(resolve => {
    const cart = storageService.getFromStorage(STORAGE_KEY) || getDefaultCart()

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
    storageService.saveToStorage(STORAGE_KEY, cart)
    resolve(cart)
  })
}

function removeFromCart(cartItem: CartItem): Promise<Cart> {
  return new Promise((resolve, reject) => {
    const cart = storageService.getFromStorage(STORAGE_KEY) || getDefaultCart()
    const itemIdx = cart.items.findIndex((item: CartItem) => item.id === cartItem.id)
    if (itemIdx < 0) return reject('The dish was not found in the cart')

    cart.totalPrice -= cartItem.food.price * cartItem.quantity
    cart.items.splice(itemIdx, 1)

    storageService.saveToStorage(STORAGE_KEY, cart)
    resolve(cart)
  })
}

function setQuantity(cartItem: CartItem, diff: number): Promise<Cart> {
  return new Promise((resolve, reject) => {
    const cart = storageService.getFromStorage(STORAGE_KEY)
    if (!cart || !cart.items.length) return reject('Something went wrong')

    const itemIdx = cart.items.findIndex((item: CartItem) => item.id === cartItem.id)
    if (itemIdx < 0) return reject('Something went wrong')

    const itemToSet = cart.items[itemIdx]
    itemToSet.quantity += diff
    if (!itemToSet.quantity) cart.items.splice(itemIdx, 1)
    else itemToSet.price += itemToSet.food.price * diff

    cart.totalPrice += itemToSet.food.price * diff

    storageService.saveToStorage(STORAGE_KEY, cart)
    resolve(cart)
  })
}

function getDefaultCart(): Cart {
  return {
    items: [],
    totalPrice: 0
  }
}