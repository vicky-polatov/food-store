import { Food } from '../model/food'
import { storageService } from './storage.service'


export const foodStorageService = {
    getFoods,
    getFoodById,
    removeFood,
    editFood
}

const STORAGE_KEY = 'food'

function getFoods(delay = 500): Promise<Food[]> {
    let foods = storageService.getFromStorage(STORAGE_KEY)
    if (!foods || !foods.length) {
        foods = _createFoods()
        storageService.saveToStorage(STORAGE_KEY, foods)
    }
    return new Promise((resolve) => {
        setTimeout(resolve, delay, foods)
    })
}

function getFoodById(foodId: string): Promise<Food> {
    return new Promise((resolve, reject) => {
        const foods = storageService.getFromStorage(STORAGE_KEY)
        if (!foods || !foods.length) reject('No foods')

        const food = foods.find((food: Food) => food.id === foodId)
        if (!food) reject('No such a food')

        resolve(food)
    })
}

function removeFood(foodId: string): Promise<Food> {
    return new Promise((resolve, reject) => {
        const foods: Food[] = storageService.getFromStorage(STORAGE_KEY)
        if (!foods || !foods.length) reject('Something went wrong')

        const foodIdx = foods.findIndex((food: Food) => food.id === foodId)
        if (foodIdx < 0) reject('Something went wrong')

        const removedFood = foods.splice(foodIdx, 1)[0]
        storageService.saveToStorage(STORAGE_KEY, foods)
        resolve(removedFood)
    })
}

function editFood(foodToSave: Food): Promise<Food> {
    return new Promise((resolve, reject) => {
        const foods = storageService.getFromStorage(STORAGE_KEY)
        if (!foods || !foods.length) reject('Something went wrong...')

        const foodIdx = foods.findIndex((food: Food) => food.id === foodToSave.id)
        if (foodIdx < 0) reject('Something went wrong...')

        const food = { ...foods[foodIdx], isFavorite: foodToSave.isFavorite }
        foods.splice(foodIdx, 1, food)
        storageService.saveToStorage(STORAGE_KEY, foods)
        resolve(food)
    })
}

