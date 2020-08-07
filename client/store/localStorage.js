const CART_KEY = 'cart'
const CURRENCY_KEY = 'currency'

const getCart = () => {
    try {
        const cart = JSON.parse(localStorage.getItem(CART_KEY))
        if (cart && typeof cart === 'object') {
            return cart
        }

        return {}
    } catch (e) {
        console.warn('An error occurred in getCart function:', e.message)
        return {}
    }
}

const saveCart = (cart) => {
    localStorage.setItem(CART_KEY, JSON.stringify(cart))
}

export const cartLocalStorage = {
    getCart() {
        return getCart()
    },
    addItem(id) {
        const cart = getCart()
        if (typeof cart[id] === 'undefined') {
            cart[id] = 1
        } else {
            cart[id] += 1
        }
        saveCart(cart)
    },
    removeItem(id) {
        const cart = getCart()
        if (typeof cart[id] !== 'undefined') {
            delete cart[id]
        }
        saveCart(cart)
    },
    incrementQty(id) {
        const cart = getCart()
        if (typeof cart[id] !== 'undefined') {
            cart[id] += 1
        } else {
            cart[id] = 1
        }
        saveCart(cart)
    },
    decrementQty(id) {
        const cart = getCart()
        if (typeof cart[id] !== 'undefined') {
            if (cart[id] > 1) {
                cart[id] -= 1
            } else {
                delete cart[id]
            }
        }
        saveCart(cart)
    },
    clear() {
        saveCart({})
    }
}

export const currencyLocalStorage = {
    getCurrency() {
        return localStorage.getItem(CURRENCY_KEY)
    },
    changeCurrency(value) {
        localStorage.setItem(CURRENCY_KEY, value)
    }
}
