import { Food } from "./food";

export interface CartItem {
    id: string
    food: Food
    quantity: number
    price: number
}