function _createFoods() {
    return [
        {
            id: '100',
            name: 'Spaghetti Carbonara',
            category: 'Pasta',
            price: 12.99,
            description: 'Classic pasta dish with bacon, eggs, and Parmesan cheese',
            imgUrl: 'https://www.sipandfeast.com/wp-content/uploads/2022/09/spaghetti-carbonara-recipe-snippet.jpg',
            cookTime: '15-20',
            isFavorite: true,
            stars: 4.7,
        },
        {
            id: '101',
            name: 'Margherita Pizza',
            category: 'Pizza',
            price: 10.49,
            description: 'Traditional Italian pizza with tomato, mozzarella, and basil',
            imgUrl: 'https://ohsweetbasil.com/wp-content/uploads/four-cheese-margherita-pizza-recipe-12-scaled.jpg',
            cookTime: '15-30',
            isFavorite: true,
            stars: 4.8,
        },
        {
            id: '102',
            name: 'Pad Thai',
            category: 'Noodles',
            price: 11.99,
            description: 'Thai stir-fried rice noodles with tofu, shrimp, or chicken',
            imgUrl: 'https://www.recipetineats.com/wp-content/uploads/2020/01/Chicken-Pad-Thai_9-SQ.jpg',
            cookTime: '20-30',
            isFavorite: true,
            stars: 4.5,
        },
        {
            id: '103',
            name: 'Lamb Kebab',
            category: 'Grill',
            price: 15.99,
            description: 'Grilled skewers of marinated lamb served with pita and sauce',
            imgUrl: 'https://food-images.files.bbci.co.uk/food/recipes/lambkebabs_2214_16x9.jpg',
            cookTime: '20-30',
            isFavorite: false,
            stars: 4.8,
        },
        {
            id: '104',
            name: 'Mango Sticky Rice',
            category: 'Dessert',
            price: 8.49,
            description: 'Thai dessert made with ripe mangoes and sweet sticky rice',
            imgUrl: 'https://omnivorescookbook.com/wp-content/uploads/2023/06/230619_Mango-Coconut-Rice_550.jpg',
            cookTime: '10-30',
            isFavorite: false,
            stars: 4.1,
        },
        {
            id: '105',
            name: 'Caesar Salad',
            category: 'Salad',
            price: 8.99,
            description: 'Fresh salad with romaine lettuce, croutons, and Caesar dressing',
            imgUrl: 'https://s23209.pcdn.co/wp-content/uploads/2023/01/220905_DD_Chx-Caesar-Salad_051.jpg',
            cookTime: '5-10',
            isFavorite: false,
            stars: 4.7,
        },
        {
            id: '106',
            name: 'Beef Tacos',
            category: 'Mexican',
            price: 9.99,
            description: 'Soft tortillas filled with seasoned beef, lettuce, and salsa',
            imgUrl: 'https://danosseasoning.com/wp-content/uploads/2022/03/Beef-Tacos-768x575.jpg',
            cookTime: '20-30',
            isFavorite: true,
            stars: 4.7,
        },
        {
            id: '107',
            name: 'Miso Soup',
            category: 'Japanese',
            price: 4.99,
            description: 'Traditional Japanese soup with tofu and seaweed',
            imgUrl: 'https://thehealthyepicurean.com/wp-content/uploads/2022/03/Spicy-Miso-Soup-with-Ramen-1-scaled.jpg',
            cookTime: '20-30',
            isFavorite: false,
            stars: 4.1,
        },
        {
            id: '108',
            name: 'Greek Salad',
            category: 'Salad',
            price: 9.49,
            description: 'Salad with tomatoes, cucumbers, olives, feta cheese, and vinaigrette',
            imgUrl: 'https://assets.epicurious.com/photos/576454fb42e4a5ed66d1df6b/1:1/w_2560%2Cc_limit/greek-salad.jpg',
            cookTime: '20-30',
            isFavorite: false,
            stars: 4.2,
        },
        {
            id: '109',
            name: 'Pho',
            category: 'Vietnamese',
            price: 11.99,
            description: 'Vietnamese soup with rice noodles, beef, and aromatic herbs',
            imgUrl: 'https://img.hellofresh.com/hellofresh_s3/image/pho-style-beef-noodle-soup-f314a261.jpg',
            cookTime: '30-40',
            isFavorite: true,
            stars: 4.7,
        },
        {
            id: '110',
            name: 'Falafel Wrap',
            category: 'Middle Eastern',
            price: 8.99,
            description: 'Chickpea fritters with tahini sauce wrapped in pita bread',
            imgUrl: 'https://static.toiimg.com/thumb/62708678.cms?width=1200&height=900',
            cookTime: '20-30',
            isFavorite: true,
            stars: 4.8,
        },
        {
            id: '111',
            name: 'Beef Bulgogi',
            category: 'Korean',
            price: 16.49,
            description: 'Marinated grilled beef served with rice and vegetables',
            imgUrl: 'https://hips.hearstapps.com/hmg-prod/images/bulgogi1-1659544883.jpg?crop=0.684xw:1.00xh;0.179xw,0&resize=1200:*',
            cookTime: '20-30',
            isFavorite: false,
            stars: 4.2,
        },
        {
            id: '112',
            name: 'Ratatouille',
            category: 'French',
            price: 12.99,
            description: 'Provençal vegetable stew with tomatoes, eggplant, and zucchini',
            imgUrl: 'https://www.allrecipes.com/thmb/F1rucOY3FQT5Ic0oyxdLoqU_yKc=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/222006-disneys-ratatouille-DDMFS-4x3-36eb15843ab548a79e7aab761dac92e1.jpg',
            cookTime: '20-30',
            isFavorite: true,
            stars: 4.2,
        },
        {
            id: '113',
            name: 'Sushi Burrito',
            category: 'Japanese',
            price: 11.49,
            description: 'Sushi ingredients wrapped in seaweed and rice like a burrito',
            imgUrl: 'https://www.sidechef.com/recipe/0fbd70b3-d17d-4928-952f-80f4ebf19c6f.jpg?d=1408x1120',
            cookTime: '20-25',
            isFavorite: true,
            stars: 4.2,
        },
        {
            id: '114',
            name: 'Chicken Shawarma',
            category: 'Middle Eastern',
            price: 13.99,
            description: 'Grilled chicken in pita bread with tahini sauce and veggies',
            imgUrl: 'https://i0.wp.com/smokedfinefood.co.uk/wp-content/uploads/2018/05/IMG_8235-1.jpg?fit=1083%2C600&ssl=1',
            cookTime: '20-30',
            isFavorite: false,
            stars: 4.7,
        },
        {
            id: '115',
            name: 'Eggplant Parmesan',
            category: 'Italian',
            price: 10.99,
            description: 'Breaded and fried eggplant slices with tomato sauce and cheese',
            imgUrl: 'https://www.honeywhatscooking.com/wp-content/uploads/2023/09/eggplant-parmesan-pasta-featured2-1.jpg',
            cookTime: '30-40',
            isFavorite: true,
            stars: 4.7,
        },
        {
            id: '116',
            name: 'Moussaka',
            category: 'Greek',
            price: 13.49,
            description: 'Layered dish with eggplant, minced meat, and béchamel sauce',
            imgUrl: 'https://www.recipetineats.com/wp-content/uploads/2019/03/Greek-Moussaka_3-re-edited-SQ.jpg',
            cookTime: '30-40',
            isFavorite: true,
            stars: 4.8,
        },
        {
            id: '117',
            name: 'Pierogi',
            category: 'Polish',
            price: 11.99,
            description: 'Dumplings filled with various ingredients like potato or cheese',
            imgUrl: 'https://staticcookist.akamaized.net/wp-content/uploads/sites/22/2021/08/pierogi-1.jpg',
            cookTime: '20-30',
            isFavorite: true,
            stars: 4.7,
        },
        {
            id: '118',
            name: 'Lomo Saltado',
            category: 'Peruvian',
            price: 15.99,
            description: 'Stir-fried beef, onions, tomatoes, and fries, served with rice',
            imgUrl: 'https://poormansgourmetkitchen.com/wp-content/uploads/2016/05/Youtube-Lomo-Saltado-Main-pic.jpg',
            cookTime: '15-25',
            isFavorite: false,
            stars: 4.7,
        },
        {
            id: '119',
            name: 'Banh Mi Sandwich',
            category: 'Vietnamese',
            price: 9.49,
            description: 'Baguette sandwich with meats, pickled vegetables, and herbs',
            imgUrl: 'https://www.allrecipes.com/thmb/HTJHVC_LYKmXaMF54dhe2gZQkNI=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/roasted-pork-banh-mi-vietnamese-sandwitch-ddmfs-3X4-0332-cfb4d2e149e7476ab2a2b4030c543f1b.jpg',
            cookTime: '20-25',
            isFavorite: true,
            stars: 4.7,
        },
        {
            id: '120',
            name: 'Chicken Adobo',
            category: 'Filipino',
            price: 13.49,
            description: 'Chicken stewed in vinegar, soy sauce, garlic, and spices',
            imgUrl: 'https://www.chilipeppermadness.com/wp-content/uploads/2022/09/Chicken-Adobo-SQ.jpg',
            cookTime: '20-30',
            isFavorite: true,
            stars: 4.7,
        },
        {
            id: '121',
            name: 'Bibimbap',
            category: 'Korean',
            price: 12.49,
            description: 'Mixed rice with vegetables, beef, fried egg, and spicy sauce',
            imgUrl: 'https://australianmushrooms.com.au/wp-content/uploads/2023/04/MushroomBibimbapBowl_1080x720.jpg',
            cookTime: '20-30',
            isFavorite: false,
            stars: 4.6,
        },
        {
            id: '122',
            name: 'Jerk Chicken',
            category: 'Caribbean',
            price: 14.99,
            description: 'Grilled chicken marinated in Jamaican jerk spices',
            imgUrl: 'https://www.seriouseats.com/thmb/6xOGMN1PiMndv1KYHfBa--b42-o=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/20230511-SEA-PanChicken-KarinaMatalon-hero-840f61c426c6444a8fdb3b80d67b577f.jpg',
            cookTime: '20-30',
            isFavorite: false,
            stars: 4.7,
        },
        // {
        //     id: 2,
        //     name: 'Meatball',
        //     price: 20,
        //     cookTime: '20-30',
        //     isFavorite: true,
        //     origins: ['persia', 'middle east', 'china'],
        //     stars: 4.7,
        //     imageUrl: '/assets/images/foods/food-2.jpg',
        //     tags: ['SlowFood', 'Lunch'],
        // },
        // {
        //     id: 3,
        //     name: 'Hamburger',
        //     price: 5,
        //     cookTime: '10-15',
        //     isFavorite: false,
        //     origins: ['germany', 'us'],
        //     stars: 3.5,
        //     imageUrl: '/assets/images/foods/food-3.jpg',
        //     tags: ['FastFood', 'Hamburger'],
        // },
        // {
        //     id: 4,
        //     name: 'Fried Potatoes',
        //     price: 2,
        //     cookTime: '15-20',
        //     isFavorite: true,
        //     origins: ['belgium', 'france'],
        //     stars: 3.3,
        //     imageUrl: '/assets/images/foods/food-4.jpg',
        //     tags: ['FastFood', 'Fry'],
        // },
        // {
        //     id: 5,
        //     name: 'Chicken Soup',
        //     price: 11,
        //     cookTime: '40-50',
        //     isFavorite: false,
        //     origins: ['india', 'asia'],
        //     stars: 3.0,
        //     imageUrl: '/assets/images/foods/food-5.jpg',
        //     tags: ['SlowFood', 'Soup'],
        // },
        // {
        //     id: 6,
        //     name: 'Vegetables Pizza',
        //     price: 9,
        //     cookTime: '40-50',
        //     isFavorite: false,
        //     origins: ['italy'],
        //     stars: 4.0,
        //     imageUrl: '/assets/images/foods/food-6.jpg',
        //     tags: ['FastFood', 'Pizza', 'Lunch'],
        // },

    ]
}

