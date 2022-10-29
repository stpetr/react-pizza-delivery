export const isOrderInfoValid = (formData) => {
  return !!(formData.name && formData.lastName && formData.address)
}
