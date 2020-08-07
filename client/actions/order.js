export const ORDER_UPDATE = 'ORDER_UPDATE'
export const ORDER_CLEAR = 'ORDER_CLEAR'

export const updateOrder = (formData) => {
    return {
        type: ORDER_UPDATE,
        formData
    }
}

export const clearOrder = () => ({
    type: ORDER_CLEAR
})
