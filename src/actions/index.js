export const deleteTea = id => ({
  type: 'DELETE_TEA',
  id
});

export const toggleForm = () => ({
  type: 'TOGGLE_FORM'
});

export const addTea = (tea) => {
  const { name,  price, typeOfTea,inStock,outOfStock, id } = tea;
  return {
    type: 'ADD_TEA',
    name: name,
    price: price,
    typeOfTea: typeOfTea,
    inStock: inStock,
    outOfStock: outOfStock,
    id: id
  }
}